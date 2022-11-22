import React, { Component } from "react";

// How to use State in list for React Js



export default class EList extends Component {
  state = {
    users: [
      { id: 101, name: "Ram ", Password: "xrt198p" },
      { id: 102, name: "sita ", Password: "xrt198p" },
      { id: 103, name: "Ram ", Password: "xrt198p" },
    ],
  };

  render() {
    const newline = this.state.users.map((user) => {
      console.log(user);
      return (
        <h1 key={user.id}>
          Id : {user.id} , name : {user.name} , password : {user.Password}
        </h1>
      );
    });
    return <div>{newline}</div>;
  }
}

//***************************************************************** */

// export default class EList extends Component {
//   render() {
//     const arr = [10, 20, 30, 40, 50];

//     return (
//       <div>
//         <ul>
//           {arr.map((num) => {
//             return <li>{num}</li>;
//           })}
//         </ul>
//       </div>
//     );
//   }
// }

//***************************************************************** */
// export default class EList extends Component {
//   render() {
//     const arr = [10, 20, 30, 40, 50];
//     const Newarr = arr.map((num) => {
//       console.log("num :", num);

//       return (
//         <div>
//           <li name="jai">{num *17}</li>
//         </div>
//       );
//     });

//     console.log("OldArr =", arr);
//     console.log("NewArr =", Newarr);
//     return <ul>{Newarr}</ul>;
//   }
// }
