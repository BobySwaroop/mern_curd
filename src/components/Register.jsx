import React from 'react'
import { NavLink } from 'react-router-dom'

const Register = () => {
  return (
    <div>
    <NavLink to={'/'}>Home</NavLink>
    <div className='container'>
    <form>
        <div className='row'>
  <div class="mb-3 col-lg-6 col-md-6 col-12">
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div class="mb-3 col-lg-6 col-md-6 col-12">
    <label for="exampleInputEmail1" class="form-label">Email</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div class="mb-3 col-lg-6 col-md-6 col-12">
    <label for="exampleInputEmail1" class="form-label">Age</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div class="mb-3 col-lg-6 col-md-6 col-12">
    <label for="exampleInputEmail1" class="form-label">Mobile</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div class="mb-3 col-lg-6 col-md-6 col-12">
    <label for="exampleInputEmail1" class="form-label">Work</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div class="mb-3 col-lg-6 col-md-6 col-12">
    <label for="exampleInputEmail1" class="form-label">Address</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div class="mb-3 col-md-6 col-md-12 col-12">
    <label for="exampleInputEmail1" class="form-label">Description</label>
    <textarea name="text" class="form-control" id="" cols="30" rows="10" aria-describedby="emailHelp"/>
    
  </div>
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
    
    </div>
  )
}

export default Register
