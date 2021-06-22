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
import scheduleDays from '../scheduleDays';

export default () => {
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
            <ScheduleTable day={scheduleDays.wed} />
          </div>

          <div style={{ marginBottom: 48 }}>
            <Typography variant="h6">Thursday</Typography>
            <ScheduleTable day={scheduleDays.thu} />
          </div>

          <div style={{ marginBottom: 48 }}>
            <Typography variant="h6">Friday</Typography>
            <ScheduleTable day={scheduleDays.fri} />
          </div>

          <div style={{ marginBottom: 48 }}>
            <Typography variant="h6">Saturday</Typography>
            <ScheduleTable day={scheduleDays.sat} />
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
