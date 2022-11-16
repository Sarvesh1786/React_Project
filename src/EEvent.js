import React, { Component } from "react";

//function Componente 

function EEvent (props){
    function handleclick (e){
        e.preventDefault ();
        // e.preventDefault ();    // ye  off karne se goto website 

        console.log("Button Clicked", this);
    }

return (
    <div>
<h1>Hello , {props.name}</h1>
<a href="https://www.google.com/" onClick={handleclick}>Click Me</a>

    </div>
);

};




















//*************************************************************************************** */

// class EEvent extends Component {
//   //handleclick  ek function hai
//   constructor(props) {
//     super(props);

//     this.state = {
//       name: "Sarvesh Kumar sharma",
//     };

//     // this.handleclick = this.handleclick.bind(this);  => ise function me hi use karte hai 
//   }
//   handleclick = () => {
//     console.log("Button Click", this);
//   };

//   render() {
//     return (
//       <div>
//         <h1>Hello, {this.state.name} Event</h1>
//         <button onClick={this.handleclick}>Click Me</button>
//       </div>
//     );
//   }
// }


//*************************************************************************************** */


export default EEvent;
