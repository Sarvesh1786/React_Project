import React, { Component } from 'react';
import Erender from './Erender';


export default class Student extends Component {
    render(){
        console.log(" Erender chiled for Student ")
        return (<div>
            <h1>Hello , {this.props.name}</h1>
     <Erender/>
        </div>)
    }
}