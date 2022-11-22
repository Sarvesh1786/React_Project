import React, { Component } from "react";

export default class EController extends Component {

//******************************************************************************** */
// text area

state = {
    value: "Enter Your Massages ",
  };
  handeler = (event) => {
    this.setState({ value: event.target.value.substr(0, 200) });
  };

  render() {
    return (
      <React.Fragment>
        <form>
          <h3>Enter Your Massages</h3>
          <textarea
            type="text"
            value={this.state.value}
            onChange={this.handeler}
          />
        </form>
      </React.Fragment>
    );
  }
}  

//******************************************************************************** */
// Input Area  
    // state = {
    //     value: "Enter Your Name ",
    //   };
    //   handeler = (event) => {
    //     this.setState({ value: event.target.value.toUpperCase().substr(0, 20) });
    //   };
    
    //   render() {
    //     return (
    //       <React.Fragment>
    //         <form>
    //           <h3>Enter Username</h3>
    //           <input
    //             type="text"
    //             value={this.state.value}
    //             onChange={this.handeler}
    //           ></input>
    //         </form>
    //       </React.Fragment>
    //     );
    //   }
    // }
