import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

export default () => {
  return (
    <AppBar position="static">
      <Toolbar style={{ justifyContent: 'center' }}>
        <Typography variant="h3" color="inherit" align="center">
          2021 PG West Stake Young Men's Camp
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
