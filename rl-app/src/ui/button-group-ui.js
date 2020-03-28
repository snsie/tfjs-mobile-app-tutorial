import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
const ButtonGroupUi = () => {
  return (
    <ButtonGroup color='secondary' aria-label='outlined secondary button group'>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
  );
};

export default ButtonGroupUi;
