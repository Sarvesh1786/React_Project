import React, { Component } from "react";
import { MyContext } from "./Context_App";

export default class Context_Guest extends Component {
  render() {
    return (
      <div>
        <h1>Context_Guest Component</h1>
        <MyContext.Consumer>
          {({data,handlerClick}) => (
            <div>
              <h2>
                Name : {data.name} <br />
                Age : {data.age}
              </h2>
              <button onClick={handlerClick}>ChangeAge</button>
            </div>
          )}
        </MyContext.Consumer>
      </div>
    );
  }
}
