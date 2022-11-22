import React, { Component } from "react";
import appstyle from "./App.module.css";
import userstyle from "./Euser.module.css";
import Euser from "./Euser";
export default class App extends Component {
  state = {
    isLoggedIn: false,
  };

  userClick_login = () => {
    this.setState({ isLoggedIn: false });
  };

  userClick_logout = () => {
    this.setState({ isLoggedIn: true });
  };

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    if (isLoggedIn) {
      return <Euser clickData={this.userClick_login} />;
    } else {
      return (
        <div>
          <h1> Hello Sonu Sharma </h1>

          <h1> Plase Logout Page </h1>
          <button className={appstyle.Bcolor} onClick={this.userClick_logout}>
            Logout
          </button>
        </div>
      );
    }
  }
}

//*************************************************** */

// export default class App extends Component {
//     render() {
//       let style = true;

//       return (
//         <React.Fragment>
//           <h1 className="Txtb"> Hello Sarvesh sharma / Sonu sharma </h1>
//           <Etest checkColor={style ? "Txta" : "Txtb"}  name =" Lucknow"/>
//         </React.Fragment>
//       );
//     }
//   }
