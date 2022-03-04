import React from "react";
import { MyContext } from "./MainChild";
class Child2 extends React.Component{
    render(){
        return(
            <div>
          
           <MyContext.Consumer>
           {(props) =><h1>{props}</h1>}
           </MyContext.Consumer>
           
           </div>
        );
    }
}

export default Child2;