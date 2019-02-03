import React from 'react'
import { Tabs, Paper } from '@material-ui/core'
import { Tab } from '@material-ui/core'
const Footer =({muscles, onSelect, category}) => {

  const index = category ? muscles.findIndex(muscle=>muscle === category)+1:0;

  const onIndexSelect = (e,index)=>{
    onSelect( index===0 ? '' : muscles[index-1])
  }
  return (
    <Paper>
        <Tabs
          value={index}
          onChange={onIndexSelect}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
        
            <Tab label='All' />

          {muscles.map(muscles=>
              <Tab key={muscles} label={muscles}  />
          )}
          
        </Tabs>
      </Paper>

  )
}

export default Footer