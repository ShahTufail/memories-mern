import * as api from '../api';


// action creators
export const getPosts = () => async(dispatch ) => { // using redux thunk for async action added extra async(disptach) =>
    try {
        debugger;
        const  { data } = await api.fetchPosts;
        dispatch({ type: 'FETCH_ALL', payload: data});
    } catch (error) {
        console.log(error.message);
    }
    // const action = { type: "FETCH_ALL", payload: [] };
    // dispatch(action);
}