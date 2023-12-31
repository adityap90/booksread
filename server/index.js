import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

import postRoutes from './routes/posts.js'

const app = express();

app.use(bodyParser.json({limit : "30mb", extended : true}))
app.use(bodyParser.urlencoded({limit : "30mb", extended : true}))
app.use(cors())
app.use('/posts', postRoutes)

const CONNECTION_URL = 'mongodb+srv://adivarma981:adIworlD98@cluster0.vveydpd.mongodb.net/'
const PORT = 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser : true, useUnifiedTopology : true})
.then(() => app.listen(PORT, () => console.log("server running on port")))
.catch((error) => {console.log(error.message)})

// var databaseConnection = await MongoClient.connect(CONNECTION_URL, {
//     ssl: true,
// });

// mongoose.set('useFindAndModify',false)