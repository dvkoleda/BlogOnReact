import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import rootReducer from './ducks/index';
import PostIndex from './components/post-index';
import PostNew from './components/post-new';
import PostShow from './components/post-show';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <BrowserRouter>
      <div>
          <Switch>
              <Route path="/post/new" component={PostNew} />
              <Route path="/post/:id" component={PostShow} />
              <Route path="/" component={PostIndex} />
          </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
