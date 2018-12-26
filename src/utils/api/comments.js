import * as uuid from 'uuid/v1';

const _voteComment = (option, commentId, baseurl, headers) => fetch(`${baseurl}/comments/${commentId}`, {
  body: JSON.stringify({ option }),
  headers: new Headers({
    ...headers,
    'Content-Type': 'application/json',
  }),
  method: 'POST',
}).then(res => res.json());

/* default export */
export default (baseUrl, headers) => ({
  addComment: (body, author, parentId) => fetch(`${baseUrl}/comments`, {
    body: JSON.stringify({
      author,
      body,
      parentId,
      timestamp: Date.now(),
      id: uuid(),
    }),
    headers: new Headers({
      ...headers,
      'Content-Type': 'application/json',
    }),
    method: 'POST',
  }).then(res => res.json()),

  getComment: commentId => fetch(`${baseUrl}/comments/${commentId}`, {
    headers: new Headers(headers),
  }).then(res => res.json()),

  upvoteComment: commentId => _voteComment('upVote', commentId, baseUrl, headers),

  downvoteComment: commentId => _voteComment('downVote', commentId, baseUrl, headers),

  updateComment: (id, body, timestamp = Date.now()) => fetch(`${baseUrl}/comments/${id}`, {
    body: JSON.stringify({ timestamp, body }),
    headers: new Headers({
      ...headers,
      'Content-Type': 'application/json',
    }),
    method: 'PUT',
  }).then(res => res.json()),

  deleteComment: id => fetch(`${baseUrl}/comments/${id}`, {
    headers: new Headers(headers),
    method: 'DELETE',
  }),
});
