import React, {useState}from "react";

// function BasicInfo(ChildCompo){



//     function NewInfo(){
//         const [stuMainInfo,updateStuMainInfor]=useState({
//             clgName:'GEC Bhavanagar',
//             Department:'EC Department',
//             Semester:'8 Sem'
    
//         })
//         return(
//             <div>
//               <ChildCompo clgName={stuMainInfo.clgName} Department={stuMainInfo.Department} Semester={stuMainInfo.Semester}></ChildCompo>
//             </div>
//         );
    
//     }
//     return NewInfo;
// }

const BasicInfo = (ChildCompo) =>{

    class NewCompo extends React.Component{

        constructor(props){
            super(props);
            this.state= {
                clgName:'GEC Bhavanagar',
                Department:'Computer Department',
                Semester:'8 Sem'
            }
        }
        render(){
            // console.log(this.props);
            return(

                <ChildCompo {...this.props} er={this.props} clgName={this.state.clgName} Department={this.state.Department} Semester={this.state.Semester}></ChildCompo>
   
         );
        }
    }
return NewCompo;

}

export default BasicInfo;