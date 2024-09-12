import * as React from 'react';
import { useContext } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import {useHome} from "./mainContext"
export default function SliderSizes() {
  const {sliderValue,sliderTrack} = useHome();
  return (
    <Box sx={{ width: 300  }}>
      <label className='mt-4' > Number of friends</label>
      <Slider 
      value={sliderValue}
      onChange={sliderTrack}
      valueLabelDisplay="auto"
      max={200} />
    </Box>
  );
}
