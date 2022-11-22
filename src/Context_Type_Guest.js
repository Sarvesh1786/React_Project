import React, { Component } from "react";
import { MyContext } from "./Context_App";
// import { Consumer } from "react";

export default class Context_Type_Guest extends Component {
  static ContextType = MyContext;
  render() {
    console.log(this.context_Type);
    const { name, value } = this.context_Type.data;

    return (
      <div>
        <h1>Context_Type_Guest Component</h1>

        <h2>
          {/* Name : {this.context_Type.data.name} <br />
          Age : {this.context_Type.data.age} */}
          Name : {name} <br />
          Age : {age}
        </h2>
        <button onClick={this.context_Type.handlerClick}>ChangeAge</button>
      </div>
    );
  }
}
