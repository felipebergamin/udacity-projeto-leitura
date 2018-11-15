import reducer from './posts'
import { addPost, receivePosts, removePost, updatePost } from '../actions/posts'

const post1 = { id: 1, body: 'something 1' }
const post2 = { id: 2, body: 'something 2' }
const post3 = { id: 3, body: 'something 3' }

describe('posts reducer', () => {
  it('should initialize state with and empty array', () => {
    expect(reducer(undefined, {})).toEqual([])
  })

  it('ADD_POST: should handles addPost', () => {
    const state = [post1]

    expect(reducer(state, addPost(post2))).toEqual([post1, post2])
  })

  it('RECEIVE_POSTS: should handles receivePosts', () => {
    const posts = [post1, post2, post3]

    expect(reducer(undefined, receivePosts(posts))).toEqual(posts)
  })

  it('REMOVE_POST: must remove a post from state', () => {
    expect(reducer([post1, post2, post3], removePost(2))).toEqual([post1, post3])
  })

  it('UPDATE_POST: must update a post on state', () => {
    const state = [post1, post2, post3]
    const updatedPost = { ...post2, body: 'changed body' }

    expect(reducer(state, updatePost(updatedPost))).toEqual([post1, updatedPost, post3])
  })
})
