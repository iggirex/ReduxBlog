import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';

import PostsIndex from './components/posts_index';

// ---- IMPORTING REACT ROUTER -----
// Browswer Router -- interacts with History library and decides what to do on URL change
// Route is the workhorse, a React component that can be rendered inside of any other component---
// it provides the configuration to React Router
import { BrowserRouter, Route } from 'react-router-dom';


// In the past we used App as our webpage, but with React Router we don't need a central single component 
// import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

//PATH property, --> user wants THIS route, then we will show this component
// If user goes to hello path, show hello component, same with goodbye
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    <div>
      <Route path="/" component={PostsIndex} />
    </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
