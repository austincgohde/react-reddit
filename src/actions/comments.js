import axios from 'axios';

export const GET_COMMENTS_PENDING = 'GET_COMMENTS_PENDING';
export const GET_COMMENTS_SUCCESS = 'GET_COMMENTS_SUCCESS';
export const ADD_COMMENT_PENDING = 'ADD_COMMENT_PENDING';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';

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

export const addComment = (comment) => {
  return async (dispatch) => {
    dispatch({ type: ADD_COMMENT_PENDING });
    let comments = await axios.post('http://localhost:8000/comments', comment)
    dispatch({
      type: ADD_COMMENT_SUCCESS,
      payload: comments
    })
  }
}
