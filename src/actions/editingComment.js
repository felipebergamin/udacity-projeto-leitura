
export const TOGGLE_EDIT_COMMENT = 'TOGGLE_EDIT_COMMENT';

export function toggleEditComment(comment) {
  return {
    type: TOGGLE_EDIT_COMMENT,
    comment,
  }
}
