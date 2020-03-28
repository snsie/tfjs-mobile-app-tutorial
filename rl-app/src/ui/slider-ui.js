import React from 'react';
import Slider from '@material-ui/core/Slider';
import styled from 'styled-components';
import Portal from '@material-ui/core/Portal';
import Box from '@material-ui/core/Box';

const StyledSlider = styled(Slider)`
  & .MuiSlider-thumb {
    width: 15px;
    height: 15px;
  }
  & .MuiSlider-rail {
    color: black;
    width: 5px;
  }
`;

const SliderUi = () => {
  return (
    <StyledSlider
      track={false}
      orientation='vertical'
      valueLabelDisplay='auto'
      defaultValue={20}
      justifyContent='center'
    />
  );
};
export default SliderUi;
