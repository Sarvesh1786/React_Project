import { toHaveDisplayValue } from '@testing-library/jest-dom/dist/matchers';
import { element } from 'prop-types';
import React, { Component } from 'react'

export default class CallBack_Ref extends Component {
constructor(){
    super()
this.backRef = null ;
this.setBackRef = element => {
    this.backRef = element;
}
}
componentDidMount= () =>{
if(this.backRef){
    this.backRef.focus()
}
}
  render() {
    return (
        <React.Fragment>
       <div>
        
        <form >
          <label>
            Firstname : <input type={"text"}  ref={this.setBackRef} />
          </label>
          <br />
          <br />
          <label>
            Lastname : <input type={"text"}  />
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
      </React.Fragment>
    )
  }
}
