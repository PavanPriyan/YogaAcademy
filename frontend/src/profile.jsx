import React, { useState } from 'react';
import './profile.css'; 
import Nav from './Nav';

const Profile = () => {
  const [user, setUser] = useState({
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  });

  const [isEditing, setEditing] = useState(false);

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    setEditing(false);
    // Perform save logic, e.g., send updated user data to the server
  };

  const handleInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
        <Nav/>
    <div className="user-profile-container">
      <h1 className="user-profile-heading">User Profile</h1>
      {isEditing ? (
        <div>
          <label className="user-profile-label" htmlFor="name">Name:</label>
          <input
            className="user-profile-input"
            type="text"
            id="name"
            name="name"
            value={user.name}
            onChange={handleInputChange}
          />
          <br />
          <label className="user-profile-label" htmlFor="email">Email:</label>
          <input
            className="user-profile-input"
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={handleInputChange}
          />
          <br />
          <label className="user-profile-label" htmlFor="bio">Bio:</label>
          <textarea
            className="user-profile-input"
            id="bio"
            name="bio"
            value={user.bio}
            onChange={handleInputChange}
          />
          <br />
          <button className="user-profile-button" onClick={handleSaveClick}>Save</button>
        </div>
      ) : (
        <div>
          <p className="user-profile-paragraph">
            <strong className="user-profile-strong">Name:</strong> {user.name}
          </p>
          <p className="user-profile-paragraph">
            <strong className="user-profile-strong">Email:</strong> {user.email}
          </p>
          <p className="user-profile-paragraph">
            <strong className="user-profile-strong">Bio:</strong> {user.bio}
          </p>
          <button className="user-profile-button" onClick={handleEditClick}>Edit</button>
        </div>
      )}
    </div>
    </div>
  );
};

export default Profile;
