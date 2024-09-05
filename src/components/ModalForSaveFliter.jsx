import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Context from "./Context"
function ModalForSaveFliter({onClose}) {
   const {checked, listClick, sliderValue, fliterName, handleInputChange, saveBtnValues, saveStatesForAllFliters} = useContext(Context);
    

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
          onChange={handleInputChange}
           />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>Close</Button>
          <Button variant="primary" onClick={saveStatesForAllFliters}>Save fliter</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default ModalForSaveFliter;