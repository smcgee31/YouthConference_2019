import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

export default () => {
  return (
    <Card style={{ padding: 12, margin: 6 }}>
      <Typography variant="h4">Camp Info</Typography>
      <CardContent style={{ marginLeft: 12 }}>
        <p>
          This camp will be for all young men in the Stake. All deacons, teachers and priests are
          invited to participate. The location details found <a href="#location">here</a>.
        </p>
        <p>
          We will be leaving at 5:00 PM on Wednesday the XXXX of July and returning Saturday the
          XXXX.
        </p>
        <p>
          On Wednesday we will arrive and set up camp, and the Stake will provide dinner that night.
        </p>
        <p>
          Thursday and Friday each Ward will be cooking their own meals but the Stake will be in
          charge of all activities. Each Ward will also provide or arrange for all the camping gear
          requirements of their Ward.
        </p>
        <p>
          Saturday, the Stake will provide the breakfast, then we will break camp and return home.
          We should arrive back early afternoon.
        </p>
        <p>If each Ward could bring as much water as possible that would be a great help!</p>
      </CardContent>
    </Card>
  );
};
