import React , {useContext} from 'react'
import Context from "./Context"
import { useNavigate } from "react-router-dom";
import "../style/cardComponent.css"
function UserCard({user}) {
  const navigate = useNavigate();
  return (
    <div className='card-component'>
     <div key={user.id} className="card main-card" style={{width: "12.5rem"}}>
        <img src={user.hasPic} className="card-img-top" alt="..."/>
        <div className="card-body">
          
          <h5 className="card-title" onClick={()=>{
            navigate(`/userinfo/${user.id}`)
          }}>{user.name}</h5>
          
          <p className="card-text">
          {user.tags?.map((tag, index) => ( 
              <span key={index} className="badge text-bg-secondary">
                {tag}
              </span>
            ))}
            </p>
           <h3 className='card-email'>{user.email}</h3> 
           <p className='card-phone'>{user.phone}</p>
           <p className='card-friend'>Number of Friend is {user.numberOfFriends}</p>
         
        </div>
      </div>

    </div>
  )
}

export default UserCard