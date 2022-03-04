import React, { useState } from "react";
import BasicInfo from "./BasicInfo_of_Student";
// function Student_1(props){
//        const[stuData,stuDataUpdate]=useState({
//             ErNo:"166170307122"
//         })

//         return(

//     );
// }
// export default Student_1;


class Student_1 extends React.Component {

    constructor() {
        super();
        this.state = {
            er: "190213107015"
        }
    }


    render() {
        return (
            <React.Fragment>
                <h4>Information Of Student 1 and id {this.props.id}<br /></h4>
                <h6>Enrollment No:{this.state.er}<br />Collage Name:{this.props.clgName}<br />Semester Info:{this.props.Semester}<br />Department:{this.props.Department}</h6>
            </React.Fragment>

        );
    }
}

export default BasicInfo(Student_1);