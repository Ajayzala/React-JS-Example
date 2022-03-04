import React,{useState} from "react";
import BasicInfo from "./BasicInfo_of_Student";
// function Student_3(){
//     const[stuData,stuDataUpdate]=useState({
//          ErNo:"166170307333"
//      })

//  return(
//      <React.Fragment>
//          <h4>Information Of Student 3<br/></h4>
//          <h6>Enrollment No:{stuData.ErNo}<br/>Collage Name:GEC Bhavnager<br/>Semester Info: Sem 8<br />Department:Computer Department</h6>
        
//      </React.Fragment>

//  );
// }
class Student_3 extends React.Component{

    render(){
        return(
            <React.Fragment>
            <h4>Information Of Student 3<br/></h4>
            <h6>Enrollment No:565656565665<br/>Collage Name:{this.props.clgName}<br/>Semester Info:{this.props.Semester}<br />Department:{this.props.Department}</h6>
        </React.Fragment>

        );
    }
}

export default BasicInfo(Student_3);
