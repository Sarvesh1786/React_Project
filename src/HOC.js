import { Component } from "react";

const ArmyMan = (Man,short) => {
  class HOC extends Component {
    state = {
      Gun_Tiger: 0,

    };

    handlercount = () => {
    //   this.setState({ Gun_Tiger: this.state.Gun_Tiger + 1 });
    // useing Short name  = 1
    this.setState({ Gun_Tiger: this.state.Gun_Tiger + short });

    };

    render() {
      return (
        <Man
          hocGunname="AK47"
          Hocstate={this.state.Gun_Tiger}
          HocHandlercount={this.handlercount}
          {...this.props}
        />
      );
    }
  }
  return HOC;
};
export default ArmyMan;
