import React, { Component } from 'react';
import { Box, Heading, Text, RoutedAnchor } from 'grommet';
import { TiChartLine, TiThumbsUp, TiThumbsDown, TiMessage } from 'react-icons/ti';
import { connect } from 'react-redux';
import { handleUpvotePost, handleDownvotePost } from '../actions/posts';

import { formatDateTime } from '../utils';

class PostListItem extends Component {

  handleUpvote = postid => {
    this.props.dispatch(handleUpvotePost(postid));
  }

  handleDownvote = postid => {
    this.props.dispatch(handleDownvotePost(postid));
  }

  render() {
    const { post, comments } = this.props;

    return (
      <Box animation={{ type: 'fadeIn', duration: 250 }}>
        <Heading level={4} margin={{bottom: 'none'}}>{post.title}</Heading>
        <Text size='xsmall'>por {post.author} em <strong>{post.category}</strong> no dia {formatDateTime(post.timestamp)}</Text>

        <Box direction='row' gap='medium' pad={{top: 'small'}}>

          <span>
            <TiMessage />
            {comments.length}
          </span>

          <span>
            <TiChartLine />
            {post.voteScore}
          </span>

          <TiThumbsUp onClick={() => this.handleUpvote(post.id)} />

          <TiThumbsDown onClick={() => this.handleDownvote(post.id)} />

          <RoutedAnchor path={`/${post.category}/${post.id}`}>
            Ler
          </RoutedAnchor>
        </Box>
      </Box>
    );
  }
}

function mapStateToProps({comments}, {post}) {
  return {
    comments: comments.filter(c => c.parentId === post.id)
  }
}

export default connect(mapStateToProps)(PostListItem);
