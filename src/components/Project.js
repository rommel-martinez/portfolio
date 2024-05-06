import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Project = ({items}) => {

const handleView = (loc) => {
    window.open(loc, '_blank');
};

  return (
    <>
        <Card elevation={2} style={{margin:'10px'}}>
            <CardMedia
                component="img"
                height="140"
                image={items.image}
                title="green iguana"
                sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    {items.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {items.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={() => handleView(items.link)}>View</Button>
                {/* <Button size="small">GitHub</Button> */}
            </CardActions>
        </Card>
    </>
  )
}

export default Project
