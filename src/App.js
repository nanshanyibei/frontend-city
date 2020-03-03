import React, { Component } from 'react';
import {
  Route,
  NavLink,
  Link,
  BrowserRouter,
  Switch,
  Redirect
} from "react-router-dom";
import IndexPage from './indexpage'
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state={

    }
  }
  render(){
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={IndexPage} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}



export default App;
