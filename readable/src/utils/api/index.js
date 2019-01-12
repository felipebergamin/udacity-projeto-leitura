import categoriesApi from './categories';
import commentsApi from './comments';
import postsApi from './posts';

const baseUrl = '//localhost:3001';
const headers = {
  'Authorization': 'Cayde-6',
};

export const Categories = categoriesApi(baseUrl, headers);
export const Comments = commentsApi(baseUrl, headers);
export const Posts = postsApi(baseUrl, headers);

export default { Categories, Comments, Posts };
