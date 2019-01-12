import React, { Component } from 'react';
import { Box, TextInput, TextArea, Button, Text } from 'grommet';
import { connect } from 'react-redux';

import { handleAddComment, handleUpdateComment } from '../actions/comments';
import { toggleEditComment } from '../actions/editingComment';

class CommentForm extends Component {
  state = {
    author: '',
    body: '',
    editingComment: null,
  }
  
  handleAuthorChange = (event) => {
    event.persist();
    this.setState((state) => ({ ...state, author: event.target.value }));
  }

  handleBodyChange = (event) => {
    event.persist();
    this.setState((state) => ({ ...state, body: event.target.value }));
  }

  resetForm = () => {
    this.state.editingComment
      ? this.props.dispatch(toggleEditComment())
      : this.setState((state) => ({ ...state, author: '', body: '' }));
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const parentId = this.props.post;
    const { author, body } = this.state;

    if (!this.state.editingComment) {
      this.props.dispatch(handleAddComment(body, author, parentId));
      this.setState((state) => ({ ...state, author: '', body: '' }));
    } else {
      const commentId = this.state.editingComment.id;
      this.props.dispatch(handleUpdateComment(commentId, body));
      this.props.dispatch(toggleEditComment());
    }
  }

  componentDidMount() {
    const { edit } = this.props;

    if (edit) {
      this.setState(state => ({ ...state, author: edit.author, body: edit.body, editingComment: edit }));
    }
  }

  render() {
    const { author, body } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <Box pad='small' gap='small' direction='column'>
          <Text weight='bold'>
            {this.state.editingComment ?
              "Altere o comentário" :
              "Escreva seu comentário"}
          </Text>

          <TextInput placeholder='Autor'
            value={author} onChange={this.handleAuthorChange} />

          <TextArea placeholder='Comentário'
            value={body} onChange={this.handleBodyChange} />

          <Box direction='row' gap='small' justify='end'>
            <Button type='reset' label={this.state.editingComment ? 'Cancelar' : 'Limpar'} onClick={this.resetForm} />
            <Button type='submit' primary={true} label={this.state.editingComment ? 'Salvar' : 'Enviar'} />
          </Box>
        </Box>
      </form>
    )
  }
}

export default connect()(CommentForm);
