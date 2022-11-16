import React, { Component } from 'react'

export default class Eunmounting1 extends Component {
componentDidMount(){
    console.log("App Mounted");
}
componentWillUnmount(){
    console.log("App Unmounted");
}


  render() {
    console.log("App Rendered");
    return (
      <div><h1>Hello, App Component</h1></div>
    )
  }
}
