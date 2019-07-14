import React from 'react'
import { Grid, Card, Typography, CardContent } from '@material-ui/core'

export default () => {
  return (
    <Grid item xs={ 12 } sm={ 6 } style={ { padding: 6 } }>
      <Card style={ { padding: 12 } }>
        <Typography variant="h4">Meal Schedule</Typography>
        <p>The boys planned the following meals. If anyone has any dietary concerns please let us know so we can be aware and plan ahead.</p>
        <CardContent style={ { marginLeft: 12 } }>
          <br />

          <Typography variant="h6">Thursday</Typography>
          <p><strong>Breakfast:</strong> Eggs, bacon, and pancakes</p>
          <p><strong>Lunch:</strong> Ham sandwiches and chips</p>
          <p><strong>Dinner:</strong> Hobo Dinner (tin-foil dinner) consists of a hamburger patty, potatoes, onions, peppers, and carrots (or whatever you put in your own) cooked in a aluminum foil pouch directly on the coals.</p>

          <Typography variant="h6">Friday</Typography>
          <p><strong>Breakfast:</strong> Eggs, bacon, and pancakes</p>
          <p><strong>Lunch:</strong> Hot dogs and chips</p>
          <p><strong>Dinner:</strong> Dutch Oven BBQ Chicken</p>

        </CardContent>
      </Card>
    </Grid>
  )
}