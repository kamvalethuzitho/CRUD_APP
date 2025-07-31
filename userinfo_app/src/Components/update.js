import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { updateUser } from './userReducer';

function Update(){

const {id} = useParams();
 const users = useSelector(state => state.users);
  const existingUser = users.filter(f => f.id == id);
  const {name,email} = existingUser[0] || {};
  const [uname, setName]= useState(name)
  const [uemail, setEmail]= useState(email)
  const dispatch= useDispatch();
  const navigate = useNavigate ();


const handleUpdate = (event) =>{
    event.preventDefault();

    dispatch(updateUser({
        id: id,
        name: uname,
        email: uemail
    }))

    navigate('/')
}
    return(
       <div className="d-flex w-100 vh-100 justify-content-center align-items-center" >
      <div>
      <h3>Update User</h3>
      <form onSubmit={handleUpdate} >
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" className="form-control" placeholder="Enter Name"
           value={uname} onChange={e => setName(e.target.value)} ></input>
        </div>
         <div>
          <label htmlFor="email">Email:</label>
          <input type="text" name="email" className="form-control" placeholder="Enter Email"
           value={uemail} onChange={e => setEmail(e.target.value)} ></input>
        </div>
        <br/>
         
      
          <button type="submit" name="name" className="btn btn-info">Update</button>
        
      </form>
      </div>
      </div>
  )
}


export default Update;