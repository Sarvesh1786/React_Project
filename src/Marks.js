import React, { Component } from "react";

export default class Marks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mroll: this.props.roll,
    };
  }
//Updateting method *******************************************************
  static getDerivedStateFromProps(props, state) {
    console.log("Update Value  Drive Update State , props ");
    console.log(props, state);
    if (props.roll !== state.mroll) {
      return { mroll: props.roll };
    } else if (props.roll == state.mroll) {
      return { nroll: props.roll };
    }
    return null;
  }

//Updateting method *******************************************************


  shouldComponentUpdate(nextprops, nextstate) {
    if (this.state.mroll < 1011) {
      console.log("Marks - ShouldComponentUpdate");
      console.log(nextprops, nextstate);
      return true;
    }
    console.log(nextprops, nextstate);
    return false;
  };

//Updateting method *******************************************************


  getSnapshotBeforeUpdate(prevprops,prevstate){
    console.log("Marks - SnapshotBeforeUpdate It's Return Befor Update ");
    console.log(prevprops,prevstate);
    return 45;
  };

//Updateting method *******************************************************

  componentDidUpdate(prevprops,prevstate,snapshort){
    console.log("Mark - componentDidUpdate it's return after Update ");
    console.log(prevprops,prevstate,snapshort);
  }
//Updateting method *******************************************************

  render() {
    return (
      <div>
        <h1>{this.state.mroll}</h1>
      </div>
    );
  }
}
