import React, { Component } from 'react';
import { Box, Grommet } from 'grommet';
import { grommet } from 'grommet/themes';
import './Home.css';
import Sidebar from './Sidebar';
import PostsList from './PostsList';

class HomeComponent extends Component {

  render() {
    const category = this.props.match.params.category;

    const myTheme = {
      ...grommet,
      anchor: {
        color: 'dark-1',
        fontWeight: 400,
        textDecoration: 'none',
      }
    };

    return (
      <Grommet theme={myTheme} full>
        <Box direction='column' flex fill='vertical'>
          <Box direction='row' flex>
            <Sidebar />
            <Box flex>
              <PostsList category={category} />
            </Box>
          </Box>
        </Box>
      </Grommet>
    )
  }
}

export default HomeComponent;
