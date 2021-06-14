import React from 'react';
import { Grid, Card, Typography, CardContent } from '@material-ui/core';

export default () => {
  return (
    <Grid item xs={12} sm={6} style={{ padding: 6 }}>
      <Card style={{ padding: 12 }}>
        <Typography variant="h4">Schedule</Typography>
        <p>
          The Young Men have many activities and many times of personal free time. These activities
          and times could change. Fishing and swimming will be available. If you'd like to fish
          you'll need to bring your license, pole, bait, and tackle.
        </p>
        <CardContent style={{ marginLeft: 12 }}>
          <br />

          <div style={{ marginBottom: 48 }}>
            <Typography variant="h6">
              <strong>Wednesday</strong>
            </Typography>
            <Typography>
              5:00 PM: Meet at the Stake Center (leave as soon as everyone is ready!)
            </Typography>
            <Typography>Dinner: Provided by the Stake. Devotional to follow dinner</Typography>
            <Typography>8:00 PM: Fireside by President Gilbert</Typography>
          </div>

          <div style={{ marginBottom: 48 }}>
            <Typography variant="h6">
              <strong>Thursday</strong>
            </Typography>
            <Typography>Morning Devotional: Provided XXXX</Typography>
            <Typography>Breakfast: Provided by each Ward</Typography>
            <Typography>Activity: XXXXX</Typography>
            <Typography>Free time: XXXX</Typography>
            <Typography>Lunch: Provided by each Ward</Typography>
            <Typography>Activity: XXXXX</Typography>
            <Typography>Free time: XXXX</Typography>
            <Typography>Dinner: Provided by each Ward. Devotional to follow dinner</Typography>
          </div>

          <div style={{ marginBottom: 48 }}>
            <Typography variant="h6">
              <strong>Friday</strong>
            </Typography>
            <Typography>Morning Devotional: Provided XXXX</Typography>
            <Typography>Breakfast: Provided by each Ward</Typography>
            <Typography>Activity: XXXXX</Typography>
            <Typography>Free time: XXXX</Typography>
            <Typography>Lunch: Provided by each Ward</Typography>
            <Typography>Activity: XXXXX</Typography>
            <Typography>Free time: XXXX</Typography>
            <Typography>Dinner: Provided by each Ward. Devotional to follow dinner</Typography>
          </div>

          <div style={{ marginBottom: 48 }}>
            <Typography variant="h6">
              <strong>Saturday</strong>
            </Typography>
            <Typography>Morning Devotional: Provided XXXX</Typography>
            <Typography>Breakfast: Provided by the Stake</Typography>
            <Typography>Break Camp and head home</Typography>
          </div>
        </CardContent>
      </Card>
    </Grid>
  );
};
