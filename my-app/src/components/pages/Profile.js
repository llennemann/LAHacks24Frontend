import Map from '../Map';
import React from 'react';
import '../.././userprofile.css';
import ProfilePic from "./profile.jpg"


const UserProfile = () => {
  const userData = {
    profilePic: './profile.jpg',
    bio: 'I am a passionate traveler and explorer. I love exploring new places, specially the dark corners of Boelter Hall',
    followers: 1269,
    interests: ['Hiking', 'Photography', 'Camping'],
  };

  return (
    <div className="container">
      <div className="profile">
        <div className='profile-heading'>
              <h1>Profile</h1>
        </div> 
        <img src={ProfilePic} alt="Profile" className="profile-pic" />
        <h2>Gene Block (He/Him)</h2>
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
        <div className='map-heading'>
            <h1>My Travels</h1>
        </div> 
        {/* <div id="map"></div> */}
        <Map />
      </div>
    </div>
  );
};

export default UserProfile;