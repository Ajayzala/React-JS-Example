import React,{useState} from "react";

function If_Block_Example(porces){
    const [count,setCount] = useState(Number(porces.num));
    if(count != Number(porces.num)){
        setCount(Number(porces.num))
    }
    if(count==5){
        return(<h1>{count} Is Equal to 5</h1>);

    }else{
        return (<h1>{count} Is Not equal to 5</h1>)

    }
   }

export default If_Block_Example;