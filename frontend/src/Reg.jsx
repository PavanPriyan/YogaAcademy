import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,

}
from 'mdb-react-ui-kit';
import './Reg.css';

function Reg() {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
  
    if (fname.trim() === '') {
      validationErrors.fname = 'First Name is required';
    }
  
    if (lname.trim() === '') {
      validationErrors.lname = 'Last Name is required';
    }
  
    if (email.trim() === '') {
      validationErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = 'Invalid email format';
      alert('Please enter a valid email address');
    }
  
    if (password.trim() === '') {
      validationErrors.password = 'Password is required';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*()])[A-Za-z\d@#$%^&*()]{8,}/.test(password)) {
      validationErrors.password =
        'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one digit, and one special character';
      alert('Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one digit, and one special character');
    }
  
    setErrors(validationErrors);
  
    if (Object.keys(validationErrors).length === 0) {
      navigate('/Home');
    }
  };
  
  

  const handleClick = () => {
    alert('Registered Successfully');
  };
  return (
    <MDBContainer fluid className='p-4  '>

      <MDBRow>

       

        <MDBCol md='6'>

          <MDBCard className='my-5'>
            <MDBCardBody className='p-5'>
<h1>New User</h1>
            <form onSubmit={handleSubmit}>
            <MDBInput
  wrapperClass='mb-4'
  label='First Name'
  id='f_name'
  type='text'
  size='lg'
  required
  value={fname}
  onChange={(e) => setFname(e.target.value)}
  validation={errors.fname ? false : true}
  errorMessage={errors.fname}
/>
<MDBInput
  wrapperClass='mb-4'
  label='Last Name'
  id='l_name'
  type='text'
  size='lg'
  required
  value={lname}
  onChange={(e) => setLname(e.target.value)}
  validation={errors.lname ? false : true}
  errorMessage={errors.lname}
/>
<MDBInput
  wrapperClass='mb-4'
  label='Email'
  id='email'
  type='email'
  size='lg'
  required
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  validation={errors.email ? false : true}
  errorMessage={errors.email}
/>
<MDBInput
  wrapperClass='mb-4'
  label='Password'
  id='password'
  type='password'
  size='lg'
  required
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  validation={errors.password ? false : true}
  errorMessage={errors.password}
/>


<Link to='/'>
               <button className="btn btn-primary mb-4 px-5" type="submit">Register</button>
               </Link>
              </form>

              

              <img src='https://t4.ftcdn.net/jpg/00/43/39/79/240_F_43397950_r4W5MeDJT9O7RrWKu56Z7IBouX9HWotD.jpg'></img>

            </MDBCardBody>
          </MDBCard>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default Reg;