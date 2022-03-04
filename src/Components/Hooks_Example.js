import React,{useState} from "react";
import useCustomehook from "./Custome_Hook";

function Hooks_Function(){

    const [name,setName] = useState("Ajay")

   const changeState = ()=>{

        setName("Ajay Zala")
    }



    return(
    <div>
        <h4>Hook example perform by : {name}</h4>
        <button type="button" onClick={changeState}>ClickMe</button>
        <div>{useCustomehook(10,20)}</div>
    </div>
    );
}

export default Hooks_Function;