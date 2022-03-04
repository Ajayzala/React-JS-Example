import React,{Component} from "react";

class State_Example extends Component{

    constructor(props){
        super();
        this.state = {
            name:props.name,
            count:1
        }

    }
     updateState = () =>{
            console.log(this)
            this.setState({
               count:100
            }) 
    }
    render(){
        return(
        <div>
            <h3>Practical Perform By {this.state.name}, Total Visitor Count is {this.state.count}</h3>
            <button onClick={this.updateState}>Change The State</button>
        </div>
        )
    }
}
export default State_Example