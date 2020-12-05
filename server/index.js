import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose'; // mongoDB node client
import cors from "cors";

import postRoutes from './routes/posts.js';

const app = express();


app.use(bodyParser.json({limit: '30mb', exteded: true}));
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));
app.use(cors());
app.use('/posts', postRoutes);

// const CONNECTION_URL = 'mongodb+srv://mern_project:mern_project123@cluster0.j2iaw.mongodb.net/dbname?retryWrites=true&w=majority'; // srv gives issues with moongoose, hence move mongoAtlas link for node < 2.2
const CONNECTION_URL = 'mongodb://mern_project:mern_project123@cluster0-shard-00-00.j2iaw.mongodb.net:27017,cluster0-shard-00-01.j2iaw.mongodb.net:27017,cluster0-shard-00-02.j2iaw.mongodb.net:27017/<dbname>?ssl=true&replicaSet=atlas-y5krh0-shard-0&authSource=admin&retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

// https://www.mongodb.com/cloud/atlas
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(PORT, () => console.log(`Server running on Port: ${PORT}`)))
.catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);