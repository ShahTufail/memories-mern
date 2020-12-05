export default (posts = [], action) => { // here state is equal to 'posts'
    switch (action.type) {
        case 'FETCH_ALL':
            
            return action.payload;
        case 'CREATE':
            
            return posts;
    
        default:
            return posts;
    }
}