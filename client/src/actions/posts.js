import * as api from '../api';


// action creators
export const getPosts = () => async(dispatch ) => { // using redux thunk for async action added extra async(disptach) =>
    try {
        const  { data } = await api.fetchPosts;
        dispatch({ type: 'FETCH_ALL', payload: data});
    } catch (error) {
        console.log(error.message);
    }
}

export const createPost = (post) => async(dispatch) =>  {
try {
    const { data } = await api.createPosts(post);
} catch (error) {
    console.log(error.message);
}
}