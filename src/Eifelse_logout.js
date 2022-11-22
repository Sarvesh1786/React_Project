import React, { Component } from "react";

export default class Eifelse_logout extends Component {
  render() {
    return (
      <div>
        <h1>Welcome , {this.props.name}</h1>
        <button onClick={this.props.clickData}>Logout</button>
      </div>
    );
  }
}
