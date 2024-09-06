import React,{useContext, useState} from 'react'
import Checkbox from '@mui/material/Checkbox';
import AutoComplete from "./AutoComplete"
import Slider from "./Slider"
import ModalForSaveFliter from "./ModalForSaveFliter"
import {useHome} from "./mainContext"

function Fliter({user}) {
    
   const {checked, handlePictureCheck, listClick, handleClick} = useHome();
   const [isModalOpen, setModalIsOpen] = useState(false);
   
  const renderModal = () =>{
    setModalIsOpen(!isModalOpen)
    
 
  }
  return (
    <div className='container'>
     {isModalOpen && <ModalForSaveFliter onClose={renderModal} />}
     <div className="fliterComponents">
      <h1 className='fs-2'>has a pic?
      <Checkbox
      checked = {checked}
      onClick= {handlePictureCheck}
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