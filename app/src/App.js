import React from 'react';
import './App.css';
import Login from './components/Login';
import CardList from './components/CardList';
import {Switch, Route} from 'react-router-dom';

import Issue from './components/Issue';
import UpdateForm from './components/UpdateForm';

function App() {
  return (
    <div className="App">
      {/* <Login/>
      <CardList/> */}

      <Switch>
        <Route exact path = '/dash' component = {CardList}/>
        {/* <Route exact path = '/issues/:id' component = {Issue}/> */}
        <Route exact path = '/add' component = {UpdateForm}/>
        <Route path = '/' component = {Login}/>
      </Switch>
    </div>
  );
}

export default App;
