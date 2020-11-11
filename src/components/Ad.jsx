import React from 'react';
import './Ad.css';
import ad1 from '../images/ad1.png'
import ad2 from '../images/ad2.png'

class Ad extends React.Component{
    
    render() {

        const url = "https://www.vivo.com/pk/activity/v20series"
        
        return (
            <div className= "both-ads">
                <img src={ad1} alt="ad1" className="ad1" />
                
                <center>

                    <a href = {url} target = "_blank" rel="noopener noreferrer" >
                        <img src={ad2} alt="ad2" className = "ad2" />
                    </a>
                </center>
                
            </div>
        )
    }
}

export default Ad;
