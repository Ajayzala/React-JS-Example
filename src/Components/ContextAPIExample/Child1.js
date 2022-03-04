import React from "react";
import Child2  from "./Child2";

class Child1 extends React.Component{
    render(){
        return(
           <Child2></Child2>
        );
    }
}
export default Child1;