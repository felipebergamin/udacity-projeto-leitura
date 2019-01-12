import { Posts } from '../utils/api';

export const ADD_POST = 'ADD_POST';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const UPDATE_POST = 'UPDATE_POST';
export const REMOVE_POST = 'REMOVE_POST';
export const UPVOTE_POST = 'UPVOTE_POST';
export const DOWNVOTE_POST = 'DOWNVOTE_POST';

export function receivePosts(posts) {
  return {
    type: RECEIVE_POSTS,
    posts,
  };
}

export function updatePost(post) {
  return {
    type: UPDATE_POST,
    post,
  };
}

export function addPost(post) {
  return {
    type: ADD_POST,
    post,
  };
}

export function removePost(id) {
  return {
    type: REMOVE_POST,
    id,
  }
}

export function upvotePost(id) {
  return {
    type: UPVOTE_POST,
    id,
  };
}

export function downvotePost(id) {
  return {
    type: DOWNVOTE_POST,
    id,
  };
}

export function handleAddPost(title, body, author, category) {
  return async dispatch => {
    const post = await Posts.createPost(title, body, author, category);
    dispatch(addPost({ ...post, comments: [] }));
  }
}

export function handleUpvotePost(id) {
  return async dispatch => {
    await Posts.upVote(id);
    dispatch(upvotePost(id));
  }
}

export function handleDownvotePost(id) {
  return async dispatch => {
    await Posts.downVote(id);
    dispatch(downvotePost(id));
  }
}

export function handleUpdatePost(postid, title, body) {
  return async dispatch => {
    const post = await Posts.update(postid, title, body);
    dispatch(updatePost(post));
  }
}

export function handleDeletePost(postid) {
  return async dispatch => {
    await Posts.remove(postid);
    dispatch(removePost(postid));
  }
}
