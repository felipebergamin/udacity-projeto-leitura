
export const ADD_POST = 'ADD_POST';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const UPDATE_POST = 'UPDATE_POST';
export const REMOVE_POST = 'REMOVE_POST';

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
