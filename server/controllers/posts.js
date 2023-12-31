import PostMessage from "../models/postMessages.js";
import mongoose from 'mongoose';

export const getPosts =  async(req, res) => {
    // res.send('THIS WORKS ADI');
    try{
        const postMessages = await PostMessage.find();
        // console.log(postMessages)
        res.status(200).json(postMessages)
    }
    catch(error){
        res.status(401).json({message: error.message})
    }
}

export const createPost = async(req, res) => {
 const body = req.body
 
 const newPost = new PostMessage(body)
 try{
   await newPost.save()
    // console.log(postMessages)
    res.status(201).json(newPost)
}
catch(error){
    res.status(409).json({message: error.message})
}

}

export const updatePost = async (req, res) => {
    const { id } = req.params;
    const { title, message, creator, selectedFile, tags } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = { creator, title, message, tags, selectedFile, _id: id };

    await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
}

export const deletePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await PostMessage.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}

export const likePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    
    const post = await PostMessage.findById(id);

    const updatedPost = await PostMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true });
    
    res.json(updatedPost);
}