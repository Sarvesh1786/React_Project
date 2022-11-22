import React, { Component } from "react";
import EifElse_singUP from "./EifElse_singUP";
import Eifelse_logout from "./Eifelse_logout";

export default class Eifelse_login extends Component {
  state = {
    isLoggedIn: false,
  };

  clickLogin = () => {
    this.setState({ isLoggedIn: true });
  };

  clickLogout = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    const isLoggedIn = this.state.isLoggedIn;

    if (isLoggedIn) {
      return <EifElse_singUP DRP="Linkdin" clickData={this.clickLogout} />;
    } else {
      return (
        <Eifelse_logout name="Hello Anamika" clickData={this.clickLogin} />
      );
    }
  }
}
