import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose'; // mongoDB node client
import cors from "cors";

const app = express();

app.use(bodyParser.json({limit: '30mb', exteded: true}));
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://mern_project:mern_project123@cluster0.j2iaw.mongodb.net/<dbname>?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

// https://www.mongodb.com/cloud/atlas
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(PORT, () => console.log(`Server running on Port: ${PORT}`)))
.catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);