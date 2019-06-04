import React, { useState, useEffect } from 'react'
import { Grid, Card, Typography, CardContent, Checkbox, List, ListItem, ListItemText } from '@material-ui/core'

const itemsList = [
  'Large towel',
  'Hand towel',
  'Washcloth',
  'PJs',
  'Underwear',
  'Comfy shoes',
  'Socks (2 pair min)',
  'Athletic shoes',
  'Soap',
  'Deodorant',
  'Shampoo',
  'Toothbrush / toothpaste',
  'Comb / brush',
  'Lotion',
  'Sunscreen',
  'Items to "get ready"',
  'Medications (your leader needs to know)',
  'Scriptures',
  'Journal',
  'Pen',
  'Water Bottle (to fill)',
  'Camera (if desired)',
  'Clothes (EFY standards)',
]

export default () => {
  const [ checked, setChecked ] = useState([ 0 ]);

  useEffect(() => {
    return () => {
      window.localStorage.setItem('checked', checked)
    };
  }, [ checked ])

  const handleToggle = value => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [ ...checked ];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <Grid item xs={ 12 } sm={ 6 } style={ { padding: 6 } }>
      <Card style={ { padding: 12 } }>
        <Typography variant="h4">Items you need</Typography>
        <CardContent>
          <List style={ { listStyle: 'none' } }>
            { itemsList.map((item) => {
              const labelId = `checkbox-list-label-${ item }`;

              return (
                <ListItem key={ item } dense button onClick={ handleToggle(item) }>
                  <Checkbox
                    edge="start"
                    color="primary"
                    checked={ checked.indexOf(item) !== -1 }
                    tabIndex={ -1 }
                    disableRipple
                    inputProps={ { 'aria-labelledby': labelId } }
                  />
                  <ListItemText id={ labelId } primary={ `${ item }` } />
                </ListItem>
              )
            }) }
          </List>
        </CardContent>
      </Card>
    </Grid>
  )
}