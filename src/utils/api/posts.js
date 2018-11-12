import * as uuid from 'uuid/v1';

const _votePost = (post, vote, baseUrl, headers) => fetch(`${baseUrl}/posts/${post}`, {
  body: JSON.stringify({ option: vote }),
  headers: new Headers({
    ...headers,
    'Content-Type': 'application/json',
  }),
}).then(res => res.json());

export default (baseUrl, headers) => ({
  listPosts: () => fetch(`${baseUrl}/posts`, {
    headers: new Headers(headers),
  }).then(res => res.json()),

  createPost: (title, body, author, category) => fetch(`${baseUrl}/posts`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      body,
      author,
      category,
      timestamp: Date.now(),
      id: uuid(),
    }),
    headers: new Headers({
      ...headers,
      'Content-Type': 'application/json',
    }),
  }).then(res => res.json()),

  getPost: id => fetch(`${baseUrl}/posts/${id}`, {
    headers: new Headers(headers),
  }).then(res => res.json()),

  upVote: postId => _votePost(postId, 'upVote', baseUrl, headers),
  downVote: postId => _votePost(postId, 'downVote', baseUrl, headers),

  update: (postId, title, body) => fetch(`${baseUrl}/posts/${postId}`, {
    body: JSON.stringify({ title, body }),
    headers: new Headers({
      ...headers,
      'Content-Type': 'application/json',
    }),
    method: 'PUT',
  }).then(res => res.json()),

  remove: postId => fetch(`${baseUrl}/posts/${postId}`, {
    headers: new Headers(headers),
    method: 'DELETE',
  }).then(res => res.json()),

  getComments: postId => fetch(`${baseUrl}/posts/${postId}/comments`, {
    headers: new Headers(headers),
  }).then(res => res.json()),
});
