import React from 'react';
import './Categories.css';
import AllCategories from './AllCategories'
import {Link} from 'react-router-dom'

class Categories extends React.Component{
    render(){
        return(
            <div className = "second-nav">
               <AllCategories />
              <div className = "categories-nav">
                    <Link to = "/mobile phones" className = "links">Mobile Phones</Link>
                    <Link to = "/cars" className = "links">Cars</Link>
                    <Link to = "/motorcycles" className = "links">Motorcycles</Link>
                    <Link to = "/houses" className = "links">Houses</Link>
                    <Link to = "/tv-audio-video" className = "links">Tv-Audio-Video</Link>
                    <Link to = "/tablets" className = "links">Tablets</Link>
                    <Link to = "/lands &amp; plots" className = "links">Lands &amp; Plots</Link>
              </div>          
            </div>
            
        )
    }
}

export default Categories;