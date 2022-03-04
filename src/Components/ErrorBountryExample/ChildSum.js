import React from "react";
import HandleError from "./HandleError";
class Division extends React.Component{
    
    render(){
        if(this.props.num2 ==="0"){
            throw new Error("Error");    
        }    
        return(
            <React.Fragment>
                <h3>Division of {this.props.num1} and {this.props.num2} is={Number(this.props.num1)/Number(this.props.num2)}</h3>
            </React.Fragment>
        );
    }
}

export default Division;