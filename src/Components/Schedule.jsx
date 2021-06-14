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

          <Typography variant="h6">Wednesday</Typography>
          <p>
            <strong>Leave from the Stake Center:</strong> approx. 6pm
          </p>
          <p>
            <strong>Dinner:</strong> Provided by the Stake. Devotional to follow dinner
          </p>

          <div style={{ marginBottom: 48 }}>
            <Typography variant="h6">Thursday</Typography>
            <p>
              <strong>Morning Devotional:</strong> Provided XXXX
            </p>
            <p>
              <strong>Breakfast:</strong> Provided by each Ward
            </p>
            <p>
              <strong>Activity:</strong> XXXXX
            </p>
            <p>
              <strong>Free time:</strong> XXXX
            </p>
            <p>
              <strong>Lunch:</strong> Provided by each Ward
            </p>
            <p>
              <strong>Activity:</strong> XXXXX
            </p>
            <p>
              <strong>Free time:</strong> XXXX
            </p>
            <p>
              <strong>Dinner:</strong> Provided by each Ward. Devotional to follow dinner
            </p>
          </div>

          <div style={{ marginBottom: 48 }}>
            <Typography variant="h6">Friday</Typography>
            <p>
              <strong>Morning Devotional:</strong> Provided XXXX
            </p>
            <p>
              <strong>Breakfast:</strong> Provided by each Ward
            </p>
            <p>
              <strong>Activity:</strong> XXXXX
            </p>
            <p>
              <strong>Free time:</strong> XXXX
            </p>
            <p>
              <strong>Lunch:</strong> Provided by each Ward
            </p>
            <p>
              <strong>Activity:</strong> XXXXX
            </p>
            <p>
              <strong>Free time:</strong> XXXX
            </p>
            <p>
              <strong>Dinner:</strong> Provided by each Ward. Devotional to follow dinner
            </p>
          </div>

          <div style={{ marginBottom: 48 }}>
            <Typography variant="h6">Saturday</Typography>
            <p>
              <strong>Morning Devotional:</strong> Provided XXXX
            </p>
            <p>
              <strong>Breakfast:</strong> Provided by the Stake
            </p>
            <p>
              <strong>Break Camp and head home</strong>
            </p>
          </div>
        </CardContent>
      </Card>
    </Grid>
  );
};
