import React, { Component } from "react";

export default class Eunmounting extends Component {
  componentDidMount() {
    console.log("Student Mounted");
  }

  componentWillUnmount(){
    console.log("Student Unmounted");
}

  render() {
    console.log("Student Rendered");

    return <div><h1>Hello, Student Component</h1> </div>;
  }
}
