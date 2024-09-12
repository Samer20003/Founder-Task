import React , {useContext, useState} from 'react'
import UserCard from './UserCard'
import Dropdown from 'react-bootstrap/Dropdown'
import userListContext from './usersListContext'
import {useHome} from "./mainContext"
function ListView() {
    const {userData} = useContext(userListContext);
    const [users, setUser] = useState(userData);
    const {checked, listClick, sliderValue} = useHome();
// Handlers for the dropdown mnue 
    const handleSortAlphabetical = () =>{
    const sortedUsers = [...users].sort((a,b)=> a.name.localeCompare(b.name));
    setUser(sortedUsers);
}
const handleSortFriendNumber = () =>{
    const sortedUsers = [...users].sort((a,b)=> b.numberOfFriends - a.numberOfFriends);
    setUser(sortedUsers);
}

const checkUserHasTags  = (user) =>{
  for (let i in listClick) {
    if (!user.tags.includes(listClick[i])){
      return false;
    }
  }
  return true;
}

const filteredUsers = users.filter((user) => {
  
    if (checked && !user.hasPic) {
     
      return false; }
      
      if(listClick.length > 0 && !checkUserHasTags(user)){
        return false;  
      }
    if(user.numberOfFriends < sliderValue[0] || user.numberOfFriends > sliderValue[1] ){
      return false;
    }
    return true; 
  });

// end of the handlers

    const userValues = users
   
    return (
      <div >
          <Dropdown className="mb-4">
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                  Sort by
              </Dropdown.Toggle>

              <Dropdown.Menu> 
                  <Dropdown.Item onClick={handleSortAlphabetical} href="#/action-1">Alphabetical</Dropdown.Item>
                  <Dropdown.Item onClick={handleSortFriendNumber} href="#/action-2">Number of Friends</Dropdown.Item>
              </Dropdown.Menu>
          </Dropdown>
         
          <div className='row '>
              {filteredUsers.map((user) => (
                  <div className='col-6 col-md-3' key={user.id}>
                      <UserCard user={user} />
                  </div>
              ))}
          </div>
      </div>
     
  );
}

export default ListView