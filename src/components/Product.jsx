import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import productClick from '../store/Actions/ProductClickAction';



const useStyles = makeStyles({
  root: {
    width: 240,
    margin: 20,
    border: "1px solid #cbd4d5",
    boxShadow: "none"
  },
});

function ImgMediaCard(props) {

  const history = useHistory();

  const productClick = () => {

    console.log(props.date)
    console.log(props.title)
    // history.push(`/${props.title}`);
    props.ProductClick(props)
    history.push('/product');


}

  const classes = useStyles();
  return (
    <Card className={classes.root} onClick = {()=>productClick()} >
      <CardActionArea>
        <CardMedia
          component="img"
          alt=""
          height="150"
          width="100%"
          resizeMode="contain"
          image={props.url}
          title=""
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h6">
            <b>Rs {props.price}</b>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <span style = {{display: "flex" , justifyContent: "space-between"}}>
              <p >{props.title}</p>
              <small style={{color: "#757575" }} >{props.date}-{props.month}-{props.year}</small>
            </span>
          </Typography>
          
        </CardContent>
      </CardActionArea>
      
    </Card>
  );
}

const mapDispatchToProp = (dispatch) => ({
  ProductClick: (product) => dispatch(productClick(product))
})

export default connect(null,mapDispatchToProp)(ImgMediaCard);

