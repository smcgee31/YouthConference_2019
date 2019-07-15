import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'

export default () => {
  return (
    <Card style={ { padding: 12, margin: 6 } }>
      <Typography variant="h4">Location</Typography>
      <CardContent>
        <p id="location">This campout will be held at <a href="https://www.google.com/maps/place/Camp+Eagle+Mountain/@40.305697,-112.1158509,17z/data=!3m1!4b1!4m5!3m4!1s0x874d636c4c35ef01:0x487de3df7a98064f!8m2!3d40.305697!4d-112.1136622" target="_blank" rel="noopener noreferrer">Camp Eagle Mountain</a>.</p>
        <p>Location directions: Traveling south on UT 73, after the town of Cedar Fort, there's a turn off heading west at the Eagle Mountain City limit sign. Look for the white "CAMP EAGLE MOUNTAIN" sign. This road leads directly to Camp Eagle Mountain. If you pass the suburb of White Hills, you have gone too far.</p>
        <p>Alternatively you can paste this location code into Google Maps: 8V3F+HF</p>
      </CardContent>
    </Card>
  )
}
