import React, { Fragment } from 'react'
import {List, ListItem,ListItemText, Grid, Paper, Typography} from '@material-ui/core';
const Index = ({exercises,category, onSelect, exercise:{id,description=" Please Select an Exercise from the List on the Left",title="Welcome!"}}) => {

  const styles={
    Paper:{
      padding:20,
      marginTop:10,
      marginBottom:10,
      height:'73vh',
      overflowY:'auto'
    }
  }

  return (
    <Grid container style={{height:'80vh'}} >
      <Grid item xs={3}>
        <Paper style={styles.Paper}>
            {exercises.map(([exercise, exercises])=>
                !category || category === exercise
                ?( 
                    <Fragment key={exercise}>
                        <Typography variant='headline' style={{textTransform:'capitalize'}}>
                         {exercise }
                     </Typography>
                     <List component="ul">
                         {exercises.map(({title, id})=>
                         <ListItem key={id} button onClick={()=>onSelect(id)}>
                             <ListItemText primary={title} />
                         </ListItem>
                         )}
                     </List>
                    </Fragment>
                     )
                :null
               
            )}
        </Paper>
      </Grid>
      <Grid item xs>
        <Paper style={styles.Paper}>
            <Typography variant="display1">
                {title}
            </Typography>
            <Typography variant='subheading'>
               {description}
            </Typography>
        </Paper>
      </Grid>
    </Grid>
   
  )
}

export default Index
