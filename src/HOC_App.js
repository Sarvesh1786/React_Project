import React, { Component } from 'react'
import HOC_User from './HOC_User'
import HOC_User1 from './HOC_User1'
export default class HOC_App extends Component {
  render() {
    return (
      <div>Army Fir Count tiger
        <HOC_User camp ={210}/>
        <HOC_User1 camp ={220}/>
      </div>
    )
  }
}
