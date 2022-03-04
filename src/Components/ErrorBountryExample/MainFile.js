import React from "react";
import Division from "./ChildSum";
import HandleError from "./HandleError";
class MainShow extends React.Component{

    render(){

        return(
            <React.Fragment>
                <HandleError>
                <Division  num1 = "100" num2 = "10"></Division>
                </HandleError>
                
                <HandleError>
                <Division  num1 = "300" num2 = "10"></Division> 
                </HandleError>
                <HandleError> 
                <Division  num1 = "450" num2 = "0"></Division>
                 </HandleError>
            </React.Fragment>
        );
    }
}

export default MainShow;