import { Comments } from '../utils/api';

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const ADD_COMMENT = 'ADD_COMMENT';
export const UPDATE_COMMENT = 'UPDATE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const UPVOTE_COMMENT = 'UPVOTE_COMMENT';
export const DOWNVOTE_COMMENT = 'DOWNVOTE_COMMENT';

export function receiveComments(comments) {
  return {
    type: RECEIVE_COMMENTS,
    comments,
  };
}

export function addComment(comment) {
  return {
    type: ADD_COMMENT,
    comment,
  };
}

export function updateComment(comment) {
  return {
    type: UPDATE_COMMENT,
    comment,
  };
}

export function removeComment(id) {
  return {
    type: REMOVE_COMMENT,
    id,
  };
}

export function upvoteComment(id) {
  return {
    type: UPVOTE_COMMENT,
    id,
  };
}

export function downvoteComment(id) {
  return {
    type: DOWNVOTE_COMMENT,
    id,
  };
}

export function handleAddComment(body, author, parentId) {
  return async dispatch => {
    const comment = await Comments.addComment(body, author, parentId);
    dispatch(addComment(comment));
  }
}

export function handleUpVoteComment(id) {
  return async dispatch => {
    await Comments.upvoteComment(id);
    dispatch(upvoteComment(id));
  }
}

export function handleDownVoteComment(id) {
  return async dispatch => {
    await Comments.downvoteComment(id);
    dispatch(downvoteComment(id));
  }
}

export function handleRemoveComment(id) {
  return async dispatch => {
    await Comments.deleteComment(id);
    dispatch(removeComment(id));
  }
}

export function handleUpdateComment(id, body) {
  return async dispatch => {
    const comment = await Comments.updateComment(id, body);
    dispatch(updateComment(comment));
  }
}
