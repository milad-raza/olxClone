import React from 'react';
import './FooterTop.css';
import foot from '../images/foot.PNG';
import appStore from '../images/appstore.png';
import playStore from '../images/playstore.png';

function FooterTop() {

    const appstorelink = "https://apps.apple.com/app/olx-pakistan/id1119081665"
    const playstorelink = "https://play.google.com/store/apps/details?id=com.olx.pk"

    return (
        <div className = 'bgall'>
            <img src={foot} alt="olx-app" className = "imageoff" />
            <span className = "diso">
                <b className = "sbo">Get Your App Today</b>
            <a href = {appstorelink} target = "_blank" rel="noopener noreferrer" >
                <img src={appStore} width = "100px" height = "35px" alt="Download From App Store" className="ply" />
            </a>
            <a href = {playstorelink} target = "_blank" rel="noopener noreferrer"  >
                <img src={playStore} width = "100px" height = "35px" alt="Download From Play Store" className="aps"  />
            </a>
            </span>
             
        </div>
    )
}

export default FooterTop;
