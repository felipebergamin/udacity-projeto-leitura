import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Home from './Home';
import NewPost from './NewPost';
import PostView from './PostView';
import { handleInitialData } from '../actions/shared';
import EditPost from './EditPost';

class App extends Component {

  render() {
    return (
      <Router>
        <Fragment>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/post/new' exact component={NewPost} />
            <Route path='/post/edit/:postid' exact component={EditPost} />
            <Route path='/:category' exact component={Home} />
            <Route path='/:category/:postid' exact component={PostView} />
          </Switch>
        </Fragment>
      </Router>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return dispatch(handleInitialData());
}

export default connect(null, mapDispatchToProps)(App);
