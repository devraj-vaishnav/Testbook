import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import http from '../http';
import React from 'react';

export default function AddData() {
  const navigate = useNavigate(); 
  const [input, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}));
  };

  const submitForm = (event) => {
    event.preventDefault();
    http.post('/users', input).then((res) => {
      navigate('/');
      console.log(res);
    }).catch((error) => {
      console.error("There was an error submitting the form!", error);
    });
  };

  return (
    <div className='m-5'>
 <div className='row'>
  <div className='col-sm-2'></div>
  <div className='col-sm-8'>
    <div className='card p-5'>
    <form>
      <h2>Add New User</h2>
      <label>Name</label>
      <input name='name' type='text' className='form-control mb-3'
      value={input.name||''}
      onChange={handleChange}
      />
      <label>Email</label>
      <input name='email' type='text' className='form-control mb-3'
       value={input.email||''}
       onChange={handleChange}/>
      <label>Password</label>
      <input name='password' type='password' className='form-control mb-3'  value={input.password ||''}
      onChange={handleChange}/>
      <button className='btn btn-primary' onClick={submitForm} >Submit</button>
     </form>
    </div>
  </div>
 </div>

 </div>
  )
}
