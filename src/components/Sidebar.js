import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Box, Heading, RoutedAnchor } from 'grommet';

class Sidebar extends Component {
  render() {
    return (
      <Box width='small' elevation='xlarge'>
        <Box fill='vertical'>
          <Box flex direction='column' tag='nav' responsive={true} className='sidebar-menu' pad='small' gap='small'>
            <Heading level={3}>Leitura</Heading>

            <RoutedAnchor path='/'>todos</RoutedAnchor>
            {this.props.loading
              ? <Heading level={5}>Loading...</Heading>
              : this.props.categories.map(({name, path}) => (
                  <RoutedAnchor path={`/${path}`} key={name}>{name}</RoutedAnchor>
              ))
            }
          </Box>
        </Box>
      </Box>
    )
  }
}

function mapStateToProps({ categories }) {
  return {
    loading: !categories,
    categories: categories,
  };
}

export default connect(mapStateToProps)(Sidebar);
