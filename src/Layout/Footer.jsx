import React from 'react'
import { Card, CardContent } from '@material-ui/core'

export default () => {
  return (
    <Card style={ { padding: 12, margin: 6 } }>
      <CardContent>
        <p>This campout will be held at Camp Eagle Mountain.</p>
        <p>Location directions: Traveling south on UT 73, after the town of Cedar Fort, there's a turn off heading west at the Eagle Mountain City limit sign. Look for the white "CAMP EAGLE MOUNTAIN" sign. This road leads directly to Camp Eagle Mountain. If you pass the suburb of White Hills, you have gone too far.</p>
        <p>Alternatively you can paste this location code into Google Maps: 8V3F+HF</p>
      </CardContent>
    </Card>
  )
}
