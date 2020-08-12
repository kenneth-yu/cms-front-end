import React, { Component } from 'react';
import './App.css';
import UserModels from './containers/UserModels'
import { Route, Switch } from "react-router-dom";

class App extends Component{

  render(){
    return (
      <div className="App">
        <h1>Hello World</h1>
        <Switch>
          <Route path="/user-models/:id"component={UserModels}/>
          <Route path="/" component={UserModels}/>
        </Switch>
      </div>
    );
  }
}
export default App;
