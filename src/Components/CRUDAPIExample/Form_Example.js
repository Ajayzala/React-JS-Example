import React,{useState,Fragment} from "react";
import TableData from "./TableData";
function FormData(){

  const [formData,setFormData]=useState({
    stuName:"",
    clgName:"",
    erNumber:"",
    semValue:""
  });
 const handleEvent = (event)=>{
        const val = event.target.value;
        console.log(event.target.value);
       setFormData({[event.target.name]: event.target.val});
  }
  const handleSubmit = (event)=>{

    event.preventDefault();
    alert(event.target.stuName.value+" "+ event.target.erNumber.value+""+ event.target.clgName.value+" "+event.target.semValue.value+" "+ event.target.gender.value);
  }
return(
<Fragment>
  <div className="container">

    <form className="mt-5" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-sm-3">


        </div>
        <div className="col-sm-5">
          <h3 className="text-center">Student Form Data</h3>

        </div>
        <div className="col-sm-3">
        </div>

      </div>
      <div className="row">
        <div className="col-sm-3">
        </div>    
        <div className="col-sm-6">
          <div className="row">
            <div className="col-6">
            <label for="exampleFormControlInput1" class="form-label">Student Name</label>
          <input type="text" class="form-control" name="stuName" onChange={handleEvent} value={formData.stuName}></input>
        
            </div>
            <div className="col-6">
            <label for="exampleFormControlInput1" class="form-label">Enrollment Number</label>
          <input type="text" class="form-control" name="erNumber" onChange={handleEvent} value={formData.erNumber} ></input>
        
            </div>
          </div>
        </div>
          <div className="col-sm-3">
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-sm-3">
        </div>
        <div className="col-sm-6">
          <label for="exampleFormControlInput1" class="form-label">Collage Name</label>
          <input type="text" class="form-control" name="clgName"value={formData.clgName}onChange={handleEvent}  ></input>
        </div>
        <div className="col-sm-3">
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-sm-3">
        </div>
        <div className="col-sm-6">
          <label for="exampleFormControlInput1" class="form-label">Semester</label>
          <select class="form-select" value={formData.semValue} onChange={handleEvent} name="semValue" aria-label="Default select example">
            <option value="Sem 1">Sem 1</option>
            <option value="Sem 2">Sem 2</option>
            <option value="Sem 3">Sem 3</option>
          </select>
        </div>
        <div className="col-sm-3">
        </div>

      </div>
      <div className="row mt-3">
        <div className="col-3">

        </div>
        <div className="col-3 text-center">
          <label for="malebtn">Male</label>
          <input type="radio" className="form-check-input" id="malebtn" value="Male" name="gender"></input>
        </div>
        <div className="col-3 text-center">
          <label for="femalebtn">Female </label>
          <input type="radio" className="form-check-input" value="Female" id="femalebtn" name="gender"></input>
        </div>
        <div className="col-3">
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-3"></div>
        <div className="col-6 text-center">

          <button type="button mt-5" class="btn btn-outline-success">Submit</button>
        </div>
        <div className="col-3"></div>
      </div>
    </form>
  </div>
  <TableData></TableData>
</Fragment>
)
}
export default FormData;