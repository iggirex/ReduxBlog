import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

// ---- IMPORTING REACT ROUTER -----
// Browswer Router -- interacts with History library and decides what to do on URL change
// Route is the workhorse, a React component that can be rendered inside of any other component---
// it provides the configuration to React Router
import { BrowserRouter, Route } from 'react-router-dom';


import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

class Hello extends React.Component {
  render() {
    return <div>Hello!</div>
  }
}

class Goodbye extends React.Component {
  render() {
    return <div>Goodbye!</div>
  }
}

//PATH property, --> user wants THIS route, then we will show this component
// If user goes to hello path, show hello component, same with goodbye
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    <div>
      <Route path="/hello" component={Hello}/>  
      <Route path="/goodbye" component={Goodbye}/>
    </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
