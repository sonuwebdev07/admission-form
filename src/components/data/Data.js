import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const Data = () => {

  const [state,setState]=useState([])

  const getData=()=>{
    axios.get("http://localhost:3004/student")
    .then((res)=>{
      setState(res.data)
    })
  }

  useEffect(()=>{
    getData();
  },[])

  const deleteData =(id)=>{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {

        axios.delete("http://localhost:3004/student/"+id)

        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
        getData();
      }
    });

  }

  return (
    <>
        <h2>Form Data</h2>
        <table className='table table-hover'>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Session</th>
              <th>Date of Birth</th>
              <th>Parent's First Name</th>
              <th>Parent's Last Name</th>
              <th>Address Line 1</th>
              <th>Address Line 2</th>
              <th>City</th>
              <th>District</th>
              <th>Zip Code</th>
              <th>Country</th>
              <th>Mobile Number</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {
              state.map((item,index)=>
                <tr>
                  <td>{item.id}</td>
                  <td>{item.sf_name}</td>
                  <td>{item.sl_name}</td>
                  <td>{item.class}</td>
                  <td>{item.dob}</td>
                  <td>{item.pf_name}</td>
                  <td>{item.pl_name}</td>
                  <td>{item.address_line_1}</td>
                  <td>{item.address_line_2}</td>
                  <td>{item.city}</td>
                  <td>{item.district}</td>
                  <td>{item.zip}</td>
                  <td>{item.country}</td>
                  <td>{item.mobile_number}</td>
                  <td>{item.email}</td>
                  <td>
                      <Link className="btn btn-success" to={`/update/${item.id}`}>Update</Link> &nbsp;
                      <button className='btn btn-danger' onClick={()=>{deleteData(item.id)}}>Delete</button>
                  </td>
                </tr>
              )
          }
          </tbody>
        </table>
    </>
  )
}

export default Data
