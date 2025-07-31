import React from 'react'
import {useState} from 'react'
import {addUser} from './userReducer'
import {useDispatch,useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'


function Create() {
  const [name, setName]= useState('')
  const [email, setEmail]= useState('')
const users = useSelector((state => state.users));
const dispatch= useDispatch();
const navigate = useNavigate();
  
       
  const handleSubmit= event =>{
    event.preventDefault();
    dispatch(addUser({id: users[users.length - 1].id +1, name, email}))
navigate('/')
  }
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center" >
      <h3>Create New User</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" className="form-control" placeholder="Enter Name" onChange={e=> setName(e.target.value)}></input>
        </div>
         <div>
          <label htmlFor="name">Email:</label>
          <input type="text" name="name" className="form-control" placeholder="Enter Email" onChange={e=> setEmail(e.target.value)}></input>
        </div>
        <br/>
         
      
          <button type="submit" name="name" className="btn btn-info">Submit</button>
       
      </form>
      </div>
  )
}

export default Create;