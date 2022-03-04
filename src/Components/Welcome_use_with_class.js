import React,{Component} from "react";
import NumberList from "./List_And_Key";
class Welcome_with_class extends Component{

    render(){
        const numbers = [1, 2, 3, 4, 5];
        return <NumberList naumber= {numbers}></NumberList>
        // return <h3>Class Component is {this.props.name}</h3>

    }
}

export default Welcome_with_class;