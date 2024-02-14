import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import { Style } from '@mui/icons-material';


import './home.css'
import Nav from './Nav';


const footerStyle = {
    backgroundColor: 'grey',
    color: '#fff',
    padding: '2rem 0',
    textAlign: 'center',
  };
function Home() {


  return (
    <>
   <Nav/>
    <div>
<br></br>
    <h1 style={{ textAlign: 'center' }}>RISING TO A NEW STANDARD OF YOGA EDUCATION</h1>

    </div>
    <div style={{ display: 'flex', alignItems: 'center' }}>
  <div>
    <img
      src="https://images.shiksha.com/mediadata/images/articles/1690284718phpoWwdGe.jpeg"
      alt="Yoga"
      style={{ maxWidth: '100%', height: 'auto' }}
    />
  </div>
  <div className="homebg" style={{paddingRight:'20px'}}>
   <h1 style={{textAlign:'right'}}> BECOME A YOGA TEACHER! </h1>
   <p style={{textAlign:'right'}}>
    OUR IMMERSIVE 200HR YOGA TEACHER TRAINING PROGRAM IS ONE OF THE TOP RATED IN THE WORLD! TRAIN WITH US IN OUR OCEANFRONT STUDIO. YOUR STAY AND MEALS ARE INCLUDED!</p>
  </div>
</div>
<br></br><br></br>
<div style={{ display: 'flex', alignItems: 'center' }}>
  <div style={{ textAlign: 'left', marginRight: '20px',paddingLeft:'20px'}}>
    <h1>ADVANCE YOUR TEACHING</h1>
    <p>START YOUR 300HR YTT TODAY! OUR PROGRAM IS MODULAR. THIS MEANS THAT YOU GET TO EARN YOUR ADVANCED 500RYT  WHILE TAKING SHORTER, RETREAT STYLE TRAININGS WITH US  ALL OVER THE WORLD! OR COMPLETE YOUR TRAINING ONLINE… OR A HYBRID OF BOTH!</p>
  </div>
  <div>
    <img 
      src='https://www.verywellfit.com/thmb/RByTJzWk8D-np-YuLmvuilKOFRc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/beachstretch-56aa41b63df78cf772aedf91.jpg'
      alt='Yoga'
      style={{ maxWidth:'100%', height:'auto' }}
    />
  </div>
</div>
<footer style={footerStyle}>
      <div className="footer-container">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>Your Company is dedicated to providing innovative solutions...</p>
        </div>
        <div className="footer-section">
      
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: info@example.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
    </>
  );
}
export default Home;