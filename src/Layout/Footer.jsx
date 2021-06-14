import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

export default () => {
  return (
    <Card style={{ padding: 12, margin: 6 }}>
      <Typography variant="h4">Location</Typography>
      <CardContent>
        <p id="location">
          This camp will be held at{' '}
          <a
            href="https://www.google.com/maps/place/Cherry+Campground/@40.1683885,-111.4778003,15z/data=!4m5!3m4!1s0x0:0x6ca7ec35aafd4d7d!8m2!3d40.1683885!4d-111.4778003"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cherry Campground
          </a>
          .
        </p>
        <p>
          Location directions: Traveling south on I-15 towards Springville, get off the freeway on
          Exit 260 which takes you to W 400 S in Springville. Continue east on W 400 S, at the
          traffic circle take the 1st exit onto S Canyon Dr (S Canyon Dr becomes Hobble Creek Rd.)
          You will come to a fork in the road, be sure to stay to the right, this is Right Fork
          Hobble Rd and the campground will be about 1.3 miles up and on your right.
        </p>
        <p>Alternatively you can paste this location code into Google Maps: 5G9C+9V</p>
      </CardContent>
    </Card>
  );
};
