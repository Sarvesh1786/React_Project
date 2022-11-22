import React, { Component } from "react";
import userstyle from "./Euser.module.css";
export default class Euser extends Component {
  render() {
    return (
      <div>
        <h1> Welcome To Login Page </h1>

        <button className={userstyle.Acolor} onClick={this.props.clickData}>
          Login
        </button>
      </div>
    );
  }
}
