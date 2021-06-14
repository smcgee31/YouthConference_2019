import React from 'react';
import { Grid, Card, Typography, CardContent } from '@material-ui/core';

export default () => {
  return (
    <Grid item xs={12} sm={6} style={{ padding: 6 }}>
      <Card style={{ padding: 12 }}>
        <Typography variant="h4">Schedule</Typography>
        <p>
          Fishing and swimming will be available on Friday. Anyone who would like to fish will need
          to bring their fishing license, pole, bait, and tackle.
        </p>
        <CardContent style={{ marginLeft: 12 }}>
          <div style={{ marginBottom: 48 }}>
            <Typography variant="h6">
              <strong>Wednesday</strong>
            </Typography>
            <Typography>
              5:00 PM: Meet at the Stake Center (leave as soon as everyone is ready!)
            </Typography>
            <Typography>7:00 PM: Dinner provided by the Stake.</Typography>
            <Typography>8:00 PM: Fireside by President Gilbert</Typography>
          </div>

          <div style={{ marginBottom: 48 }}>
            <Typography variant="h6">
              <strong>Thursday</strong>
            </Typography>
            <Typography>9:00 AM: Hike Left Fork Days Canyon Trail</Typography>
            <Typography>10:00 AM: Scavenger hunt during hike (details to be provided)</Typography>
            <Typography>12:00 PM: Lunch</Typography>
            <Typography>
              1:00 PM: Scripture Study class / Spiritual and Business life balance
            </Typography>
            <Typography>2:00 PM: Down time for games at camp</Typography>
            <Typography>5:00 PM: TikTok Skit Challenge (Theme: New Perspectives)</Typography>
            <Typography>6:00 PM: Dinner</Typography>
            <Typography>7:00 PM: Capture the Flag at Jolley's Park</Typography>
            <Typography>8:00 PM: Fireside by Bro. Chamberlin</Typography>
          </div>

          <div style={{ marginBottom: 48 }}>
            <Typography variant="h6">
              <strong>Friday</strong>
            </Typography>
            <Typography>9:00 AM: Fishing & Swimming at Bartholomew park</Typography>
            <Typography>12:00 PM: Lunch</Typography>
            <Typography>
              1:00 PM: Service Project (Cleaning up the Police Shooting Range in Hobble Creek
              Canyon)
            </Typography>
            <Typography>
              2:00 PM: Games at Jolly's Park (soccer, frisbee golf, ultimate frisbee)
            </Typography>
            <Typography>3:00 PM: Water fight</Typography>
            <Typography>5:00 PM: President Nelson Challenge</Typography>
            <Typography>6:00 PM: Dinner</Typography>
            <Typography>8:00 PM: Testimony Meeting</Typography>
          </div>

          <div style={{ marginBottom: 48 }}>
            <Typography variant="h6">
              <strong>Saturday</strong>
            </Typography>
            <Typography>9:00 AM: Breakfast provided by the Stake</Typography>
            <Typography>10:00 AM: Break Camp (cleaner than we found it)</Typography>
            <Typography>12:00 PM: Head home</Typography>
          </div>
        </CardContent>
      </Card>
    </Grid>
  );
};
