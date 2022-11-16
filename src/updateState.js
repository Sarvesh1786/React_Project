import React, { Component } from "react";

//passing Argument to event Handlers

class Happy extends Component {
  state = {
    name: "Rameshwaramh ",
    roll: 123,
    id: 188888,
  };
  oneclick = (id,p,e) => {
    //
    console.log(id);
    console.log(e);
    console.log(p);

  };

  handleclick = (e) => {
    this.oneclick(this.state.id ,e,123);
  };

  render() {
    return (
      <div>
        <h1>Hello ,{this.state.name}</h1>
        <h2>Your Roll Number is : {this.state.roll}</h2>
        <button onClick={this.handleclick}> Click Me </button>
      </div>
    );
  }
}

//************************************************************************************************ */

// /updating state
// single data fatch

// class Happy extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         name: "Rameshwaramh ",
//         roll: 123,
//       };
//     }

//     oneclick = () => {
//     //   this.setState(function(state,props){
//         this.setState((state,props) => {

//     console.log(this.state);
//       });
//     };
//     render() {
//       return (
//         <div>
//           <h1>Hello ,{this.state.name}</h1>,
//           <h2>Your Roll Number is : {this.state.roll}</h2>,
//           <button onClick={this.oneclick}>Click Me </button>
//         </div>
//       );
//     }
//   };

// Update state method ...**

// Useing   setState method

// class Happy extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "Rameshwaramh ",
//       roll: 123,
//     };
//   }

//   oneclick = () => {
//     this.setState({
//       name: "Om Namaha Shivay!",
//       roll: 10008,
//     })
//   };
//   render() {
//     return (
//       <div>
//         <h1>Hello ,{this.state.name}</h1>,
//         <h2>Your Roll Number is : {this.state.roll}</h2>,
//         <button onClick={this.oneclick}>Click Me </button>
//       </div>
//     );
//   }
// };

export default Happy;
