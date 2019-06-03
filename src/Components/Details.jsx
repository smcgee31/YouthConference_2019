import React from 'react'
import { Grid } from '@material-ui/core';

import Personals from "../Components/Personals";
import Schedule from "../Components/Schedule";

export default () => {
  return (
    <Grid container>
      <Personals />
      <Schedule />
    </Grid>
  )
}
