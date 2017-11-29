import axios from 'axios';

export const GET_COMMENTS_PENDING = 'GET_COMMENTS_PENDING';
export const GET_COMMENTS_SUCCESS = 'GET_COMMENTS_SUCCESS';

export const getComments = () => {
  return async (dispatch) => {
    dispatch({ type: GET_COMMENTS_PENDING });
    let comments = await axios.get('http://localhost:8000/comments')
    dispatch({
      type: GET_COMMENTS_SUCCESS,
      payload: comments
    })
  }
}
