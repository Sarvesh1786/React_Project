import React, { Component } from "react";

export default class EifElse_singUP extends Component {
  render() {
    return (
      <div>
        <h1>Welcome , {this.props.DRP}</h1>
        <button>SignUp</button>
        <button onClick={this.props.clickData}>SignIn</button>
      </div>
    );
  }
}
