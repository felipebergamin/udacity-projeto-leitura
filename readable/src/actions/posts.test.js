import { receivePosts,
  ADD_POST,
  RECEIVE_POSTS,
  UPDATE_POST,
  REMOVE_POST,
  UPVOTE_POST,
  DOWNVOTE_POST,
  addPost,
  updatePost,
  removePost,
  upvotePost,
  downvotePost,
} from './posts';

describe('posts actions', () => {
  it('should create an action to receive a collection of posts', () => {

    const posts = [
      { body: 'post 1' },
      { body: 'post 2' },
    ]

    const expectedAction = {
      type: RECEIVE_POSTS,
      posts
    }
    expect(receivePosts(posts)).toEqual(expectedAction)
  })

  it('shold create an action to update a existing post', () => {
    const post = { body: 'post body' }
    const expectedAction = {
      type: UPDATE_POST,
      post,
    }

    expect(updatePost(post)).toEqual(expectedAction)
  })

  it('shold create an action to add a new post', () => {
    const post = { body: 'post' }
    const expectedAction = {
      type: ADD_POST,
      post,
    }

    expect(addPost(post)).toEqual(expectedAction)
  })

  it('should create an action to remove a post from store', () => {
    const id = 123456789;
    const expectedAction = {
      type: REMOVE_POST,
      id,
    }

    expect(removePost(id)).toEqual(expectedAction)
  })

  it('should create an action to upvote a post', () => {
    const id = 1;
    const expectedAction = {
      type: UPVOTE_POST,
      id,
    };

    expect(upvotePost(id)).toEqual(expectedAction);
  })

  it('should create an action to downvote a post', () => {
    const id = 1;
    const expectedAction = {
      type: DOWNVOTE_POST,
      id,
    };

    expect(downvotePost(id)).toEqual(expectedAction);
  })
})
