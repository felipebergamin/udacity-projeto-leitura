import {
  ADD_COMMENT,
  RECEIVE_COMMENTS,
  REMOVE_COMMENT,
  UPDATE_COMMENT,
  DOWNVOTE_COMMENT,
  UPVOTE_COMMENT,
} from '../actions/comments';

export default function comments(state = [], action) {
  switch(action.type) {
    case ADD_COMMENT:
      return [...state, action.comment];
    case RECEIVE_COMMENTS:
      return [...state, ...action.comments];
    case REMOVE_COMMENT:
      return state.filter(comment => comment.id !== action.id);
    case UPDATE_COMMENT:
      return state.map(comment => comment.id === action.comment.id ? action.comment : comment);
    case UPVOTE_COMMENT:
      return state.map(comment => comment.id === action.id ? ({ ...comment, voteScore: comment.voteScore + 1 }) : comment)
    case DOWNVOTE_COMMENT:
      return state.map(comment => comment.id === action.id ? ({ ...comment, voteScore: comment.voteScore - 1 }) : comment)
    default:
      return state;
  }
}
