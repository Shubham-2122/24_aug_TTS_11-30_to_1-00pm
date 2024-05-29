import React, { useState } from 'react'
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import AHeader from '../Comoan/AHeader';
import AFooter from '../Comoan/AFooter';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Alogin() {
    const redirect = useNavigate()

    const [fromvalue,setfromvalue]= useState({
        email:"",
        password:"",
    })

    const getchnage=(e)=>{

        setfromvalue({...fromvalue,[e.target.name]:e.target.value})
        console.log(fromvalue)
    }

    const submithadle=async(e)=>{
        e.preventDefault()
      
        // destucing
        const {email,password} = fromvalue
        if(!email.trim() || !password.trim())
        {
            console.error("Email and password pls feild")
            toast.error("Email and password pls feild")
            return false
        }
        
        // match proceess
        try {

            
            const res = await axios.get(`http://localhost:3000/admin?email=${email}`)

            console.log(res.data)

            if(res.data.length === 0)
            {
                console.error("Email pls correct mathc")
                toast.error("Email pls correct match")
                return false
            }

            const user =  res.data[0]
            if(user.password !== password)
            {
                console.error("Password field")
                toast.error("Password field")
                return false
            }

            // session creted 
            localStorage.setItem('aloginid',user.id)
            localStorage.setItem('aname',user.name)
            console.log("login successfull")
            toast.success("login succssfully")
            redirect("/Dashboard")
        } catch (error) {
            
        }
    }

    return (
        <div>
            <AHeader />
            <MDBContainer fluid className="p-3 my-5 h-custom">

                <form action="" onSubmit={submithadle}>
                    <MDBRow>

                        <MDBCol col='10' md='6'>
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Sample image" />
                        </MDBCol>

                        <MDBCol col='4' md='6'>

                            <div className="d-flex flex-row align-items-center justify-content-center">

                                <p className="lead fw-normal mb-0 me-3">Sign in with</p>

                                <MDBBtn floating size='md' tag='a' className='me-2'>
                                    <MDBIcon fab icon='facebook-f' />
                                </MDBBtn>

                                <MDBBtn floating size='md' tag='a' className='me-2'>
                                    <MDBIcon fab icon='twitter' />
                                </MDBBtn>

                                <MDBBtn floating size='md' tag='a' className='me-2'>
                                    <MDBIcon fab icon='linkedin-in' />
                                </MDBBtn>

                            </div>

                            <div className="divider d-flex align-items-center my-4">
                                <p className="text-center fw-bold mx-3 mb-0">Or</p>
                            </div>

                            <MDBInput wrapperClass='mb-4' name='email' value={fromvalue.email} onChange={getchnage} label='Email address' id='formControlLg' type='email' size="lg" />
                            <MDBInput wrapperClass='mb-4' name='password' value={fromvalue.password} onChange={getchnage} label='Password' id='formControlLg' type='password' size="lg" />

                            <div className="d-flex justify-content-between mb-4">
                                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                                <a href="!#">Forgot password?</a>
                            </div>

                            <div className='text-center text-md-start mt-4 pt-2'>
                                <MDBBtn className="mb-0 px-5" size='lg'>Login</MDBBtn>
                                <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <a href="#!" className="link-danger">Register</a></p>
                            </div>

                        </MDBCol>

                    </MDBRow>
                </form>


            </MDBContainer>
            <AFooter />
        </div>
    )
}

export default Alogin
