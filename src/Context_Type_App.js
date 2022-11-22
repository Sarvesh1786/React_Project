import React, { Component } from "react";
import Context_Type_Guest from "./Context_Type_Guest";
import { Provider } from "./Context_Type";

// export const MyContext = React.createContext();

export default class Context_Type_App extends Component {
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
    return <Provider value={contextvalue}>

        <Context_Type_Guest/>
    </Provider>;
  }
}
