import React, {useContext} from 'react'
import Context from "../components/mainContext"
import { useParams } from 'react-router-dom';
import userData from '../users.json'
import "../style/userInfo.css"
function UserInfo() {
    const {id} =useParams()
    const user = userData.find((f)=> f.id == id)
    console.log(user);
    return (
      <div className="profile-card-container d-flex justify-content-center align-middle">
      <div className="profile-card w-50 rounded text-center position-relative ">
        <div className="profile-header">
          <img
            src={user.hasPic}
            className="profile-pic w-40 h-50 rounded-circle position-absolute"
          />
          <h2 className='fs-3 text-light'>{user.fullName}</h2>
          <p style={{color:"white"}}>{user.city}</p>
          <p className="job-title fs-5 text-light">
            {user.position}
          </p>
        </div>

        <div className="profile-actions d-flex justify-content-around  mt-1 mb-1">
          <button className="btn connect bg-light text-black rounded-pill cursor-pointer">Add Friend</button>
          <button className="btn message bg-light text-black rounded-pill cursor-pointer">Message</button>
        </div>

        <div className="profile-stats d-flex justify-content-around mt-5 mb-5 text-light ">
          <div className='text-center'>
            <strong className='"fs-5 text-light'>{user.numberOfFriends}</strong>
            <br />
            Friends
          </div>
          <div className='text-center'>
            <strong className='"fs-5 text-light'>{user.numberOfProjects}</strong>
            <br />
            Project
          </div>
       
        </div>

        <button className="btn show-more text-light border border-0 rounded-pill pt-2 pb-2 cursor-pointer ">Show more</button>
      </div>
    </div>
  );
 
  
}

export default UserInfo