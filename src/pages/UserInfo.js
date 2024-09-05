import React, {useContext} from 'react'
import Context from "../components/Context"
import { useParams } from 'react-router-dom';
import userData from '../users.json'
import "../style/userInfo.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function UserInfo() {
    const {id} =useParams()
    const user = userData.find((f)=> f.id == id)
    console.log(user);
    return (
      <div className="profile-card-container">
      <div className="profile-card">
        <div className="profile-header">
          <img
            src={user.hasPic}
            className="profile-pic"
          />
          <h2>{user.name}</h2>
          <p style={{color:"white"}}>{user.city}</p>
          <p className="job-title">
            {user.position}
          </p>
        </div>

        <div className="profile-actions">
          <button className="btn connect">Add Friend</button>
          <button className="btn message">Message</button>
        </div>

        <div className="profile-stats">
          <div>
            <strong>{user.numberOfFriends}</strong>
            <br />
            Friends
          </div>
          <div>
            <strong>{user.numberOfProjects}</strong>
            <br />
            Project
          </div>
       
        </div>

        <button className="btn show-more">Show more</button>
      </div>
    </div>
  );
 
  
}

export default UserInfo