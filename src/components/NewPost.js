import React from 'react';
import { Box, Heading } from 'grommet';

import PostForm from './PostForm';

function NewPost(props) {
  return (
    <Box direction='column' justify='center' align='center' fill>
      <Box direction='row'>
        <Heading level='3'>Compartilhe algo incrível! ;)</Heading>
      </Box>

      <Box direction='row'>
        <PostForm history={props.history} />
      </Box>
    </Box>
  )
}

/* class NewPost extends Component {

  render() {
    console.log('Props', this.props);
    return (
      <Box direction='column' justify='center' align='center' fill>
        <Box direction='row'>
          <Heading level='3'>Compartilhe algo incrível! ;)</Heading>
        </Box>

        <Box direction='row'>
          <PostForm history={this.props.history} />
        </Box>
      </Box>
    )
  }
} */

export default NewPost;
