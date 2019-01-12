import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Box, Heading } from 'grommet';
// import { withRouter } from 'react-router-dom';

import PostForm from './PostForm';

class EditPost extends Component {
  render() {
    return (
      <Box direction='column' justify='center' align='center' fill>
        <Box direction='row'>
          <Heading level='3'>Editando o post</Heading>
        </Box>

        <Box direction='row'>
          {this.props.post && <PostForm history={this.props.history} editing={this.props.post} />}
        </Box>
      </Box>
    )
  }
}

function mapStateToProps({ posts }, { match }) {
  return {
    post: posts.find(post => post.id === match.params.postid),
  }
}

export default connect(mapStateToProps)(EditPost);
