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

function Admin() {
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
    <div style={{display:'flex',flexDirection:'row',marginTop:'10px'}} >
    <><MDBContainer fluid className='p-4'>

      <MDBRow>



        <MDBCol md='10' className='mt-5'>

          <MDBCard className='my-4'>
            <MDBCardBody className='p-5'>
              <h1>Admin Login</h1>
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

<Link to='/Ahome'>
                <button className="btn btn-primary mb-4 px-5" type="submit" >Login</button>
                </Link>
              </form>
             
              {/* <p >Not a member?<Link to='/reg'> Register</Link></p> */}




            </MDBCardBody>
          </MDBCard>

        </MDBCol>

      </MDBRow>

    </MDBContainer></>
    <div>
<img src='https://img.freepik.com/free-vector/female-doing-yoga-meditation-mandala-background_1017-38763.jpg?size=626&ext=jpg&ga=GA1.1.329411951.1706526035&semt=sph'></img>

    </div>
    </div>
  );
}

export default Admin;