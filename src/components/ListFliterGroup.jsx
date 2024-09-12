import React , {useContext} from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import {useHome} from "./mainContext"
function ListFliterGroup() {
    const {saveBtnValues, isChecked, setListClick, setSliderValue} = useHome();
    
    
    const handleFlitertValues = (value) =>{
        isChecked(value.checked);
        setListClick(value.listClick);
        setSliderValue(value.sliderValue);
    }
  return (
    <>
    <div className="listFliter"   style={{
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "50%",
    zIndex: "9999",
  }}  >
     <Dropdown >
        <Dropdown.Toggle  variant="secondary" id="dropdown-basic" style={{width:"50%"}} >
            Fliters
        </Dropdown.Toggle>

        <Dropdown.Menu>
            {saveBtnValues.map((value)=>(
            <Dropdown.Item key={value.fliterName}  onClick={()=>handleFlitertValues(value)}>{value.fliterName}</Dropdown.Item>

            ))}
        </Dropdown.Menu>

    </Dropdown>
    </div>
    </>
  )
}

export default ListFliterGroup