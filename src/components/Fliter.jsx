import React,{useContext, useState} from 'react'
import Checkbox from '@mui/material/Checkbox';
import AutoComplete from "./AutoComplete"
import Slider from "./Slider"
import UserCard from './UserCard';
import Context from './Context'
import ModalForSaveFliter from "./ModalForSaveFliter"
import { Link } from 'react-router-dom';


function Fliter({user}) {
    
   const {checked, handleChange} = useContext(Context);
   const {listClick, handleClick} = useContext(Context);
   const [isModalOpen, setModalIsOpen] = useState(false);
   
  const renderModal = () =>{
    setModalIsOpen(!isModalOpen)
    
 
  }
  return (
    <div className='mainFliterContainer'>
     {isModalOpen && <ModalForSaveFliter onClose={renderModal} />}
     <div className="fliterComponents">
      <h1>has a pic?
      <Checkbox
      checked = {checked}
      onClick= {handleChange}
      />
      <button type="button" className="btn btn-primary" onClick={renderModal}>Save</button>


        </h1> 
    <AutoComplete />
    <Slider />
    </div>
   
    </div>
  )
}

export default Fliter