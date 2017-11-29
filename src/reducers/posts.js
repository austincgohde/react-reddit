import {
  GET_POSTS_PENDING,
  GET_POSTS_SUCCESS,
  ADD_NEW_POSTS_PENDING,
  ADD_NEW_POSTS_SUCCESS
} from '../actions/posts';

export default( state = [], action ) => {
  switch(action.type) {
    case GET_POSTS_PENDING:
      return state;
    case GET_POSTS_SUCCESS:
      return [...action.payload.data];
    case ADD_NEW_POSTS_PENDING:
      return state;
    case ADD_NEW_POSTS_SUCCESS:
      return [...action.payload.data];
    default:
      return state;
  }
}
