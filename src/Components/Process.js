import React, {Component}from "react";
import Addition_Done from "./Addition_Done";
class Process extends Component{

    componentDidMount(){

        console.log("Mount - render");
        
    }
    render(){
        console.log("Process - render");
        return(
        <div>
            <Addition_Done num1 ="100" num2 = "20" ></Addition_Done>
            </div>
            
            )

    }


}
export default Process