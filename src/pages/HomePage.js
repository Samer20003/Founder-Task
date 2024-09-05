import React, {useState} from 'react'
import Fliter from '../components/Fliter'
import ListView from '../components/ListView'
import Context from '../components/Context'
import ListFliterGroup from '../components/ListFliterGroup'
import "../style/homePageContainer.css";
function HomePage() {
  // useState and the handler for the pic
    const [checked, isChecked] = useState(false);

    const handleChange = (event) => {
      isChecked(event.target.checked)
    };
// end of pic State 

// useState and the handler for the AutoComplete
    const [listClick,setListClick] = useState([])
    
    const handleClick = (e,value) =>{
      setListClick(value);
    }

// useState and handler for the Slider 

    const [sliderValue, setSliderValue] = useState([0,200]);

    const sliderTrack = (e,value) => {
        setSliderValue(value);
   
        
    } 

    // useState for save button on modal 
    const [fliterName , setFliterName] = useState("");
    const [saveBtnValues, setSaveBtnValues] = useState([]);

    // track the input value 
    const handleInputChange = (e) =>{
      setFliterName(e.target.value);
  }

  // return all the needed values for the fliter mnue
    const saveStatesForAllFliters = (e) =>{
      setSaveBtnValues([...saveBtnValues, {checked,listClick,sliderValue,fliterName}]);

  }


    const checkedValue = {
         checked,
         isChecked,
         handleChange,
         listClick,
         setListClick,
         handleClick,
         sliderValue,
         setSliderValue,
         sliderTrack,
         fliterName,
         handleInputChange,
         saveBtnValues,
         saveStatesForAllFliters,
    }
  
  return (
    <>
    <Context.Provider value={checkedValue}>
    <div className="homePage-container">
      <div className='fliter-component'>
    <Fliter/>
    </div>
    <div className="row row-cols-4 listview-component">
    <ListView />
    </div>
    </div>
    <ListFliterGroup/>   
    </Context.Provider>
    </>
  )
}

export default HomePage