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
import ScrollToTop from './components/ScrollToTop';
import './App.css';

class App extends React.Component{
  render(){
    return (
      
      <div>
        <Router>
          <ScrollToTop />
          <Switch>
            <Route path="/product">
              <Navbar.Navbar />
              <Navbar.ResponsiveDrawer />
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
              <Navbar.Navbar />
              <Navbar.ResponsiveDrawer />
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
