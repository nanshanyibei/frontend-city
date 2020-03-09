/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import {
  Route,
  NavLink,
  Link,
  BrowserRouter,
  Switch,
  Redirect
} from 'react-router-dom';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducer';
import IndexPage from './indexpage';
import Register from './register';
import Login from './login';
import './App.css';

const store = createStore(reducers, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

class App extends Component{
  constructor(props){
    super(props);
    this.state={

    };
  }
  render(){
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={IndexPage} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}



export default App;
