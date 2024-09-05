import React , {useContext, useState} from 'react'
import Context from "./Context"
import UserCard from './UserCard'
import Dropdown from 'react-bootstrap/Dropdown'
import UserInfo from '../pages/UserInfo'
import Fliter from './Fliter'
import userListContext from './usersListContext'
function ListView() {
    const {userData} = useContext(userListContext);
    const [users, setUser] = useState(userData);
    const {checked} = useContext(Context)
    const {listClick} = useContext(Context)
    const {sliderValue} = useContext(Context);
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
      <div className='container' style={{width:"100vh"}}>
          <Dropdown className="mb-4">
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                  Sort by
              </Dropdown.Toggle>

              <Dropdown.Menu>
                  <Dropdown.Item onClick={handleSortAlphabetical} href="#/action-1">Alphabetical</Dropdown.Item>
                  <Dropdown.Item onClick={handleSortFriendNumber} href="#/action-2">Number of Friends</Dropdown.Item>
              </Dropdown.Menu>
          </Dropdown>
          
          <div className='row row-cols-auto'>
              {filteredUsers.map((user) => (
                  <div className='col' key={user.id}>
                      <UserCard user={user} />
                  </div>
              ))}
          </div>
      </div>
  );
}

export default ListView