import React ,{Component} from "react";
import Erender from "./Erender";
import Student from "./Student";

export default class Emount extends Component {
    constructor (props){
        super(props);
        console.log(" Your Contructor are called ");
        console.log (this.props);
        this.state ={
            roll : 1088,
        };
};

static getDerivedStateFromProps(props,state){
    console.log("All new props ane state ");
    console.log(props,state);
    return null;


    };
    render()
    
    {
        return(<div>
            <Student name ="vishnu" />
            {/* <h1> Hello Sarvesh Sharma your Contructor are called strating point start </h1> */}
         
        </div>)
    }
}
