import {
  ADD_POST,
  RECEIVE_POSTS,
  REMOVE_POST,
  UPDATE_POST,
  UPVOTE_POST,
  DOWNVOTE_POST,
} from '../actions/posts';

export default function posts(state = [], action) {
  switch (action.type) {
    case ADD_POST:
      return [...state, action.post];
    case RECEIVE_POSTS:
      return [...state, ...action.posts];
    case REMOVE_POST:
      return state.filter(post => post.id !== action.id);
    case UPDATE_POST:
      return state.map(post => post.id === action.post.id ? {...post, ...action.post} : post);
    case UPVOTE_POST:
      return state.map(post => post.id === action.id ? ({ ...post, voteScore: post.voteScore + 1 }) : post);
    case DOWNVOTE_POST:
      return state.map(post => post.id === action.id ? ({ ...post, voteScore: post.voteScore - 1 }) : post);
    default:
      return state;
  }
}
