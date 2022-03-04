import React,{useEffect,useState} from "react";
import axios from "axios";
import MakeList from "./MakingListOfData";
const API_Demo = ()=>{
           const [formData,formUpdateData] =useState({
                inState:"",
                showData:false,
                itemData:[]
            })
            const HandleChange = (e) =>{
                formUpdateData({
                    inState:e.target.value
                })
            }
            const HandleSubmit = (e) =>{
                e.preventDefault();
                    axios.get("https://api.covidtracking.com/v1/states/"+formData.inState+"/20200501.json")
                   .then((resJSON) =>{formUpdateData({showData:true,itemData:resJSON.data,inState:e.target.inState.value})})
                    .catch(err =>{console.log(err)})                               
                }
return<>
             <React.Fragment>
                 <div>
                    <form onSubmit={HandleSubmit}>
                    Enter State Code <input type="text" name="inState" onChange={HandleChange}></input>
                    <input type="submit"></input>
                    </form>
                  {
                     (formData.showData)?<MakeList value={formData.itemData}></MakeList>:<p>Load You data</p>
                  }    
                  </div>
             </React.Fragment>
</>
}
export default API_Demo;