import React, { Component } from "react";
import Euse_logical_operater from "./Euse_logical_operater";

export default class EUse_logical extends Component {
  render() {
    const primemember = this.props.primemember;

    return (
      <div>
        <h1>Welcome to User</h1>
        {primemember && <Euse_logical_operater />}
      </div>
    );
  }
}
