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
import './assets/css/login.css'

function Login() {
  const [fname, setFname] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  
  // const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
  
    if (fname.trim() === '') {
      validationErrors.fname = 'First Name is required';
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
    <div style={{display:'flex',flexDirection:'row'}}> 
    <><MDBContainer fluid className='p-4'>

      <MDBRow>



        <MDBCol md='5'>

          <MDBCard className='my-4'>
            <MDBCardBody className='p-5'>
              <h1>Login</h1>
              <form >
                <MDBInput
                  wrapperClass='mb-4'
                  label='User Name'
                  id='f_name'
                  type='text'
                  size='lg'
                  required
                  value={fname}
                  onChange={(e) => setFname(e.target.value)}
                  validation={errors.fname ? false : true}
                  errorMessage={errors.fname} />

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
                  errorMessage={errors.password} />

<Link to='/Home'>
                <button className="btn btn-primary mb-4 px-5" type="submit" >Login</button>
                </Link>
              </form>
            <Link to={'/Admin'}> <p>Admin Login</p></Link> 
              <p >Not a member?<Link to='/reg'> Register</Link></p>




            </MDBCardBody>
          </MDBCard>

        </MDBCol>

      </MDBRow>

    </MDBContainer></>
    <div>
      
<img src='https://t3.ftcdn.net/jpg/03/28/22/24/240_F_328222411_lCeEca3Xc9HxddKLCJzlqRGsOSz25swg.jpg'></img>

     

    </div>
    </div>
  );
}

export default Login;