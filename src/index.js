import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import reducers from './reducers';
import middleware from './middlewares';
import App from './App';

const store = createStore(reducers, middleware);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
