import React, { Component } from 'react';
import { TiThumbsUp, TiThumbsDown, TiTrash, TiEdit } from 'react-icons/ti';
import { Box, Paragraph } from 'grommet';
import { connect } from 'react-redux';

import { handleUpVoteComment, handleDownVoteComment, handleRemoveComment } from '../actions/comments';
import CommentForm from './CommentForm';
import { toggleEditComment } from '../actions/editingComment';

class CommentView extends Component {
  state = {
    editing: false,
  }

  handleUpVote = (commentId) => {
    this.props.dispatch(handleUpVoteComment(commentId));
  }

  handleDownVote = (commentId) => {
    this.props.dispatch(handleDownVoteComment(commentId));
  }

  handleRemoveComment = (commentId) => {
    this.props.dispatch(handleRemoveComment(commentId));
  }

  handleEditButtonClick = () => {
    // this.setState(state => ({ ...state, editing: true }));
    this.props.dispatch(toggleEditComment(this.props.comment));
  }

  render() {
    const { comment } = this.props;

    if (this.props.editingComment) {
      return <CommentForm edit={comment} />
    }

    return (
      <Box pad={{ top: 'medium' }} direction='column'>
        <Box direction='row'>
          <small>por</small>
          &nbsp;
          <strong>{comment.author}</strong>
          &nbsp;
          {comment.voteScore >= 0
            ? <TiThumbsUp />
            : <TiThumbsDown />}
          {comment.voteScore}
        </Box>

        <Paragraph size='small'>
          {comment.body}
        </Paragraph>

        <Box direction='row' gap='medium'>
          <TiThumbsUp onClick={() => this.handleUpVote(comment.id)} />
          <TiThumbsDown onClick={() => this.handleDownVote(comment.id)} />
          <TiTrash onClick={() => this.handleRemoveComment(comment.id)} />
          <TiEdit onClick={() => this.handleEditButtonClick()} />
        </Box>
      </Box>
    )
  }
}

function mapStateToProps({ editingComment }, { comment }) {
  if (editingComment && editingComment.id === comment.id) {
    return {
      editingComment
    }
  }

  return {
    editingComment: null,
  }
}

export default connect(mapStateToProps)(CommentView);
