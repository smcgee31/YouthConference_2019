import React from 'react'
import { Grid } from '@material-ui/core';

import Intro from "../Components/Intro";
import Details from "../Components/Details";

export default () => {
  return (
    <React.Fragment>
      <Grid sm={ 12 }>
        <Intro />
      </ Grid>
      <Grid container xs={ 12 }>
        <Details />
      </Grid>
    </React.Fragment>
  )
}
