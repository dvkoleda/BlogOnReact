import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './components/app';
import rootReducer from './ducks/index';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

class Hello extends React.Component {
  render () {
    return <div>Hello</div>
  }
}

class Goodbay extends React.Component {
    render () {
        return <div>Goodbay</div>
    }
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <BrowserRouter>
      <div>
        <Route path="/hello" component={Hello}/>
        <Route path="/goodbay" component={Goodbay}/>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
