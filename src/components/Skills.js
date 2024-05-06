import React from 'react'
import { Card, CardHeader } from '@mui/material'

const Skills = ({items}) => {

  const _styles = {
    fontWeight:'600',
    fontSize:'15px'
  };

  return (
    <>
    <Card elevation={2} style={{margin:'10px'}}>
        <CardHeader
        avatar={ <items.icon /> }
        title={<label style={_styles}>{items.name}</label>}
        subheader={items.compliment}
        />
    </Card>
    </>
  )
}

export default Skills
