import React, { Component } from "react";

export default class ERef_Uncantroll_component extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
    };

    // Create Ref  Uncantroller Componete

    this.textInput = React.createRef();
  }

  componentDidMount = () => {
    this.textInput.current.focus();
  };

  handlerSubmit = (e) => {
    e.preventDefault();
    this.setState({ value: this.textInput.current.value });
  };

  render() {
    return (
      <div>
        <h2>Welcome , Mr . {this.state.value}  {this.state.value}</h2>

        <form onSubmit={this.handlerSubmit}>
          <label>
            Firstname : <input type={"text"} ref={this.textInput} />
          </label>
          <br />
          <br />
          <label>
            Lastname : <input type={"text"} ref={this.textInput} />
          </label>
          <br />
          <br />
          <label>
            Email id : <input type={"text"} />
          </label>
          <br />
          <br />
          <label>
            Contect : <input type={"text"} />
          </label>
          <br />
          <br />
          <label>
            Addreses : <input type={"text"} />
          </label>
          <br />
          <br />
          <button type="Submit" value="Submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
