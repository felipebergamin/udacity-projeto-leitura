import reducer from './comments';
import {
  addComment,
  removeComment,
  receiveComments,
  updateComment
} from '../actions/comments';

describe('comment reducer', () => {
  it('should initialize state with an empty array', () => {
    expect(reducer(undefined, {})).toEqual([])
  })

  it('should handle ADD_COMMENT', () => {
    expect(
      reducer([], addComment({ body: 'comment body' }))
    ).toEqual([
      { body: 'comment body' }
    ])
  })

  it('REMOVE_COMMENT: should remove a comment when id matches', () => {
    expect(
      reducer([{ id: 2 }], removeComment(2))
    ).toEqual([]);
  })

  it('REMOVE_COMMENT: should not remove a comment when id doesn\'t matches', () => {
    const state = [{ id: 2 }];
    expect(
      reducer(state, removeComment(4))
    ).toEqual(state);
  })

  it('RECEIVE_COMMENTS: should append received comments to state', () => {
    const state = [{ body: 'comment 1' }];
    const receivedComments = [{ body: 'comment 2' }, { body: 'comment 3' }];
    expect(
      reducer(state, receiveComments(receivedComments))
    ).toEqual([...state, ...receivedComments]);
  })

  it ('UPDATE_COMMENT: should replace updated comment on state', () => {
    const comment1 = { id: 1, body: 'comment' }
    const comment2 = { id: 2, body: 'comment 2' }
    const comment3 = { id: 3, body: 'comment 3' }
    const updatedComment = { id: 2, body: 'updated comment!' }

    const state = [comment1, comment2, comment3]

    expect(reducer(state, updateComment(updatedComment))).toEqual([comment1, updatedComment, comment3])
  })
})
