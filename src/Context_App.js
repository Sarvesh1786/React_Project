import React, { Component } from "react";
import Context_Guest from "./Context_Guest";

export const MyContext = React.createContext();

export default class Context_App extends Component {
  state = {
    name: "Ravi",
    age: 26,
  };


  handlerClickContext =() =>{
    this.setState({age : this.state.age +1})
  }

  render() {
    const contextvalue  = {
        data : this.state,
        handlerClick : this.handlerClickContext

    };
    // return <MyContext.Provider value={this.state}>
    return <MyContext.Provider value={contextvalue}>

        <Context_Guest/>
    </MyContext.Provider>;
  }
}
