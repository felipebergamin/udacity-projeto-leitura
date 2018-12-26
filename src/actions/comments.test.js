import {
  ADD_COMMENT,
  RECEIVE_COMMENTS,
  REMOVE_COMMENT,
  UPDATE_COMMENT,
  UPVOTE_COMMENT,
  DOWNVOTE_COMMENT,
  addComment,
  receiveComments,
  removeComment,
  updateComment,
  upvoteComment,
  downvoteComment,
} from './comments';

describe('comments action creators', () => {
  it('should return an action to receive comments', () => {
    const comments = [
      { body: 'c1' },
      { body: 'c2' },
    ]

    const expectedAction = {
      type: RECEIVE_COMMENTS,
      comments,
    }

    expect(receiveComments(comments)).toEqual(expectedAction)
  })

  it('should return an action to add a comment', () => {
    const comment = { body: 'c1' }
    const expectedAction = {
      type: ADD_COMMENT,
      comment,
    }

    expect(addComment(comment)).toEqual(expectedAction)
  })

  it('should return an action to remove a comment', () => {
    const id = 123;
    const expectedAction = {
      type: REMOVE_COMMENT,
      id,
    }

    expect(removeComment(id)).toEqual(expectedAction)
  })

  it('should return an action to update a comment', () => {
    const comment = { body: 'comment' }
    const expectedAction = {
      type: UPDATE_COMMENT,
      comment,
    }

    expect(updateComment(comment)).toEqual(expectedAction)
  })

  it('should return an action to upvote a comment', () => {
    const id = 1;
    const expectedAction = {
      type: UPVOTE_COMMENT,
      id,
    };

    expect(upvoteComment(id)).toEqual(expectedAction);
  })

  it('should return an action to downvote a comment', () => {
    const id = 1;
    const expectedAction = {
      type: DOWNVOTE_COMMENT,
      id,
    };

    expect(downvoteComment(id)).toEqual(expectedAction);
  })
})