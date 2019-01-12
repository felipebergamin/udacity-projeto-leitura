import { Categories, Posts } from '../utils/api';
import { receiveCategories } from './categories';
import { receivePosts } from './posts';
import { receiveComments } from './comments';

export function handleInitialData() {
  return async dispatch => {
    const categories = await Categories.listCategories();
    const posts = await Posts.listPosts();

    if (posts) {
      for (const post of posts) {
        const postComments = await Posts.getComments(post.id);
        post.comments = postComments.map(comment => comment.id);
        dispatch(receiveComments(postComments));
      }
    }

    dispatch(receiveCategories(categories));
    dispatch(receivePosts(posts));

  }
}