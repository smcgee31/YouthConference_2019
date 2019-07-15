import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'

export default () => {
  return (
    <Card style={ { padding: 12, margin: 6 } }>
      <Typography variant="h4">Campout Info</Typography>
      <CardContent style={ { marginLeft: 12 } }>
        <p>Camp Helaman will be for all young men in the Stake and all deacons, teachers and priests are invited to participate.  This 3-day camp out will replace the Stake Scout Camp for 2019. The location details found <a href="#location">here</a>.</p>
        <p>We will be leaving at 5:00 PM on Wednesday the 17th of July and returning Saturday the 20th.</p>
        <p>On Wednesday we will arrive and set up camp, and the Stake will provide dinner that night.</p>
        <p>Thursday and Friday we will be cooking all our own meals but the Stake will be in charge of all activities. For the campsite the ward has all the cooking stoves, pots and pans, tents, and mess kits</p>
        <p>Saturday, the Stake will provide the breakfast, then we will break camp and return home. We should arrive back around noon.</p>
        <p>Some of the activities may include Archery, Pioneering course or competition, Fire building skills, Wilderness survival classes (and have the boys build a shelter to sleep in one night), First Aid, Hiking, Knots, and fun team-building activities</p>
        <p>Please leave your electronics at home... Any problems please talk to your leaders.</p>
      </CardContent>
    </Card>
  )
}
