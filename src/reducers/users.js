import { GET_POSTS_PENDING, GET_POSTS_SUCCESS } from '../actions/users';

export default( state = [], action ) => {
  switch(action.type) {
    case GET_POSTS_PENDING:
      return state;
    case GET_POSTS_SUCCESS:
      return [...action.payload.data];
    default:
      return state;
  }
}
