import React, { Component } from "react";

export default class Ecss extends Component {
  state = {
    change: false,
  };
  clickhandle = () => {
    this.setState({ change: true });
  };

  render() {
    const btstyle = {
      color: "white",
      backgroundColor: "blue",
    };

   

    if (this.state.change) {
      btstyle.backgroundColor = "#89CFF0";
    }

    return (
      <div>
        <button onClick={this.clickhandle} style={btstyle} type="button">
          Button
        </button>
      </div>
    );
  }
}

//**************************************************************** */

// export default class Ecss extends Component {
//   render() {
//     const btstyle = {
//       color: "white",
//       backgroundColor: "blue",
//     };

//     // const txtc = {
//     //   fontSize: "70px",
//     // };

//     const txts = {
//       color: "orange",
//     };

//     return (
//       <div>
//         {/* <button style={{ ...btstyle, ...txtc }} type="button">
//           Button
//         </button> */}

//         {/* <h1 style={{ ...txtc, ...txts }}>Hello , Sarvesh </h1> */}
//         <h1 style={{ ...txts, ...{ fontSize : "40px"} }}>Hello , Sarvesh </h1>

//       </div>
//     );
//   }
// }

//**************************************************************** */
// export default class Ecss extends Component {
//   render() {

//     const btstyle ={
//         color : "white",
//         backgroundColor :"blue"
//     }
//     return (
//       <div>
//         <button style={btstyle} type='button' >Button</button>
//       </div>
//     )
//   }
// }
