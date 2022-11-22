import React, { Component } from 'react'

export default class Etest extends Component {
  render() {
    return (
      <div>

        <h1 className={this.props.checkColor}>Welcome  Back To ,{this.props.name}</h1>
      </div>
    )
  }
}
