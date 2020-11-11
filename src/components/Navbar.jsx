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
          <img src = {logo}  alt = "olx logo" />
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


const mapStateToProps = (state) => ({
  login: state.Login.login,
  post: state.Post.post,
  categories: state.Categories.values
})


export default connect(mapStateToProps,null)(Navbar);
