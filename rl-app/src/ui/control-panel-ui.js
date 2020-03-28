import React from 'react';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';
import ButtonGroupUi from './button-group-ui';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import SliderUi from './slider-ui';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Portal from '@material-ui/core/Portal';

const ControlPanelBackgroundPaper = styled(Paper)`
  background-color: #180033;
  position: absolute;
  height: 35%;
  width: 35%;
  top: 1%;
  left: 1%;
  opacity: 0.9;
`;
const StyledGrid = styled(Grid)`
  flex-grow: 1;
  align-items: center;
`;
const StyledPaper = styled(Paper)`
  background-color: green;
  position: relative;
  justify-content: space-evenly;
  padding: 0;
  height: 1fr;
`;

const ControlPanelUi = () => {
  return (
    <ControlPanelBackgroundPaper elevation={3} variant='outlined'>
      <StyledGrid container spacing={0}>
        <StyledGrid item xs={12}>
          <Box>xs=12</Box>
        </StyledGrid>
        <StyledGrid item xs={12}>
          <StyledPaper>xs=12</StyledPaper>
        </StyledGrid>
        <StyledGrid item xs={12}>
          <StyledPaper>xs=12</StyledPaper>
        </StyledGrid>
      </StyledGrid>
    </ControlPanelBackgroundPaper>
  );
};
export default ControlPanelUi;
