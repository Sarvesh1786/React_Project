import React, { Component } from "react";
import User from "./User";
import Guest from "./Guest";

export default class Econdition extends Component {
  render() {
    const isRegisered = this.props.custamer ;

    if(isRegisered){
        return <User/>;
   }else{
    return <Guest/>;
   }
  }
};
