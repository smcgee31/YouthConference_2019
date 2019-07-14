import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core';

export default () => {
  return (
    <AppBar position="static">
      <Toolbar style={ { justifyContent: "center" } }>
        <Typography variant="h3" color="inherit" >
          Camp Helaman - 2019 Stake YM Campout
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
