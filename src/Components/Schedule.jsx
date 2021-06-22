import React from 'react';
import {
  Grid,
  Card,
  Typography,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from '@material-ui/core';

export default () => {
  const createData = (time, desc) => {
    return { time, desc };
  };

  const wed = [
    createData('5:PM', 'Meet at the Stake Center (leave as soon as everyone is ready!)'),
    createData('7:PM', 'Dinner provided by the Stake'),
    createData('meal:', 'hot dogs/brats, potato salad, chips, smores'),
    createData('8:PM', 'Fireside by President Gilbert'),
  ];

  const thu = [
    createData('8:AM', 'Breakfast by 6th & 8th Wards'),
    createData('meal:', 'pancakes, scrambled eggs, hashbrowns'),
    createData('9:AM', 'Hike Left Fork Days Canyon Trail'),
    createData('10:AM', ' Scavenger hunt during hike (details to be provided)'),
    createData('12:PM', 'Lunch by 4th Ward'),
    createData('meal:', 'sandwiches and chips'),
    createData('1:PM', 'Scripture Study class / Spiritual and Business life balance'),
    createData('2:PM', 'Down time for games at camp'),
    createData('5:PM', 'TikTok Skit Challenge (Theme: New Perspectives)'),
    createData('6:PM', 'Dinner by 9th Ward'),
    createData('meal:', 'tinfoil dinners'),
    createData('7:PM', "Capture the Flag at Jolley's Park"),
    createData('8:PM', 'Fireside by Bro. Chamberlin'),
  ];

  const fri = [
    createData('8:AM', 'Breakfast by 3rd Ward'),
    createData('meal:', 'breakfast burritos'),
    createData('9:AM', 'Fishing & Swimming at Bartholomew park'),
    createData('12:PM', 'Lunch by 10th Ward'),
    createData('meal:', 'campfire nachos'),
    createData(
      '1:PM',
      'Service Project (Cleaning up the Police Shooting Range in Hobble Creek Canyon)'
    ),
    createData('2:PM', "Games at Jolly's Park (soccer, frisbee golf, ultimate frisbee)"),
    createData('5:PM', 'President Nelson Challenge'),
    createData('6:PM', 'Dinner by 1st Ward'),
    createData('meal:', 'hamburgers'),
    createData('8:PM', 'Testimony Meeting'),
  ];

  const sat = [
    createData('9:AM', 'Breakfast provided by the Stake'),
    createData('meal:', 'muffins, granola bars, juice, fruit'),
    createData('10:AM', 'Break Camp (cleaner than we found it)'),
    createData('12:PM', 'Head home'),
  ];

  return (
    <Grid item xs={12} sm={6} style={{ padding: 6 }}>
      <Card style={{ padding: 12 }}>
        <Typography variant="h4">Schedule</Typography>
        <p>
          Fishing and swimming will be available on Friday. Anyone who would like to fish will need
          to bring their fishing license, pole, bait, and tackle.
        </p>
        <p>
          Any of the meals listed below that are being prepared by a Ward are subject to change at
          that Ward's discretion.
        </p>
        <CardContent style={{ marginLeft: 12 }}>
          <div style={{ marginBottom: 48 }}>
            <Typography variant="h6">Wednesday</Typography>
            <ScheduleTable day={wed} />
          </div>

          <div style={{ marginBottom: 48 }}>
            <Typography variant="h6">Thursday</Typography>
            <ScheduleTable day={thu} />
          </div>

          <div style={{ marginBottom: 48 }}>
            <Typography variant="h6">Friday</Typography>
            <ScheduleTable day={fri} />
          </div>

          <div style={{ marginBottom: 48 }}>
            <Typography variant="h6">Saturday</Typography>
            <ScheduleTable day={sat} />
          </div>
        </CardContent>
      </Card>
    </Grid>
  );
};

const ScheduleTable = (props) => {
  return (
    <Table size="small">
      <TableBody>
        {props.day.map((row) => (
          <TableRow key={row.time}>
            <TableCell
              align="right"
              component="th"
              scope="row"
              style={row.time === 'meal:' ? { color: 'brown' } : null}
            >
              {row.time}
            </TableCell>
            <TableCell align="left" style={row.time === 'meal:' ? { color: 'brown' } : null}>
              {row.desc}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
