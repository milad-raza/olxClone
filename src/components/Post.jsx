import React from 'react';
import SecondNavbar from './SecondNavbar';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import SecondFooter from './SecondFooter'; 
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import postClick from '../store/Actions/PostAction';
import postParent from '../store/Actions/PostParentAction';
import './Post.css';



function Sell(props) {

 


  function post(item) {

    

    return (

      <div className="dropright">
         <button type="button" className="drops" data-toggle="dropdown" aria-haspopup="false" aria-expanded="false" onClick =  {(event)=> props.postParent(event.target.innerText)}>
           <span>
             <span className = "ml-2 mr-3">
              {item.icon}
             </span >
             {item.name }
           </span>
           <ArrowBackIos className = "expand" fontSize = "small" />
        </button>

        <div className="dropdown-menu drops2">
          {item.categories.map((cat,index) =>
            <Link to = "/post/attributes" key = {index}  onClick = {(event)=> props.postClick(event.target.innerText)} className='drops2inside'>
              {cat.category}  
            </Link>
          )}
        </div>
 
        
        
      </div>
    )
  }
    return (
    <div>
        <SecondNavbar />
            <div>
                <h3 className="post">POST YOUR AD</h3>
                <div className = "flex-container">
                   <div className = "boundary">
                        <h6 className = "choose">CHOOSE A CATEGORY</h6>


                      {props.categories.map(post)}                

                      <br />
                   </div>
                </div>
            </div>
        <br />    
        <SecondFooter /> 
        
      </div>
      
    )
}

const mapStateToProps = (state) => ({
  post: state.Post.post,
  Parent: state.Parent.parent,
  categories: state.Categories.values
})

const mapDispatchToProp = (dispatch) => ({
  postParent: (data)=> dispatch(postParent(data)),
  postClick: (data)=> dispatch(postClick(data))
})

export default connect(mapStateToProps,mapDispatchToProp)(Sell);


