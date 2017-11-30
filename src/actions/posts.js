import axios from 'axios';

export const GET_POSTS_PENDING = 'GET_POSTS_PENDING';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const ADD_NEW_POSTS_PENDING = 'ADD_NEW_POSTS_PENDING';
export const ADD_NEW_POSTS_SUCCESS = 'ADD_NEW_POSTS_SUCCESS';
export const POST_VOTE_PENDING = 'POST_UPVOTE_PENDING';
export const POST_VOTE_SUCCESS = 'POST_UPVOTE_SUCCESS';

export const createPost = (post) => {
  return async (dispatch) => {
    post.image_url = post.image;
    delete post.image
    dispatch({ type: ADD_NEW_POSTS_PENDING })
    let allPosts = await axios.post('http://localhost:8000/posts', post)
    dispatch({
      type: ADD_NEW_POSTS_SUCCESS,
      payload: allPosts
    })
  }
}

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

export const votePost = (postId, votes) => {
  return async (dispatch) => {
    dispatch({ type: POST_VOTE_PENDING })
    let posts = await axios.patch(`http://localhost:8000/posts/${postId}`, votes)
    dispatch({
      type: POST_VOTE_SUCCESS,
      payload: posts
    })
  }
}
