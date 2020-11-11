import React from 'react';
import { Link } from 'react-router-dom';
import appStore from '../images/appstore.png';
import playStore from '../images/playstore.png';
import facebook from '../images/facebook.PNG'
import twitter from '../images/twitter.PNG'
import youtube from '../images/youtube.PNG'
import instagram from '../images/instagram.PNG'
import './Footer.css';

class Footer extends React.Component{
    render() {
        const url1 = "https://www.facebook.com/olxpakistan"
        const url2 = "https://twitter.com/OLX_Pakistan"
        const url3 = "https://www.youtube.com/channel/UCARDDjJnW7IRBpo_AP7WTHQ?sub_confirmation=1"
        const url4 = "https://www.instagram.com/olx.pakistan/"
        const url5 = "https://apps.apple.com/app/olx-pakistan/id1119081665"
        const url6 = "https://play.google.com/store/apps/details?id=com.olx.pk"
        const url7 = "https://www.olx.in/"
        const url8 = "https://www.olx.co.za/"
        const url9 = "https://www.olx.co.id/"
        return (
            <div>
            <div className="background">
                <div>
                <h6 className="headings"><strong>POPULAR CATEGORIES</strong></h6>
                <Link className = "footer-link" to = "/Cars">Cars</Link>
                <Link className = "footer-link" to = "/Flats For Rent">Flats For Rent</Link>
                <Link className = "footer-link" to = "/Jobs">Jobs</Link>
                <Link className = "footer-link" to = "/Mobile Phones">Mobile Phones</Link>
                </div>
                    
                <div>
                <h6 className = "headings"><strong>TRENDING SEARCHES</strong></h6>
                <Link className = "footer-link" to = "/Bikes">Bikes</Link>
                <Link className = "footer-link" to = "/Watches">Watches</Link>
                <Link className = "footer-link" to = "/Books">Books</Link>
                <Link className = "footer-link" to = "/Dogs">Dogs</Link>
                </div>

                <div>
                <h6 className = "headings"><strong>ABOUT US</strong></h6>
                <Link className = "footer-link" to = "/About OLX Group">About OLX Group</Link>
                <Link className = "footer-link" to = "/OLX Blog">OLX Blog</Link>
                <Link className = "footer-link" to = "/Contact Us">Contact Us</Link>
                <Link className = "footer-link" to = "/OLX For Bussiness">OLX For Bussiness</Link>
                </div>

                <div>
                <h6 className = "headings"><strong>OLX</strong></h6>
                <Link className = "footer-link" to = "/Help">Help</Link>
                <Link className = "footer-link" to = "/Sitemap">Sitemap</Link>
                <Link className = "footer-link" to = "/Legal &amp; Privacy Information">Legal &amp; Privacy Information</Link>
                </div>

                <div>
                <h6 className = "headings"><strong>FOLLOW US</strong></h6>
                
                <span>
                    <a href = {url1} target = "_blank" rel="noopener noreferrer">
                        <img src={facebook} alt="facebook" />
                    </a>
                    <a href = {url2} target = "_blank" rel="noopener noreferrer">
                        <img src={twitter} alt="twitter"/>
                    </a>
                    <a href = {url3} target = "_blank" rel="noopener noreferrer">
                        <img src={youtube} alt="youtube"/>
                    </a>
                    <a href = {url4} target = "_blank" rel="noopener noreferrer">
                        <img src={instagram} alt="instagram"/>
                    </a> 
                </span>
                <br />
                <br />
                <div className = "footer-link">
                <a href = {url5} target = "_blank" rel="noopener noreferrer">
                    <img src={appStore} width = "90px" height = "30px" alt="Download From App Store" className = "appstore" />
                </a>
                <a href = {url6} target = "_blank" rel="noopener noreferrer" className = "left">
                    <img src={playStore} width = "90px" height = "30px" alt="Download From Play Store" className = "playstore" />
                </a> 
                </div>          
                </div>
                    
            </div>
                <div className="end">
                    <div className="other-countries">
                        <strong>Other Countries</strong>
                        &nbsp; &nbsp;
                        <span>
                            <a href = {url7} target = "_blank" rel="noopener noreferrer" className = "country">
                                India
                            </a>
                            <span> - </span>
                            <a href = {url8} target = "_blank" rel="noopener noreferrer" className = "country">
                                South Africa
                            </a>
                            <span> - </span>
                            <a href = {url9} target = "_blank" rel="noopener noreferrer" className = "country">
                                Indonesia
                            </a>
                        </span>
                    </div>
                    <div className="olx">
                        <strong className="bottm">Free Classifieds in Pakistan .</strong>
                        &nbsp; &nbsp;
                        <span className="bottm">&#169; 2006-2020 OLX</span>
                    </div>
                </div>
            </div>




        )
    }
} 

export default Footer;