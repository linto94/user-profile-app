import React from 'react';
import { useState } from 'react';
import "./profile.css";
import {FaTrashAlt} from "react-icons/fa";
import {profileData} from "../profile-data";

const Profile = () => {
    const [userProfile, setUserProfile] = useState(profileData)

    const removeProfile = (id) => {
     const newProfileList = userProfile.filter((profile) => profile.id !== id)
     setUserProfile(newProfileList);
    };

  return (
        <section className="profile-sec --flex-center --100vh --bg-primary">
          <div className='container'>
             <h2 className='--text-light'>User Profile App</h2>
              {userProfile.map((profile) => {
                 const {id, name, job, img} = profile;
               return (
                <div className='profile --card --flex-between --p' key={id}>
                  <img src={img} alt="Profile Image" />
                  <div className='desc'>
                     <h4 className='--text-light'>{name}</h4>
                     <p className='--text-light'>{job}</p>
                  </div>
                  <FaTrashAlt size={18} className="icon" onClick={() => removeProfile(id)}/>
                </div> 
               );
             })};


             

            <button className='--btn --btn-danger' onClick={() => setUserProfile([])}>Clear All</button>
          </div>
        </section>
    
  );
};

export default Profile;