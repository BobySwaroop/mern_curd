import React from 'react'

const Home = () => {
  return (
    <div>
      <div className='container'>
        <div className='mt-2 mb-4'>
            <button className='btn btn-primary'>Add</button>
        </div>
        <table class="table">
  <thead>
    <tr className='table-dark'>
      <th scope="col">id</th>
      <th scope="col">usernamne</th>
      <th scope="col">email</th>
      <th scope="col">job</th>
      <th scope="col">number</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>aftab</td>
      <td>aftab@gmail.com</td>
      <td>Web developer</td>
      <td>1223</td>
      <td className='d-flex justify-content-between'>
        <button className='btn btn-success'>Read</button>
        <button className='btn btn-primary'>update</button>
        <button className='btn btn-danger'>delete</button>
      </td>
    </tr>
  
  </tbody>
</table>
      </div> 
    </div>
  )
}

export default Home
