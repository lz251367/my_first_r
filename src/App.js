import React from 'react';
import './App.css';

import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import Layout from './views/Layout'
import Login from './views/Login'
import NotFound from './views/NotFound'

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/layout" component={Layout}></Route>
          <Route path="/login" component={Login}></Route>
          {/* 重定向 */}
          <Redirect exact from="/" to="layout"></Redirect>
          {/* 404 */}
          <Route component={NotFound}></Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
