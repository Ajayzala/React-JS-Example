import React from "react";

// class MakeList extends React.Component{
//     constructor(props){
//             super(props);
//             // this.state ={
//             //     len:Object.keys(this.props.itemDataOfArray).length 
//             // }
//     }
//     render(){
//         return(
//             <div>
//             <li>data</li>
//             </div>
//         );
//     }
// }

const MakeList = (props) => {
    let list = Object.keys(props.value).map((val)=><li key={val}>{val} : {props.value[val]}</li>);
    return <>
    <ol>{list}
    </ol>
    </>
}

export default MakeList;

