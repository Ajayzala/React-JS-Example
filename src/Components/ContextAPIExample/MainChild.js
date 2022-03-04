import React from "react";
import Child1 from "./Child1";
export const MyContext = React.createContext();
class MainChild extends React.Component{
    state = {
        testData :"Context API Example"
    }

    render(){

        return(
            <React.Fragment>
                <MyContext.Provider value={this.state.testData}>
                <Child1></Child1>
                </MyContext.Provider>
            </React.Fragment>
        );
    }
}

export default MainChild