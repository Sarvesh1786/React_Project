import React, { Component } from "react";

export default class Eform extends Component {
  state = {
    name: "Enter Name",
    password: "Enter Passwd",
  };

  handleChange = (e) => {
    // (e== event)
    console.log(e.target.value);

    // this.setState({ [e.target.name]: e.target.value });

    // yadi aap ko  uppercase lagana ho tab  ke liye

    const value =
      e.target.name === "password"
        ? e.target.value.toUpperCase().substr(0,10)
        : e.target.value;
    this.setState({ [e.target.name]: value });
  };

  handleSubmit = ( e ) =>{
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <form>
          <label>
            <h2>Login page</h2>
            Name:
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            ></input>
          </label>
          <br></br>
          <label>
            password:
            <input
              type="text"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            ></input>
          </label><br/><br/>
          <button type="Submit" value="Submit">Submit</button>
        </form>
      </div>
    );
  }
}
