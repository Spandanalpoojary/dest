import React,{useEffect} from 'react'
import {useState} from 'react'
import axios from 'axios'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './Reciepe.css'

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Reciepe() {
    const [data,setData]= useState([])
    useEffect(()=>{
    axios.get("https://dummyjson.com/recipes")
    .then((res)=>{
        console.log(res.data.recipes,11111)
        setData(res.data.recipes)
    })
    .catch((err)=>{
        console.log(err,22222)
    })
},[])
console.log(data,3333)
const [expanded, setExpanded] = React.useState(false);

const handleExpandClick = () => {
  setExpanded(!expanded);
};

    return (
    <div sx={{display:'grid',display:'flex', gridTemplateColumns:'requirePropFactory(3,1fr)'}}><h1>Recipe</h1>
     {data.map((item)=>{
            return(
    <Card sx={{ maxWidth: 345,padding:'20px',borderRadius:'10px'}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={item.name}
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image={item.image}
        alt="dish image"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method: {item.ingredients}</Typography>
          <Typography paragraph>
          Instructions:{item.instructions}
          </Typography>
          <Typography paragraph>
           PrepTimeMinutes:{item.prepTimeMinutes}
          </Typography>
          <Typography paragraph>
            CookTimeMinutes:{item.cookTimeMinutes}
          </Typography>
          <Typography>
            Servings:{item.servings}
          </Typography>
          <Typography>
            Difficulty:{item.difficulty}
          </Typography>
          <Typography>
            Cuisine:{item.cuisine}
          </Typography>
          <Typography>
          CaloriesPerServing:{item.caloriesPerServing}
          </Typography>
          <Typography>
          Tags:{item.tags} 
          </Typography>
          <Typography>
          UserId:{item.userId} 
          </Typography>
          <Typography>
          Rating:{item.rating} 
          </Typography>
          <Typography>
          ReviewCount:{item.reviewCount} 
          </Typography>
          <Typography>
          MealType:{item.mealType} 
          </Typography>
          
        </CardContent>
      </Collapse>
    </Card>
    
)})}


</div>
  )
}
