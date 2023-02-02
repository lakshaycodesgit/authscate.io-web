import React, { useState } from 'react'
import Header from '../common/Header'
import Footer from '../common/footer'
import "./form1.css"
import axios from "axios"

function Form() {
  const [apply, setApply] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [branch, setBranch] = useState("");
  const [explain, setExplain] = useState("");
  const [city, setCity] = useState("");
  const [course, setCourse] = useState("");
  const [phoneno, setPhoneno] = useState("");
  const [resume, setResume] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");

  const addForm = (e) => {
    e.preventDefault();

    axios
      .post("/register", { apply,name, email, branch, explain,city,course,phoneno,resume,linkedin,github })
      .then(() => {
        setApply("");
        setName("");
        setEmail("");
        setBranch("");
        setExplain("");
        setCity("");
        setCourse("");
        setPhoneno("");
        setResume("");
        setLinkedin("");
        setGithub("");
        
        
        
        
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div>
    <Header/>
    <div class="container" style={{backgroundColor:"#0C0A44",padding:"50px",borderRadius:"30px"}}>
    
    <form class="row g-3" method='POST'>
    <div class="col-md-4">
    <label for="inputState" class="form-label">Applying For</label>
    <select id="inputState" class="form-select" name="post" value={apply} onChange={(e) => setApply(e.target.value)}>

      <option selected>Choose </option>
      <option>Web3 Resercher</option>
      <option>Web Devloper</option>
    
      <option>Content and Design</option>
      <option>Other</option>
    </select>
  </div>
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Name</label>
    <input type="text" name='name' value={name} onChange={(e) => setName(e.target.value)} class="form-control" id="inputEmail4"/>
    <div class="invalid-feedback">
      Please enter Your Name.
    </div>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Email Id</label>
    <input type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} class="form-control" id="inputPassword4"/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Branch Name</label>
    <input type="email" name='email' value={branch} onChange={(e) => setBranch(e.target.value)} class="form-control" id="inputPassword4"/>
  </div>
  
  <div class="form-group col-md-12">
    <label for="formGroupExampleInput2">Explain your past experience (within 250 words)</label>
    <textarea class="form-control" name="explain" value={explain} onChange={(e) => setExplain(e.target.value)} type="text" id="exampleFormControlTextarea1" rows="3"></textarea>
    {/*<input name="explain" value={user.explain} onChange={handleInputs} type="text" class="form-control input-lg"  rows="3" id="formGroupExampleInput2" placeholder=""/>*/}
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Linkedin profile Url</label>
      <input type="text" name='linkedin' value={linkedin} onChange={(e) => setLinkedin(e.target.value)} class="form-control" id="inputEmail4" placeholder=""/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Github Profile Url</label>
      <input type="text"name='github' value={github} onChange={(e) => setGithub(e.target.value)} class="form-control" id="inputPassword4" placeholder=""/>
    </div>
  
   
  
  
</div>
  <div class="col-md-6">
    <label for="inputCity" clyass="form-label">City</label>
    <input type="text" name='city' value={city} onChange={(e) => setCity(e.target.value)}class="form-control" id="inputCity"/>
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">Course</label>
    <select id="inputState" class="form-select" name="course" value={course} onChange={(e) => setCourse(e.target.value)}>

      <option selected>...</option>
      <option>B.tech</option>
      <option>BBA</option>
      <option>BFtech</option>
      <option>Other</option>
    </select>
  </div>
  <div class="col-md-2">
    <label for="inputZip" class="form-label">Phone no</label>
    <input type="text" name='phoneno' value={phoneno} onChange={(e) => setPhoneno(e.target.value)}
     class="form-control" id="inputZip"/>
  </div>
  <div class="col-12">
  <div class="col-md-13">
    <label for="inputZip" class="form-label">Paste Resume GDrive Link(Should be open for all else your application will be rejected)</label>
    <input type="text" name='resume' value={resume} onChange={(e) => setResume(e.target.value)}
     class="form-control" id="inputZip"/>
  </div>
  </div>
  
{/*<div class="form-check">
      <input class="form-check-input" name='check' value={user.check} onChange={handleInputs} type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
        All  info provided by me is legit, and I will be responsible for any undue consequences
      </label>
  </div>*/}
  <div class="col-12">
    <button  onClick={addForm} class="btn btn-light btn-md round">Submit</button>
  </div>
</form>
  </div>
  <Footer/>
  </div>
  )
}

export default Form