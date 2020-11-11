import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Close from '@material-ui/icons/Close';
import Carousel from 'react-material-ui-carousel';
import Button from '@material-ui/core/Button'
import firebase from '../config/firebase'
import fb from '../images/fb.PNG';
import go from '../images/google.PNG';
import one from '../images/1.PNG';
import two from '../images/2.PNG';
import three from '../images/3.PNG';
import './Login.css';
import changeLogin from '../store/Actions/LoginAction'
import addUser from '../store/Actions/UserAction'
// import Spinner from 'react-bootstrap/Spinner'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    width: "40%",
    height: "90%",
    borderRadius: '4px',
    outline: "none",
    textAlign: "center",
  },
}));

function Login(props) {


  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

let items = [
        {
          src: one,
          alt: "one",
        },
        {
          src: two,
          alt: "two",
        },
        {
          src: three,
          alt: "three",
        }
    ]
function Item(props){
    return (
      <img src = {props.item.src} alt = {props.item.alt} className = "model-images" />
    )
  }

const google = () => {
    let provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then(function (result) {
        // let token = result.credential.accessToken;
        let user = result.user;
        console.log(user.displayName)
        props.AddUser(user)
        console.log("user",props.user)
        props.ChangeLogin()

      })
      .catch(function(error) {
        console.log(error.message)
        alert("Login Failed!")
      })
  }

const facebook = () => {
    let provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then(function (result) {
        // let token = result.credential.accessToken;
        let user = result.user;
        console.log(user.displayName)
        props.AddUser(user)
        props.ChangeLogin()
        
      })
      .catch(function(error) {
        console.log(error.message)
        alert("Login Failed!")
      })
  }

  // componentDidMount(){
  //   <Spinner animation="border" role="status" size = "lg">
  //             <span className="sr-only">Loading...</span>
  //   </Spinner>
  // }


  return (
    <div>
      <button type="button" onClick={handleOpen} className = "first-link">
        Login 
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        
        <Fade in={open}>
          <div className={classes.paper}>
            <Close onClick = {handleClose} fontSize = "large" className = "close" />
            <br />
            <br />
            <Carousel autoPlay = {false} animation = "slide" navButtonsAlwaysVisible = {true} >{
                items.map((item, key) => <Item item={item} key = {key} />)
              }
            </Carousel>  
            <br />
            <Button  className = "buttons">Continue with phone</Button>
            <Button onClick = {facebook} className = "buttons"> <img src={fb} alt="facebook"/> Continue with facebook</Button>
            <Button onClick = {google} className = "buttons"> <img src={go} alt="google"/> Continue with google</Button>
            <Button className = "buttons">Continue with email</Button>
            <br />
            <small>We won't share your personal details with anyone</small>

            
            
            
          </div>
        </Fade>
      </Modal>
      {console.log("login",props.login)}
      
    </div>
  );
}

const mapStateToProps = (state) => ({
  login: state.Login.login,
  user: state.User.user
})

const mapDispatchToProp = (dispatch) => ({
  ChangeLogin: () => dispatch(changeLogin()),
  AddUser: (user) => dispatch(addUser(user))
})

export default connect(mapStateToProps,mapDispatchToProp)(Login);