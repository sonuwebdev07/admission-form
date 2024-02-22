import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Update = () => {

  const [state, setState] = useState({
    sf_name: "",
    sl_name: "",
    class: "",
    dob: "",
    pf_name: "",
    pl_name: "",
    address_line_1: "",
    address_line_2: "",
    city: "",
    district: "",
    zip: "",
    country: "",
    mobile_number: "",
    email: ""
})

const params=useParams();

const navigate=useNavigate();

useEffect(()=>{
  axios.get("http://localhost:3004/student/"+params.id)
  .then((res)=>{
    setState(res.data)
  })
},[])

const handler = (event) => {
  const { name, value } = event.target;
  setState({ ...state, [name]: value });
}

const updateData = (event) => {
  event.preventDefault();
  axios.put("http://localhost:3004/student/"+params.id,state)
      .then((res) => {
          navigate("/data")
      })
}

  return (
    <>
                  <div className="container">
                    <form className='admission-form' onSubmit={updateData} method='post'>
                        <div className="row mb-3 mt-3">
                            <h1 className='text-center text-white my-4'>School Admission Form</h1>
                            <label className="col-sm-2 col-form-label">Student's Name</label>
                            <div className="col">
                                <input type="text" className="form-control" name="sf_name" onChange={handler} value={state.sf_name} />
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" placeholder="Last" name="sl_name" onChange={handler} value={state.sl_name} />
                            </div>
                        </div>
    
                        <div className="row mb-3">
                            <label className="col-sm-2 col-form-label">Session you want to apply for <br /> <span style={{ fontSize: "12px" }}>For example: Session 2015-2016.</span></label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" name="class" onChange={handler} value={state.class} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-2 col-form-label">Student's DoB</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" name="dob" onChange={handler} value={state.dob} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-2 col-form-label">Parent/Guardian Name</label>
                            <div className="col">
                                <input type="text" className="form-control" placeholder="First" name="pf_name" onChange={handler} value={state.pf_name} />
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" placeholder="Last" name='pl_name' onChange={handler} value={state.pl_name} />
                            </div>
                        </div>
                        <div className="row">
                            <label className="col-sm-2 col-form-label">Current Address</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" placeholder='Street Address' name='address_line_1' onChange={handler} value={state.address_line_1}/>
                            </div>
                        </div>
                        <div className="row">
                            <label className="col-sm-2 col-form-label"></label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" placeholder='Street Address Line 2' name='address_line_2' onChange={handler} value={state.address_line_2} />
                            </div>
                        </div>
                        <div className="row mb-3 mt-3">
                            <label className="col-sm-2 col-form-label"></label>
                            <div className="col">
                                <input type="text" className="form-control" placeholder="City" name='city' onChange={handler} value={state.city} />
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" placeholder="District" name='district' onChange={handler} value={state.district} />
                            </div>
                        </div>
                        <div className="row mb-3 mt-3">
                            <label className="col-sm-2 col-form-label"></label>
                            <div className="col">
                                <input type="text" className="form-control" placeholder="Postal/Zip Code" name='zip' onChange={handler} value={state.zip} />
                            </div>
                            <div className="col">
                                <input type="country" className="form-control" placeholder="Country" name='country' onChange={handler} value={state.country}/>
                            </div>
                        </div>
                        <div className="row mb-3 mt-5">
                            <label className="col-sm-2 col-form-label">Phone</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" placeholder='Mobile Number' name='mobile_number' onChange={handler} value={state.mobile_number} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-2 col-form-label">Email <br /><span style={{ fontSize: "12px" }}>Your admission confirmation will be sent via email.</span></label>
                            <div className="col-sm-10">
                                <input type="email" className="form-control" placeholder='Email' name='email' onChange={handler} value={state.email} />
                            </div>
                        </div>
                        <div className="d-grid gap-2 mb-5">
                            <button className="btn btn-light" type='submit'>Update Data</button>
                        </div>
                    </form>
                </div>
    </>
  )
}

export default Update
