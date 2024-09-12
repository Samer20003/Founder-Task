import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useHome} from "./mainContext"
function ModalForSaveFliter({onClose}) {
   const {checked, listClick, sliderValue, fliterName, handleFliterNameChange, saveBtnValues, saveStatesForAllFliters} = useHome();
    
   const handleSave = () => {
    saveStatesForAllFliters();  
    onClose();                   
  };
  return (
    <div
      className="modal show"
      style={{ background: "rgba(0,0,0,0.3)" , display: "block" ,  }}
   >
      <Modal.Dialog>
        <Modal.Header closeButton  onClick={onClose}>
          <Modal.Title >Write a fliter name </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <input 
          type="text" 
          name='fliterName'
          value={fliterName}
          onChange={handleFliterNameChange}
           />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>Close</Button>
          <Button variant="primary" onClick={handleSave}>Save fliter</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default ModalForSaveFliter;