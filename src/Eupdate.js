import React, { Component } from "react";
import Marks from "./Marks.js";

export default class Eupdate extends Component {
  constructor() {
    super();
    this.state = {
      name: "Sarvesh india ",
      roll:1001,
      nroll:1001
      
    };
  }

  handleclick = () => {
    console.log(" Button Clicked ");

    // ye   2 number incriment  ke liye  hai ye 
    this.setState({roll:this.state.roll +2 });

    // 1001 ko 1008  // or  1008 ko 1001 karane ke liye  hai ye 
    // if(this.state.roll == this.state.nroll){
    //  return this.setState({roll:1008 });
    // } else if(this.state.roll !== this.state.nroll ){
    //     return this.setState({roll:1001 });
    // }
  };

  render() {
    console.log(" Eupdate  Component Envierment");
  
    return (
      <div>
        <Marks roll={this.state.roll}  />
        <button onClick={this.handleclick}>Click Me</button>
      </div>
    );
   }
};
