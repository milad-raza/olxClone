import React, {useState} from 'react';
import SecondNavbar from './SecondNavbar';
import SecondFooter from './SecondFooter'; 
import SwitchLabels from './Switch';
import firebase from '../config/firebase'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdCameraAlt } from 'react-icons/md';
import avatar from '../images/avatar.png';
import { useHistory } from 'react-router-dom';
import './Attributes.css';

function Attributes(props) {

    const history = useHistory();

    const [state, setState] = useState({
        title: "",
        description: "",
        price: "",
        name: "",
        // type: "",
        condition: "",
        state: "",
        city: "",
        showphonenumber: true,
        url: "",
        phone: "",
        date: new Date().getDate(),
        month: new Date().getMonth(),
        year: new Date().getFullYear(),
    })

    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value,
        })
    }

    const handleUpload = (event) => {
        if (event.target.files[0]) {
            var image = event.target.files[0]
            setState({
                ...state,
                image: event.target.files[0]
            });

            var imageName = image.name
            firebase.storage().ref(`images/${imageName}`).put(image).then(function (result) {
                console.log('done')
            })
            .catch(function (error){
                console.log(error)
            })

            firebase.storage().ref(`images/${imageName}`).put(image).on("state_changed", function (snapshot){ console.log("uploadding..")},
                
                
                error => {
                    console.log(error)
                },function(){
            
                firebase.storage().ref(`images/${imageName}`).put(image).snapshot.ref.getDownloadURL().then(function (downloadURL) {
                    console.log(downloadURL)
                    setState({
                        ...state,
                        url : downloadURL
                    })
                    var camera = document.getElementById("camera")
                    camera.classList.add("cameranow")

                    var cameratext = document.getElementById("cameratext")
                    cameratext.classList.add("cameranow")

                })}
                    
                
            
            )
        }
    }
   
    const post = () => {
        console.log(state)
        if (state.title && state.type && state.description && state.condition
            && state.price && state.phone && state.name && state.city
            && state.state && state.url !== "") {
            let key = firebase.database().ref("OlxAds").push().key
            firebase.database().ref('OlxAds').child(key).set(state)
            history.push('/');
        }
        
    }

    return (
        <div>
            <SecondNavbar />
            <h3 className="post">POST YOUR AD</h3>
            <div className="container">
            <div className = "form-border" >
            <form action="" className = "form">
                
                <div className = "margin1">
                    <h4><b>SELECTED CATEGORY</b></h4>
                    <br />
                    <p className = "selected">{`${props.parent} / ${props.selected}`}</p>
                    <Link to = '/post' className = "change">Change</Link>
                    <br />
                </div>      
                <hr className = "heading" />

                <div className = "margin2">
                    <h4><b>INCLUDE SOME DETAILS</b></h4>
                    <label>Condition *</label><br />

                    <div className="radio-toolbar">
                      <input type="radio" id="radioNew" name="condition" value="New" onChange={handleChange}/>
                      <label htmlFor = "radioNew">New</label>
                  
                      <input type="radio" id="radioUsed" name="condition" value="Used" onChange={handleChange}/>
                      <label htmlFor = "radioUsed">Used</label>    
                    </div>
                            
                    <br />
                    <br />
                    
                    {/* <label>Type *</label><br />
                    
                    <div className="radio-toolbar">
                      <input type="radio" id="radioMobile" name="type" value="Mobile"  onChange={handleChange} />
                      <label htmlFor="radioMobile">Mobile</label>
                  
                      <input type="radio" id="radioTablets" name="type" value="Tablets"  onChange={handleChange}/>
                      <label htmlFor="radioTablets">Tablets</label>    
                    </div>       
                

                    <br />
                    <br /> */}
                            
                    <label>Ad title *</label>
                    <br />
                    <input type="text" className="input" maxLength="70" name="title" value={state.title} onChange={handleChange} />
                    <br />
                    <small className = "selected">Mention the key features of your item (e.g brand,Model,age,type)</small>
                    <br />
                    <br />
                    <br />

                    <label>Description *</label>
                    <br />
                    <textarea className="input2" maxLength="4096" name="description" value={state.description} onChange={handleChange} />
                    <br />
                    <small className = "selected">Include condition, features and reason for selling</small>
                </div>      
                <hr className = "heading" />
                <div className = "margin2">
                    <h4><b>SET A PRICE</b></h4>
                    <label><small className = "selected">Price *</small></label>
                    <br />
                    <input type = "text" className = "inputrs" value ="Rs" disabled />
                    <input type = "number" onInput ={(e) => e.target.value = e.target.value.slice(0,20)} className = "inputd"  name="price" value={state.price} onChange={handleChange} />
                </div>
                <hr className = "heading" />
                <div className  = "margin2">
                    <h4><b>UPLOAD AT LEAST 1 PHOTO</b></h4>
        
                    <label htmlFor = "files" className = "cameras">      
                    <MdCameraAlt className = "camera" id = "camera" />
                    {state.url ? <img src={state.url} alt="" width = "80px" height = "80px" /> : ""} 
                    <p id = "cameratext">Add Photo</p>
                    <input type = "file" id = "files" className = "hide" onChange={(e)=>handleUpload(e)} />
                    </label>
                     
                    <br />
                    <small className = "red">This field is mandatory</small>
                </div>
                
                <hr className = "heading" />
                
                <div className = "margin2">
                    <h4><b>CONFIRM YOUR LOCATION</b></h4><br />
                    <label>State *</label>
                    <br />
                    <input type="text" className="input" maxLength="20" name="state" value={state.state} onChange={handleChange} />
                    <br />
                    <br />
                    <label>City *</label>
                    <br />
                    <input type = "text" className = "input" maxLength= "20" name="city" value={state.city} onChange={handleChange} />
                    <br />
                    <br />
                    <small className = "red">This field is mandatory</small>
                </div>
                <hr className = "heading" />
                <div className = "margin2">
                    <h4><b>REVIEW YOUR DETAILS</b></h4>
                    <img src={avatar} width = "100px" height ="100px" alt = "avatar"/><br />
                    <h6>Name</h6>
                    <input type ="text" className = "inputname" defaultValue = {props.user.displayName} maxLength = "30" name="name"  onChange={handleChange} />
                    <br />
                    <br />
                    
                    <h6>Your phone number </h6>
                    <input type = "number" className = "inputname inputphone"  onInput ={(e) => e.target.value = e.target.value.slice(0,11)} name="phone" value={state.phone} onChange={handleChange}/>
                    <br /><br />
                    <h6>Show my number on my ads <SwitchLabels /></h6>
                     
                </div>
                <hr className="heading" />
                        
                <div className  ="margin2" >
                <button type = "button"  {...state.title ? "" : ""} className = "postbtn" onClick = {() => post()} ><b>Post now</b></button>    
                </div>
                        
            </form>
            </div>
            </div>
            <br />
            <SecondFooter />
           
        </div>    
    )
}




const mapStateToProps = (state) => ({
    selected: state.Post.post,
    user: state.User.user,
    parent: state.Parent.parent
})
   
export default connect(mapStateToProps,null)( Attributes);