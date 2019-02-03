import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import Create from '../exercises/dialogs/Create'
const Header= props => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography color="inherit" variant="headline" style={{flex:1}}>
          Practice Material UI
        </Typography>
        <Create />
      </Toolbar>
    </AppBar>
  )
}
export default Header
