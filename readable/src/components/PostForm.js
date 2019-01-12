import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Box, Button, TextInput, Select, TextArea } from 'grommet';
import { Redirect } from 'react-router-dom';

import { handleAddPost, handleUpdatePost } from '../actions/posts';

class PostForm extends Component {
  state = {
    author: '',
    title: '',
    body: '',
    category: '',
    redirect: null,
  };

  onAuthorChange = (event) => {
    event.persist();
    this.setState(state => ({ ...state, author: event.target.value }));
  }

  onTitleChange = (event) => {
    event.persist();
    this.setState(state => ({ ...state, title: event.target.value }));
  }

  onBodyChange = (event) => {
    event.persist();
    this.setState(state => ({ ...state, body: event.target.value }));
  }

  onCategoryChange = (event) => {
    this.setState(state => ({ ...state, category: event.value }))
  }

  onSubmit = (event) => {
    event.preventDefault();

    const { dispatch } = this.props;
    const { author, body, title, category } = this.state;

    if (this.props.editing) {
      const { id } = this.props.editing;
      dispatch(handleUpdatePost(id, title, body));
    } else {
      dispatch(handleAddPost(title, body, author, category));
    }
    
    this.props.history.goBack();
  }

  componentDidMount() {
    const { editing } = this.props;

    if (editing) {
      this.setState(state => ({
        ...state,
        title: editing.title,
        body: editing.body,
      }));
    }
  }

  render() {
    const { author, body, title, category, redirect } = this.state;

    if (redirect) return <Redirect to={redirect} />

    return (
      <form onSubmit={this.onSubmit}>
        <Box direction='column' gap='medium'>

          {!this.props.editing && (
            <TextInput placeholder='Apelido do Autor' value={author} onChange={this.onAuthorChange} />
          )}

          {!this.props.editing && (
            <Select
              placeholder='Categoria'
              multiple={false}
              value={category}
              onChange={this.onCategoryChange}
              options={this.props.categories} />
          )}

          <TextInput placeholder='Título do Post' value={title} onChange={this.onTitleChange} />

          <TextArea placeholder='Texto' value={body} onChange={this.onBodyChange} />

          <Box direction='row' justify='end' gap='small'>
            <Button label='Voltar' type='button' onClick={() => this.props.history.goBack()} />
            <Button primary={true} label='Enviar' type='submit' />
          </Box>
        </Box>
      </form>
    )
  }
}

function mapStateToProps({ categories }) {
  return {
    categories: categories.map(c => c.name)
  }
}

export default connect(mapStateToProps)(PostForm);
