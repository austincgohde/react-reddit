import axios from 'axios';

export const GET_POSTS_PENDING = 'GET_POSTS_PENDING';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';

export const getPosts = () => {
  return async (dispatch) => {
    dispatch({ type: GET_POSTS_PENDING })
    let posts = await axios.get('http://localhost:8000/posts')
    dispatch({
      type: GET_POSTS_SUCCESS,
      payload: posts
    })
  }
}
