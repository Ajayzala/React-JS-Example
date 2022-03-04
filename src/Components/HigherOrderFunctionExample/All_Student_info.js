import React from "react";
import Student_1 from "./Student_1";
import Student_2 from "./Student_2";
import Student_3 from "./Student_3";
function Info_Of_Student(){

    return(
        <React.Fragment>
            <Student_1 id="1"></Student_1>
            <Student_2></Student_2>
            <Student_3></Student_3>
        </React.Fragment>
    );
}

export default Info_Of_Student;