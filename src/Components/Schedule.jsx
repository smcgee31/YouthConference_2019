import React from 'react'
import { Grid, Card, Typography, CardContent } from '@material-ui/core'

export default () => {
  return (
    <Grid item xs={ 12 } sm={ 6 } style={ { padding: 6 } }>
      <Card style={ { padding: 12 } }>
        <Typography variant="h4">Daily Readiness</Typography>
        <CardContent style={ { marginLeft: 12 } }>
          <br />
          <Typography variant="h6">Thursday</Typography>
          <p>Nice modest casual clothes, jeans/capris. "EFY Standards for dress"</p>
          <p>We will be tubing down the river...</p>
          <p>Swimsuit Standards:</p>
          <ul>
            <li>YW - no bikinis, one-piece or tankini approved by your leader(s)</li>
            <li>YM - regular swim shorts</li>
          </ul>
          <Typography variant="h6">Friday</Typography>
          <p>Youth Conference T-shirt, nice modest casual clothes, jeans/capris. "EFY Standards for dress"</p>
          <p>Lip Sync Battle! nice modest casual clothes, jeans/capris. "EFY Standards for dress"</p>
          <Typography variant="h6">Saturday</Typography>
          <p>Nice modest casual clothes, jeans/capris. "EFY Standards for dress"</p>
        </CardContent>
      </Card>
    </Grid>
  )
}