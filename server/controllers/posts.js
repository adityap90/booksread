import PostMessage from "../models/postMessages.js";

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