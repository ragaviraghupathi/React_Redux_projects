export function increment(index){
    return({
        type : 'INCREMENT_LIKES',
        index : index
        //index for the above statement in es6
    });
}
// when an action is dispatched, all the reducers run irrespective of in which reducer is designed to act
//on the actions.
export function addComment(postId, author, comment){
    return({
        type : 'ADD_COMMENT',
        postId : postId,
        author : author,
        comment: comment
    });
}

export function removeComment(postId,i){
    return({
        type : 'REMOVE_COMMENT',
        postId : postId,
        i:i
    });
}