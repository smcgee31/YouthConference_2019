import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

export default () => {
  return (
    <Card style={{ padding: 12, margin: 6 }}>
      <Typography variant="h4">General Camp Info</Typography>
      <CardContent style={{ marginLeft: 12 }}>
        <p>
          This camp will be for all young men in the Stake. All deacons, teachers and priests are
          invited to participate. The location details found <a href="#location">here</a>.
        </p>
        <p>
          We will be meeting at the church at 5:00 PM on Wednesday the 23rd of June and returning
          Saturday the 26th around noon.
        </p>
        <p>
          The Stake will provide dinner on Wednesday evening and Saturday morning. All other meals
          will be by each Ward on their own.
        </p>
        <p>
          The daily schedule is below and will give you an idea of how each day will likely proceed.
          As directed by the Church, this camp was planned by our young men and we as Stake Young
          Men's Presidency are highly impressed with their desire for good wholesome activities
          including their desire for several spiritual activities.
        </p>
        <p>
          Water is an issue this year. There are spigots in the parks but it is preferred that
          campers try to provide their own water. So, if each Ward could bring as much water as
          possible that would be a great help!
        </p>
      </CardContent>
    </Card>
  );
};
