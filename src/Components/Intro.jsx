import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

export default () => {
  return (
    <Card style={{ padding: 12, margin: 6 }}>
      <Typography variant="h4">General Camp Info</Typography>
      <CardContent style={{ marginLeft: 12 }}>
        <Typography style={{ marginBottom: 16 }}>
          This camp will be for all young men in the Stake. All deacons, teachers and priests are
          invited to participate. The location details are found at the{' '}
          <a href="#location">bottom</a> of the page.
        </Typography>
        <Typography style={{ marginBottom: 16 }}>
          We will be meeting at the Stake Center at 5:00 PM on Wednesday the 23rd of June and
          returning Saturday the 26th around noon.
        </Typography>
        <Typography style={{ marginBottom: 16 }}>
          The Stake will provide dinner on Wednesday evening and Saturday morning. All other meals
          will be assigned to a Ward or two to feed the whole camp, this way as a Ward you will only
          have to cook ONE meal and can use the Stake cooking stoves to do so.
        </Typography>
        <Typography style={{ marginBottom: 16 }}>
          <strong>!! FIRE UPDATE !!</strong> The camp has approved fire rings so we can have
          campfires but it will be only with adult leader discretion and supervision.
        </Typography>
        <Typography style={{ marginBottom: 16 }}>
          <strong>!! WATER UPDATE !!</strong> Bring water containers and some water but there are
          water spigots at the campsite for us to use.
        </Typography>
        <Typography style={{ marginBottom: 16 }}>
          The daily schedule is below and will give you an idea of how each day will likely proceed.
          As directed by the Church, this camp was planned by our young men and we as the Stake
          Young Men's Presidency are highly impressed with their desire for good wholesome
          activities including their desire for several spiritual activities.
        </Typography>
        <Typography style={{ marginBottom: 16 }}>
          The current head count for camp is Youth: 42, Adults: 20, Total: 62 brave souls!
        </Typography>
        <Typography style={{ marginBottom: -20 }}>* check back often for updates</Typography>
      </CardContent>
    </Card>
  );
};
