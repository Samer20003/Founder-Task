import React, { createContext , useState, useContext } from "react";

const userContext = createContext();


export function HomePageAction({children}){
     // useState and the handler for the pic
     const [checked, isChecked] = useState(false);

     const handlePictureCheck = (event) => {
       isChecked(event.target.checked)
     };
 // end of pic State 
 
 // useState and the handler for the AutoComplete
     const [listClick,setListClick] = useState([])
     const handleAutoTagsValues = (e,value) =>{
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
     const handleFliterNameChange = (e) =>{
       setFliterName(e.target.value);
   }
 
   // return all the needed values for the fliter mnue
     const saveStatesForAllFliters = (e) =>{
       setSaveBtnValues([...saveBtnValues, {checked,listClick,sliderValue,fliterName}]);
   }
   const checkedValue = {
    checked,
    isChecked,
    handlePictureCheck,
    listClick,
    setListClick,
    handleAutoTagsValues,
    sliderValue,
    setSliderValue,
    sliderTrack,
    fliterName,
    handleFliterNameChange,
    saveBtnValues,
    saveStatesForAllFliters,
};
   return (
     <userContext.Provider value={checkedValue}>
       {children}
     </userContext.Provider>
   );
}

export const useHome = () =>{
    return useContext(userContext);
}
