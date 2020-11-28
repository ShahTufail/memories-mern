import PostMessage from '../models/PostMessage.js';


export const getPosts = async (req, res ) => {
    try {
        const postMessages = await PostMessage.find();
        console.log(postMessages);
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message})
        console.log('error occured');
    }
}

export const createPosts = (req,res) => {
    res.send('Created');
}