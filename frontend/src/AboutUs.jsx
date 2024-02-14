// AboutUs.js

import React from 'react';
import Nav from './Nav';
const footerStyle = {
    backgroundColor: 'grey',
    color: '#fff',
    padding: '2rem 0',
    textAlign: 'center',
  };

const AboutUs = () => {
  const containerStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '20px',
  };

  const contentStyle = {
    marginBottom: '30px',
  };

  const teamStyle = {
    textAlign: 'center',
  };

  const teamMemberStyle = {
    marginTop: '20px',
  };

  const memberImageStyle = {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    objectFit: 'cover',
  };

  const memberNameStyle = {
    margin: '10px 0 5px',
  };

  const memberRoleStyle = {
    color: '#888',
  };

  return (
    <div>
        <Nav/>
    <div style={containerStyle}>
      <header style={headerStyle}>
        <h1>About Us</h1>
      </header>
      <section style={contentStyle}>
        <p>
          Welcome to our portal! We are passionate about [Your Portal's Purpose]. Our mission is to [Mission Statement].
        </p>
        <p>
          At [Your Portal Name], we strive to [Core Values or Goals]. Whether you're a [Target Audience], a [Secondary Audience], or just curious about [Portal's Topic], we have something for everyone.
        </p>
        <p>
          Our team is dedicated to providing high-quality content, resources, and services to help you [Portal's Purpose].
        </p>
      </section>
      <section style={teamStyle}>
        <h2>Meet Our Team</h2>
        <div style={teamMemberStyle}>
          <img src="https://example.com/team-member1.jpg" alt="Team Member 1" style={memberImageStyle} />
          <h3 style={memberNameStyle}>John Doe</h3>
          <p style={memberRoleStyle}>Co-founder & CEO</p>
        </div>
        <div style={teamMemberStyle}>
          <img src="https://example.com/team-member2.jpg" alt="Team Member 2" style={memberImageStyle} />
          <h3 style={memberNameStyle}>Jane Smith</h3>
          <p style={memberRoleStyle}>Co-founder & CTO</p>
        </div>
        {/* Add more team members as needed */}
      </section>
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
    </div>
  );
};

export default AboutUs;
