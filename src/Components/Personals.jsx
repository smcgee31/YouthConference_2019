import React from 'react'
import { Grid, Card, Typography, CardContent } from '@material-ui/core'

export default () => {
  return (
    <Grid item xs={ 12 } sm={ 6 } style={ { padding: 6 } }>
      <Card style={ { padding: 12 } }>
        <Typography variant="h4">Items you need</Typography>
        <CardContent>
          <ul style={ { listStyle: 'none' } }>
            <li><input type="checkbox" />Large towel, hand towel, and washcloth</li>
            <li><input type="checkbox" />PJs</li>
            <li><input type="checkbox" />Underwear</li>
            <li><input type="checkbox" />Comfy shoes</li>
            <li><input type="checkbox" />At least 2 pair of socks</li>
            <li><input type="checkbox" />Athletic shoes</li>
            <li><input type="checkbox" />Soap, deodorant, shampoo</li>
            <li><input type="checkbox" />Lotion, toothbrush, toothpaste</li>
            <li><input type="checkbox" />Comb/brush, and items for "getting ready"</li>
            <li><input type="checkbox" />Medications (your leader needs to know about this!)</li>
            <li><input type="checkbox" />Scriptures</li>
            <li><input type="checkbox" />Journal</li>
            <li><input type="checkbox" />Pen</li>
            <li><input type="checkbox" />Water bottle to fill</li>
            <li><input type="checkbox" />Camera if desired</li>
            <li><input type="checkbox" />Clothes (review EFY standards)</li>
          </ul>
        </CardContent>
      </Card>
    </Grid>
  )
}