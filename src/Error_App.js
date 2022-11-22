import React, { Component } from "react";
import Image from "./Images.js";
import Errors from "./Error_boundaries";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";

export default class Error_App extends Component {
  render() {

    return (
      <div>
        <Errors>
          <Image pictuer={img1} />
          <br />
        </Errors>
        <Errors>
          <Image pictuer={img2} />
          <br />
        </Errors>
        <Errors>
          {/* <Image pictuer="NotImage" /> */}
          <br />
        </Errors>
      </div>
    );
  }
}
