import React, { Component } from "react";

export default class Images extends Component {
  render() {
    console.log("this.props.pictuer")
    if (this.props.pictuer === "NotImage") {
      throw new Error("Image Not Found ");
    }
    return <img src={this.props.pictuer} alt="MyPic" width="300px" />;
  }
}
