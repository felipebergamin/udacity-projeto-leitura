import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Home from './Home';
import NewPost from './NewPost';
import PostView from './PostView';
import { handleInitialData } from '../actions/shared';
import EditPost from './EditPost';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <Router>
        <Fragment>
          <Route path='/' exact component={Home} />
          <Route path='/posts/:category' exact component={Home} />
          <Route path='/newpost' exact component={NewPost} />
          <Route path='/post/edit/:postid' exact component={EditPost} />
          <Route path='/post/:postid' exact component={PostView} />
        </Fragment>
      </Router>
    )
  }
}

export default connect()(App);
