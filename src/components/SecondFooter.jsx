import React from 'react';
import { Link } from 'react-router-dom';

function SecondFooter() {
    return (
        <div>
            <div className="end">
                    <div className="other-countries">
                        
                            <Link to = "/Sitemap" className = "country">
                                <small>Sitemap</small>
                            </Link>
                    </div>
                    <div className="olx">
                        <small>
                            <strong>Free Classifieds in Pakistan .</strong>
                            &nbsp; &nbsp;
                            <span>&#169; 2006-2020 OLX</span>
                        </small>
                    
                    </div>
                </div>
        </div>
    )
}

export default SecondFooter;
