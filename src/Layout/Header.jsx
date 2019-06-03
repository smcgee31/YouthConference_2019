import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core';

export default () => {
  return (
    <AppBar position="static">
      <Toolbar style={ { justifyContent: "center" } }>
        <Typography variant="h3" color="inherit" >
          2019 Pleasant Grove Youth Conference
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
