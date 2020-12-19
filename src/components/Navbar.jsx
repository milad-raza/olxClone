import React from 'react';
import { connect } from 'react-redux';
import './Navbar.css';
import logo from '../images/logo.png';
import Search from '@material-ui/icons/Search';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Add from '@material-ui/icons/Add';
import Login from './Login';
import { Link } from 'react-router-dom';
import {RiChat1Line} from 'react-icons/ri';
import Notification from './Notification'
import User from './User'

import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {GrLocation} from 'react-icons/gr'

class Navbar extends React.Component{
  
  constructor(props){
    super(props)
    this.state = {
      expand: false,
    }
  }

  change(){
      this.setState({
      expand: !this.state.expand,
  
    })
  }

  changeagain(){
      this.setState({
      expand: false,
  
    })
  }



  render(){
    const { expand } = this.state;

    return(

      <div>
      <nav className="navbar-background">
        <Link to = "/"  className = "logo">
          <img src = {logo}  alt = "olx logo" className = "logo1" />
        </Link>
        <div className={`${expand ? "first-wrap-focus" : "first-wrap"}`} >
          
          <Search fontSize="large" />
          <span onClick = {(e) => this.change(e)} onBlur = {(e) => this.changeagain(e)}>
            <input type = "text" className = "first-input" defaultValue = "Pakistan"/> 
            <ExpandMore fontSize = "large" className =  {`${expand ? "expand" : ""}`} />
          </span>
        
        </div>

        <input type = "text" className = "second-input" placeholder = "Find Cars Mobile Phones And More..." /> 
        <div className = "second-wrap"><Search fontSize = "large" /></div>

        {this.props.login ?
        
        (<div className="iflogin" >
            <RiChat1Line className = "icons" />
            <Notification/>
            <User />
        </div>)
        : <Login />
        }
        
  
        
        
        <Link className="second-link" to={(this.props.login) ? "/post" : "/"} >
          <span><Add /><b>SELL</b></span>
        </Link> 
        
      </nav>
      </div>

        
       
      
    
    )
  }
}




const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    boxShadow: '0 4px 2px -2px rgba(0,0,0,.1)',
    marginBottom: '50px' ,
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(0),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className = "drawer">
      <div className={classes.toolbar} />
      <Divider />
      
        <div className="loginl" >
            <Login />
        </div>
      
      <Divider />
      
        <div className="iflogin" >
            <RiChat1Line className = "icons" />
            <Notification/>
            <User />
        </div>
      
      
      <Divider />
      <br />
      <Link className="butsell" to={"/post"} >
          <span><Add /><b>SELL</b></span>
      </Link>
         
      
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className = "drawer">
    <div className={classes.root} >
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className = "drawerback">
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
              <MenuIcon style={{ color: "#002f34" }} />
            </IconButton>
            <Link to = "/"  className = "logo">
              <img src={logo} alt="olx-logo" width = "30px" height = "20px" />
           </Link>
            <Typography variant="p" noWrap style={{ color: "#002f34", fontWeight: "bold", marginLeft: "auto"}} >
              Pakistan &nbsp;
              <GrLocation />
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      
      </div>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export {ResponsiveDrawer};



const mapStateToProps = (state) => ({
  login: state.Login.login,
  post: state.Post.post,
  categories: state.Categories.values
})


export default connect(mapStateToProps,null)(Navbar);
