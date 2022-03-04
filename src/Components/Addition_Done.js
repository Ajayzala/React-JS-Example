import React,{Component} from "react";

class Addition_Done extends Component{

    render()
       
    {
        console.log("Addition_Done - render");
  
        return(<div>
            <h1>Addition Of Two Number: {Number(this.props.num1)+ Number(this.props.num2) }</h1>
        </div>
        
        )

    }
}

export default Addition_Done