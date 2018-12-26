
import { TOGGLE_EDIT_COMMENT } from '../actions/editingComment';

export default function editingComment(state = null, action) {
  switch (action.type) {
    case TOGGLE_EDIT_COMMENT:
      return action.comment || null;
    default:
      return state;
  }
}
