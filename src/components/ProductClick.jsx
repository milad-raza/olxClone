import React from 'react';
import Carousel from 'react-material-ui-carousel'
import './ProductClick.css';
import { connect } from 'react-redux';
import { FiShare2 } from 'react-icons/fi';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import avatar from '../images/avatar.png';
// import Favorite from '@material-ui/icons/Favorite';
import Phone from '@material-ui/icons/Phone';


function CarouselImages(props)
{
    return (
        <div>
            <img src = {props.image.url} alt = "" width = "100%" height = "100%"/>
        </div>
    )
}

function ProductClick(props) {
    let product = props.product;

    var images = [
        {
            url: product.url
        },
        {
            
        }
    ]

    return (
        <div>
        <div className = "data-div">
            <Carousel autoPlay = {false} navButtonsAlwaysVisible = {true} className = "carousel">
                {images.map((image, i) => <CarouselImages key={i} image={image} /> )}
            </Carousel>
            <span className="left-all">
                <div className="price-title">
                <h2 className = "price-title-h2 changeCo"><b>Rs {product.price}</b>
                    <span>
                        <FiShare2  className = "sharei" />
                        <FavoriteBorder />
                    </span>
                </h2>
                <p className = "price-title-p">{product.title}</p>
                <br />
                <span className = "price-title-span">
                    <small>{product.city},{product.state}</small>
                    <small>{product.month} {product.date}</small>
                </span> 
                </div>    
                <div className="seller-des">
                    <h5 className="changeCo"><b>Seller description</b></h5>
                    <br />
                    <img src={avatar} alt="avatar" width="60px" height="60px" />
                    <span><h6><b>{product.name}</b></h6></span>
                    <button type="button" className="chatbtn" ><b>Chat with seller</b></button>    
                    <br /><br />
                    <center>
                        <span className = "changeCo">
                            <Phone /> {product.showphonenumber?<small>{product.phone}</small>: "" } 
                        </span>    
                    </center>    
                </div>
                <div className="posted-in">
                    <h5 className="changeCo"><b>Posted in</b></h5>
                    <small className = "area">{product.city},{product.state}</small>
                </div>
            </span>
            
            
            
        </div>       
        <div className = "down-div">
            <div className = "dettails">
                <h5 className="changeCo"><b>Details</b></h5>
                <div className = "det">
                <span className = "area">Type</span>
                <span className="area"><b>{product.type}</b></span>
                <span className = "area">Condition</span>
                <span className="area"><b>{product.condition}</b></span>
                 </div>
                {/* <div className = "det">       
                <span className = "area">Type</span>
                <span className="area">{product.type}</span>
                <span className = "area">Condition</span>
                <span className = "area">{product.condition}</span>
                </div> */}
            </div>
        </div>
        <div className = "down-div">
            <div className = "dettails">
                    <h5 className="changeCo"><b>Description</b></h5>
                    <br />
                <p><b>{product.description}</b></p>
            </div>
        </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
  product: state.Product.product
})

export default connect(mapStateToProps,null)(ProductClick);
