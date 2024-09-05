import * as React from 'react';
import { useContext } from 'react';
import Context from './Context'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useState } from 'react';

export default function SliderSizes() {
  const {sliderValue,sliderTrack} = useContext(Context);
  return (
    <Box sx={{ width: 300 }}>
 
      <Slider 
      value={sliderValue}
      onChange={sliderTrack}
      valueLabelDisplay="auto"
      max={200} />
    </Box>
  );
}
