import React from 'react';
import {Link} from 'react-router-dom';
import olx from '../images/logo.png';
import ArrowBack from '@material-ui/icons/ArrowBack';


function SecondNavbar() {
    return (
        <div>
            <nav className="navbar" style = {{backgroundColor : "#f7f8f8", boxShadow: "0 4px 2px -2px rgba(0,0,0,.1)"}} >
                <span className="navbar-brand" >
                    <Link to = '/'>
                        <ArrowBack style={{ color: "#002f34"}} />
                    </Link>
                    <span style = {{padding: 16}}></span>
                    <Link to='/'>
                        <img src={olx} alt="Logo" width="50px" />
                    </Link>    
                </span>
                
            </nav>
        </div>
    )
}

export default SecondNavbar;
