import React, { Component } from "react";
import ArmyMan from "./HOC";

class HOC_User extends Component {
  //this Code shift for HOC.js file
  //   state = {
  //     Gun_Tiger: 0,
  //   };

  //   handlercount = () => {
  //     this.setState({ Gun_Tiger: this.state.Gun_Tiger + 1 });
  //   };

  render() {
    return (
      <div>
        <h2> Camp : {this.props.camp}</h2>
        <h3 onMouseOver={this.props.HocHandlercount}>
          Rahum  Use GunShoet {this.props.hocGunname} : {this.props.Hocstate}
        </h3>
      </div>
    );
  }
}
export default ArmyMan(HOC_User,10);
