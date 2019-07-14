import React from 'react'
import { Card, CardContent } from '@material-ui/core'

export default () => {
  return (
    <Card style={ { padding: 12, margin: 6 } }>
      <CardContent style={ { color: 'red', textAlign: 'center', fontSize: 24 } }>
        Please leave your electronics at home... Any problems please talk to your leaders.
      </CardContent>
    </Card>
  )
}
