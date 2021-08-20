import "./App.css";
import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { Route, Switch, Router } from "react-router-dom";
import Users from "./usersComponent";
import Courses from "./coursesComponent";

class App extends Component {
  state = {};
  render() {
    <Router>
      <Switch>
        <Route path="/" exact component={App}></Route>
      </Switch>
    </Router>;
    return (
      <main className="container">
        <div className="App">
          <Switch>
            <Route path="/Courses/:id" component={Courses}></Route>
            <Route path="/" component={Users}></Route>
          </Switch>
        </div>
      </main>
    );
  }
}

export default App;
