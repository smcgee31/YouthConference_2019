import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'

export default () => {
  return (
    <Card style={ { padding: 12, margin: 6 } }>
      <Typography variant="h4">Trip Info</Typography>
      <CardContent style={ { marginLeft: 12 } }>
        <p>We will be going to the Rockin’ R Ranch in Antimony, Utah!</p>
        <p>We will meet at the Stake Center at 7am sharp on Thursday the 6th of June! The buses will be leaving at 7:15 approx.</p>
        <p>We will have a small breakfast and get on the buses. All youth will need to ride the buses up. There will need to be 1 leader per ward on the buses. If your son/daughter wants to bring snacks on the bus, make sure that they know that their garbage needs to be carried off the bus with them in a garbage sack (not on the floor). We will make sure a leader on the bus has garbage bags.</p>
        <p>Once we arrive, we will check in. The rooms will be assigned before we arrive at the Ranch. There will be an orientation soon after we arrive.</p>
        <p>Then the activities begin....Horseback riding, great meals, awesome speakers, lawn games, line dancing, river rafting, ward free time, volleyball, a small rodeo, a lip sync battle....the list goes on!</p>
        <p>After our time at the Rockin’ R Ranch, we will be returning home on Saturday the 8th to the Stake Center by 3:30.</p>
      </CardContent>
    </Card>
  )
}
