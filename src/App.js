import './App.css';
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ListView from './components/ListView';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserInfo from './pages/UserInfo';
import { useState } from 'react';
import Fliter from './components/Fliter';
import Home from './pages/HomePage'
import userData from "./users.json";
import usersListContext from "./components/usersListContext";
import ModalForSaveFliter from "./components/ModalForSaveFliter";
import Detalis from "./components/Detalis";
function App() {
  const [user, setUser] = useState({name :"samer"});
  const usersData = {
    userData
  }
  return (
    <div className='container'>

  <BrowserRouter>
    <usersListContext.Provider value ={usersData} >
    <Routes>
   
      {/* <Route path="/" element = {<ListView />} />
      
       {/* <Route path="/Filter" element = {<Fliter/>} /> */}
       <Route path="/userinfo/:id" element = { <UserInfo />}/> 
       <Route path='/home' element = { <Home />}/>
       <Route path='/modal' element = { <ModalForSaveFliter />}/>
       <Route path='/detalis' element = { <Detalis />}/>

    </Routes>
    </usersListContext.Provider>
    </BrowserRouter>
   

    </div>
  );
}

export default App;
