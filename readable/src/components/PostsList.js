import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Box, Button, Select } from 'grommet';
import { TiPen } from 'react-icons/ti';
import { Link } from 'react-router-dom';

import PostListItem from './PostListItem';

class PostsList extends Component {
  state = {
    orderBy: '',
    orderOptions: [
      'Melhores Avaliados',
      'Piores avaliados',
      'Mais recentes',
      'Mais antigos',
    ]
  };

  handleOrderChange = event => {
    this.setState(() => ({
      orderBy: event.value,
      selected: event.selected,
    }))
  }

  orderPosts(posts, order) {
    switch (order) {
      case 'Piores avaliados':
        return posts.sort((p1, p2) => p1.voteScore - p2.voteScore);
      case 'Mais recentes':
        return posts.sort((p1, p2) => p2.timestamp - p1.timestamp);
      case 'Mais antigos':
        return posts.sort((p1, p2) => p1.timestamp - p2.timestamp);
      case 'Melhores Avaliados':
      default:
        return posts.sort((p1, p2) => p2.voteScore - p1.voteScore);
    }
  }

  render() {
    const postList = this.props.category
      ? this.props.posts.filter(post => post.category === this.props.category)
      : this.props.posts;

    const { orderBy, orderOptions } = this.state;

    return (
      <Box direction='column' pad='medium'>
        <Box direction='row'>
          <Select
            placeholder='Ver primeiro'
            multiple={false}
            value={orderBy}
            onChange={this.handleOrderChange}
            options={orderOptions} />

          &nbsp;

          <Link to='/post/new'>
            <Button label='Novo Post' icon={<TiPen />} fill />
          </Link>
        </Box>

        {this.orderPosts(postList, orderBy)
          .map(post => (
            <PostListItem key={post.id} post={post} />
          ))}
      </Box>
    )
  }
}

function mapStateToProps({ posts, categories }) {
  return { posts, categories };
}

export default connect(mapStateToProps)(PostsList);
