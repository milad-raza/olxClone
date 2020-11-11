import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Categories from './components/Categories';
import Ad from './components/Ad';
import Footer from './components/Footer';
import Post from './components/Post';
import Login from './components/Login';
import Attributes from './components/Attributes';
import Main from './components/Main';
import FooterTop from './components/FooterTop'
import ProductClick from './components/ProductClick'
import './App.css';

class App extends React.Component{
  render(){
    return (
      
      <div>
        <Router>
          <Switch>
            <Route path="/product">
              <Navbar />
              <Categories />
              <ProductClick />
              <Footer />
            </Route>
            
            <Route path="/post/attributes">
             <Attributes />
            </Route>

            <Route path="/post">
             <Post />
            </Route>

            <Route path="/login">
             <Login />
            </Route>

            <Route path="/">
              <Navbar />
              <Categories />
              <Ad />
              <Main />
              <FooterTop />
              <Footer />
            </Route>

          </Switch>
        </Router>
        </div>
    )
  }
}

export default App;
