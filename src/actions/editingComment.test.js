import { TOGGLE_EDIT_COMMENT, toggleEditComment } from './editingComment';

describe('editingComments actions', () => {
  it('should create an action to toggle editingComment state', () => {
    const id = 1;
    const expectedAction = {
      type: TOGGLE_EDIT_COMMENT,
      comment: id,
    };

    expect(toggleEditComment(id)).toEqual(expectedAction);
  })
})
