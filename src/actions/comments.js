
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const ADD_COMMENT = 'ADD_COMMENT';
export const UPDATE_COMMENT = 'UPDATE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

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
