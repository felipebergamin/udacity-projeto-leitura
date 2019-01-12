import { combineReducers } from 'redux';

import categories from './categories';
import posts from './posts';
import comments from './comments';
import editingComment from './editingComment';

export default combineReducers({
  categories,
  posts,
  comments,
  editingComment,
});
