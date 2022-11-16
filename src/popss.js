// import React from "react";


// const Student = (props) => {
//   return (
//     <div>
//       <h1> Hello, {props.name}</h1>
//       <h2> Your Rollno : {props.roll}</h2>
//       <h2> Your total marks  : {props.total}</h2>

//     </div>
//   );
// };

// Class Base Component

import React, {Component} from "react";
import Pt from "prop-types";

class Student extends React.Component {
  render() {
    return (
      <div>
        <h1> Hello, {this.props.name}</h1>
        <h2> Your Rollno : {this.props.roll}</h2>
        <h2> Your total marks : {this.props.total}</h2>
        <h3> which methods uses: {this.props.children}</h3>

      </div>
    );
  }
}
// PropsTypes ka use
//And isRequired ka use 
Student.propTypes ={
    // name: Pt.string
    name: Pt.string.isRequired,
    roll: Pt.number.isRequired
} 

//Default prop value 

Student.defaultProps ={
    name : 'Sarvesh sharma'
};

export default Student;
