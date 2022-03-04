import React from "react";

class HandleError extends React.Component{
    state = {
        isError: false
    }
    static getDerivedStateFromError(e){
        console.log("Call The Methods"+ e)
        return {isError : true}
    }
    render(){
        if(this.state.isError){
            return<h1>You can not perform the division by 0</h1>
        }
        return(this.props.children);
    }
}

export default HandleError;