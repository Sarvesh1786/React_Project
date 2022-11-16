import React from "react";

// function Student () {
// return (
// <React.Fragment>
// <h1>Function Componente Use </h1>
// </React.Fragment>
// )}

// OR

// use for  anonymous function

 const  Student = (props) => {
    return (
        <React.Fragment>
        <h1> Anonymous Function Componente Use , Hello {props.name}</h1>
        </React.Fragment>
        
        )}

export default Student;