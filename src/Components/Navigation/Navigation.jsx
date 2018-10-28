import React from 'react';
import { AppBar, Typography, Toolbar, Button } from '@material-ui/core/';

const navigation = () => (
  <div>
    <AppBar position="static">
      <Toolbar>
        <img src="http://www.fluxsuite.com/images/collab-icon.png" style={{ paddingRight: '16px' }} alt="collab-icon" width="40px" height="40px" />
        <Button color="inherit"><Typography variant="h6" color="inherit">Landing Page</Typography></Button>
        <Button color="inherit"><Typography variant="h6" color="inherit">Projects</Typography></Button>
        <Button color="inherit"><Typography variant="h6" color="inherit">About Us</Typography></Button>
        <Button color="inherit"><Typography variant="h6" color="inherit">Voting</Typography></Button>
      </Toolbar>
    </AppBar>
  </div>
);

export default navigation;
