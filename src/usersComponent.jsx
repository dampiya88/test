import "./App.css";
import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { Route, Switch, Router } from "react-router-dom";
import { Link } from "react-router-dom";
import ModalExample from "./modalComponent";
import App from "./App";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [], isLoaded: false, success: false };
  }

  componentDidMount() {
    fetch("https://pre.bistrainer.com/v1/index.cfm?action=testapi.users")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          success: true,
          isLoaded: true,
          items: json,
        });
      });
  }

  render() {
    <Router>
      <Switch>
        <Route path="/" exact component={App}></Route>
      </Switch>
    </Router>;
    var { isLoaded } = this.state;
    if (!isLoaded) {
      return <div>Loading..</div>;
    } else {
      return (
        <main>
          <div>
            <h1>Users</h1>
          </div>
          <div>
            {" "}
            <table className="table">
              <thead>
                <tr>
                  <th>id</th>
                  <th>role</th>
                  <th>city</th>
                  <th>address</th>
                  <th>phone</th>
                  <th>username</th>
                  <th>email</th>
                  <th>name</th>
                </tr>
              </thead>
              <tbody>
                {this.state.items.users.map((item) => (
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.role}</td>
                    <td>{item.city}</td>
                    <td>{item.address}</td>
                    <td>{item.phone}</td>
                    <td>{item.username}</td>
                    <td>{item.email}</td>
                    <td>{item.name}</td>
                    <td>
                      <ModalExample user={item} />
                    </td>
                    <td>
                      <button class="btn btn-primary">
                        <Link to={`/Courses/${item.id}`}>Courses</Link>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      );
    }
  }
}

export default Users;
