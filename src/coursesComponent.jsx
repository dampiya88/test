import React, { Component } from "react";

class Courses extends Component {
  constructor(props) {
    super(props);
    this.state = { courses: [], isLoaded: false, success: false };
  }

  componentDidMount() {
    fetch(
      "https://pre.bistrainer.com/v1/index.cfm?action=testapi.courses&id=" + 1
    )
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          success: true,
          isLoaded: true,
          courses: json,
        });
      });
  }

  render() {
    var { isLoaded } = this.state;
    if (!isLoaded) {
      return <div>Loading..</div>;
    } else {
      return (
        <div>
          <h1>Classes</h1>
          <div className="Courses">
            <table className="table">
              <thead>
                <tr>
                  <th>Class Id</th>
                  <th>Class Code</th>
                  <th>Certificate</th>
                  <th>Classname</th>
                  <th>Passmark</th>
                  <th>Marks</th>
                </tr>
              </thead>
              <tbody>
                {this.state.courses.classes.map((course) => (
                  <tr>
                    <td>{course.classid}</td>
                    <td>{course.classcode}</td>
                    <td>{course.certificate}</td>
                    <td>{course.classname}</td>
                    <td>{course.passmarks}</td>
                    <td>{course.marks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    }
  }
}

export default Courses;
