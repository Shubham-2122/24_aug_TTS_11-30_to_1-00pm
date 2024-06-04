import React, { useEffect, useState } from 'react'
import Header from '../Comon_cpomnent/Header'
import Footer from '../Comon_cpomnent/Footer'
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
    
  }
  from 'mdb-react-ui-kit';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Profile() {
    const redirect = useNavigate()
    const [data, setData] = useState({
        id: "",
        name: "",
        email: "",
        password: "",
        mobile: "",
        image: "",
        status: "",
      });


      useEffect(() => {
        fetchData();
      }, []);

      const fetchData = async () => {
        try {
          const res = await axios.get(
            `http://localhost:3000/user/${localStorage.getItem("Uloginid")}`
          );
          console.log(res.data);
          setData(res.data);
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      };

      const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        if (
          data.name.trim() === "" ||
          data.email.trim() === "" ||
          data.password.trim() === "" ||
          data.mobile.trim() === "" ||
          data.image.trim() === ""
        ) {
          toast.error("All fields are required!");
          return;
        }
        try {
          const res = await axios.patch(
            `http://localhost:3000/user/${data.id}`,
            data
          );
          console.log(res);
          if (res.status === 200) {
            setData({
              name: "",
              email: "",
              password: "",
              mobile: "",
              image: "",
            });
            toast.success("User updated successfully");
            redirect("/")
          }
        } catch (error) {
          console.error("Error updating user:", error);
          toast.error("Error updating user");
        }
      };

  return (
    <div>
      <Header/>
      <MDBContainer fluid>

<MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
  <MDBCardBody>
    <form onSubmit={handleSubmit}>
    <MDBRow>
      <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

        <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Profile</p>

        <div className="d-flex flex-row align-items-center mb-4 ">
          <MDBIcon fas icon="user me-3" size='lg'/>
          <MDBInput name='name' value={data.name} onChange={handleChange} label='Your Name' id='form1' type='text' className='w-100'/>
        </div>

        <div className="d-flex flex-row align-items-center mb-4">
          <MDBIcon fas icon="envelope me-3" size='lg'/>
          <MDBInput name='email' value={data.email} onChange={handleChange} label='Your Email' id='form2' type='email'/>
        </div>

        <div className="d-flex flex-row align-items-center mb-4">
          <MDBIcon fas icon="lock me-3" size='lg'/>
          <MDBInput name='password' value={data.password} onChange={handleChange} label='Your Password'  id='form3' type='text'/>
        </div>

        <div className="d-flex flex-row align-items-center mb-4">
          <MDBIcon fas icon="key me-3" size='lg'/>
          <MDBInput name='mobile' value={data.mobile} onChange={handleChange} label='Your mobile'  id='form4' type='text'/>
        </div>
        <div className="d-flex flex-row align-items-center mb-4">
          <MDBIcon fas icon="fas fa-camera-retro me-3" size='lg'/>
          <MDBInput name='image' value={data.image} onChange={handleChange} label='Your Image'  id='form4' type='url'/>
        </div>

        <MDBBtn className='mb-4' size='lg'>Update profile</MDBBtn>

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

export default Profile;
