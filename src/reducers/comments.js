import {
  GET_COMMENTS_PENDING,
  GET_COMMENTS_SUCCESS
} from '../actions/comments';

export default( state = [], action ) => {
  switch(action.type) {
    case GET_COMMENTS_PENDING:
      return state;
    case GET_COMMENTS_SUCCESS:
      return [...state].concat(action.payload.data);
    default :
      return state;
  }
}
