import Map from '../Map';
import React from 'react';
import '../.././userprofile.css';
import ProfilePic from "./profile.jpg"


const UserProfile = () => {
  const userData = {
    profilePic: './profile.jpg',
    bio: 'I am a passionate traveler and explorer.',
    followers: 1269,
    interests: ['Hiking', 'Photography', 'Camping'],
  };

  return (
    <div className="container">
       <div className='profile-heading'>
            <h2>My Profile</h2>
        </div> 
      <div className="profile">
        <img src={ProfilePic} alt="Profile" className="profile-pic" />
        <h2>Gene Block</h2>
        <p>{userData.bio}</p>
        <p>Followers: {userData.followers}</p>
        <p>Interests:</p>
        <ul>
          {userData.interests.map((interest, index) => (
            <li key={index}>{interest}</li>
          ))}
        </ul>
      </div>
      <div className="map-container">
        {/* <div id="map"></div> */}
        <Map />
      </div>
    </div>
  );
};

export default UserProfile;