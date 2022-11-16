import React, { Component } from "react";

// With Constrarctor
//****************************************************************** */

class Estate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Rahul Kumar",
      // roll: 107,
      roll: this.props.roll,
      class: "MCA",
    };
  }
  render() {
    return (
      <h1>
        Hello , Mr. {this.state.name} , Your Rollno is : {this.state.roll}, Your
        class is : {this.state.class}
      </h1>
    );
  }
}

// WithOut Constrarctor
//****************************************************************** */

// class Estate extends Component {
//   state = {
//     name: "Rahul Kumar",
//     // roll: 107,
//     roll : this.props.roll,
//     class: "MCA",
//   };
//   render() {
//     return (
//       <h1>
//         Hello , Mr. {this.state.name} , Your Rollno is : {this.state.roll}, Your
//         class is : {this.state.class}
//       </h1>
//     );
//   }
// }
//********************************************************************** */
export default Estate;
