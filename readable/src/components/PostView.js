import React, { Component } from 'react';
import { Box, Heading, Paragraph } from 'grommet';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { TiArrowBackOutline, TiThumbsUp, TiThumbsDown, TiEdit, TiTrash } from 'react-icons/ti';

import './PostView.css';
import CommentForm from './CommentForm';
import CommentView from './CommentView';
import { formatDateTime } from '../utils';
import { handleUpvotePost, handleDownvotePost, handleDeletePost } from '../actions/posts';

class PostView extends Component {

  handleUpvote = (postId) => {
    this.props.dispatch(handleUpvotePost(postId));
  }

  handleDownvote = (postId) => {
    this.props.dispatch(handleDownvotePost(postId));
  }

  deletePost = (postId) => {
    this.props.dispatch(handleDeletePost(postId))
    this.props.history.goBack();
  }

  render() {
    const { post, history, comments } = this.props;

    return (
      <Box flex direction='column' align='center'>
          {post && (

            <div className='postContainer'>

              <Box direction='row'>
                <Heading level='3' margin={{bottom: 'xsmall'}}>
                  <TiArrowBackOutline onClick={() => history.goBack()} />
                  &nbsp;
                  {post.title}
                </Heading>
              </Box>

              <Box direction='row'>
                <small>
                  escrito por {post.author} em {formatDateTime(post.timestamp)} - avaliação: {post.voteScore}
                </small>
              </Box>

              <Box direction='row' gap='medium' pad={{top: 'small'}}>
                <Link to={`/post/edit/${post.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <TiEdit />
                </Link>
                <TiTrash style={{ cursor: 'pointer' }} onClick={() => this.deletePost(post.id)} />
              </Box>

              <Paragraph margin={{top: 'large', bottom: 'large'}}>
                {post.body}
              </Paragraph>

              <Box direction='row' gap='medium'>
                <small>Deixe sua avaliação: </small>
                <TiThumbsUp onClick={() => this.handleUpvote(post.id)} />
                <TiThumbsDown onClick={() => this.handleDownvote(post.id)} />
              </Box>

              <Box direction='column' pad={{top: 'small'}}>

                <Heading level='3'>{comments.length} comentários</Heading>

                {comments.length === 0 && (
                  <span>Seja o primeiro a comentar!</span>
                )}

                {comments && comments.length > 0 &&
                  comments
                  .filter(comment => !comment.deleted)
                  .sort((c1, c2) => c2.voteScore - c1.voteScore)
                  .map(comment => (
                    <CommentView comment={comment} key={comment.id} />
                  ))}

                <Box pad={{top: 'medium'}}>
                  <CommentForm post={post.id} />
                </Box>

              </Box>
            </div>


          )}
      </Box>
    )
  }
}

function mapStateToProps({posts, comments}, { match }) {
  const postid = match.params.postid;

  return {
    post: posts.find(post => post.id === postid),
    comments: comments.filter(comment => comment.parentId === postid),
  }
}

export default connect(mapStateToProps)(PostView);
