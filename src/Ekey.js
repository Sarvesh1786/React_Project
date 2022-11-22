import React, { Component } from "react";
import Ekey_user from "./Ekey_user";

export default class Ekey extends Component {
  state = {
    users: [
      { id: 101, name: "rahul  " },
      { id: 102, name: "tanu" },
      { id: 103, name: "kamalu" },
    ],
  };

  render() {
    const arr = this.props.number ;
    const newarr = arr.map(num =>{
        return <Ekey_user key ={num} value ={num}/>
    })
    return <div>
        <ul>{newarr}</ul>
    </div>;
  }
}
