import React, { useState } from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBInput,
    MDBIcon,
    MDBCheckbox
  }
  from 'mdb-react-ui-kit';
import Header from '../Comon_cpomnent/Header';
import Footer from '../Comon_cpomnent/Footer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Uregister() {
    const redirect = useNavigate()

    const [fromvalue,setfromvalue] = useState({
        id:"",
        name:"",
        email:"",
        password:"",
        mobile:"",
        image:"",
        status:""
    })

    const handlechnage=(e)=>{
        setfromvalue({
            ...fromvalue,
            id:new Date().getTime().toString(),
            status:"unblock",
            [e.target.name]:e.target.value
        });
        console.log(fromvalue)
    }

    const handlesubmit=async(e)=>{

        e.preventDefault()
        if(
            fromvalue.name.trim() === "" || fromvalue.email.trim() === ""
            || fromvalue.password.trim() === "" || fromvalue.mobile.trim() === ""
            || fromvalue.image.trim() === ""
        )
        {
            toast.error("All Filds are required!")
            return;
        }
        const res =await axios.post(`http://localhost:3000/user`,fromvalue)
        console.log(res.data)
        setfromvalue({
            id:"",
        name:"",
        email:"",
        password:"",
        mobile:"",
        image:"",
        status:""
        })
        redirect("/Ulogin")
    }
  return (
    <div>
      <Header/>
      <MDBContainer fluid>

      <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
        <MDBCardBody>
          <form onSubmit={handlesubmit}>
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

              <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size='lg'/>
                <MDBInput label='Your Name' name='name' value={fromvalue.name} onChange={handlechnage} id='form1' type='text' className='w-100'/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size='lg'/>
                <MDBInput label='Your Email' name='email' value={fromvalue.email} onChange={handlechnage} id='form2' type='email'/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size='lg'/>
                <MDBInput label='Your Password' name='password' value={fromvalue.password} onChange={handlechnage} id='form3' type='password'/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="key me-3" size='lg'/>
                <MDBInput label='Your mobile' name='mobile' value={fromvalue.mobile} onChange={handlechnage} id='form4' type='text'/>
              </div>
              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="fas fa-camera-retro me-3" size='lg'/>
                <MDBInput label='Your Image' name='image' value={fromvalue.image} onChange={handlechnage} id='form4' type='url'/>
              </div>

              <MDBBtn className='mb-4' size='lg'>Register</MDBBtn>

            </MDBCol>

            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
            </MDBCol>

          </MDBRow>
          </form>
        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
      <Footer/>
    </div>
  )
}

export default Uregister;
