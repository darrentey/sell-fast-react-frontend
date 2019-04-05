import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Post from './components/Post';
import Homepage from './components/Homepage';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Update from './components/Update';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component={Homepage}></Route>
          <Route path="/homepage" component={Homepage}></Route>
          <Route path="/post" component={Post}></Route>
          <Route path="/signin" component={SignIn}></Route>
          <Route path="/signup" component={SignUp}></Route>
          <Route path="/update" component={Update}></Route>
        </Switch>
        
      </React.Fragment>
    );
  }
}

export default App;
