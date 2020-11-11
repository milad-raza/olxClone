import React from 'react';
import './Main.css';
import Product from './Product';
// import check from '../images/1.PNG';
import firebase from '../config/firebase';

class Main extends React.Component {
constructor(props) {  
    super(props);
    this.state = {ads : []}
  }
  
  componentDidMount() {
      firebase.database().ref("OlxAds").on("value", snapshot => {
        let ad = [];
        snapshot.forEach(snap => {   
            ad.push(snap.val());
        });
        this.setState({ ads: ad });
      });   
 }

  render(){
  return (
          <div>
          <div className="row">
          {this.state.ads.map((ads,index) => {
              return (
                  <li key = {index}> 
                  <Product url = {ads.url} price = {ads.price} title = {ads.title} phone = {ads.phone} name = {ads.name} description = {ads.description} condition = {ads.condition} type = {ads.type} date = {ads.date} month = {ads.month} city = {ads.city} state = {ads.state} showphonenumber = {ads.showphonenumber} />
                  </li>      
              );
              })}     
          </div> 

                  {/* <Product description = "dsdsdoijfiaj sdoajo nisadoinsaosn asodoadjad aojsodjojsoa oasdsjoajsfo0a0i0fsi0jdf0fjsa0fjdso0sij0dfsis0aksf0sddajs saodjsodajsdas aosjdoajjadsjdfhfgdhdosdod" city = "karachi" state = "sindh" date = "1" title = "guita hjj jojlk kkj  kihjkjlkjkljhkjhkj khkjnk kknkn khklnkl;hjoihkljkbjj;kr" url = {check} month = "sep" price = '2000' type = 'new' /> */}

          </div>  
            
  );
}
}

export default Main;
