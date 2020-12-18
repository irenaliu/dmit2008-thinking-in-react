import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem } from 'mdbreact';

import Home from '../pages/Home';
import SearchResults from '../pages/SearchResults';
import Categories from '../pages/Categories';
import Contact from '../pages/Contact';
import About from '../pages/About';
import Recipes from '../pages/Recipes';
import SearchBar from './SearchBar';

const NavBar = () => {
  return (
    <Router>
      {/* Navigation */}
      <MDBNavbar color='deep-orange lighten-4' expand='md'>
        <MDBNavbarBrand>
          <Link to='/'>Open The Pantry</Link>
        </MDBNavbarBrand>
        <MDBNavbarNav right>
          <MDBNavItem className='link' active>
            <Link to='/categories'>Categories</Link>
          </MDBNavItem>
          <MDBNavItem className='link'>
            <Link to='/about'>About</Link>
          </MDBNavItem>
          <MDBNavItem className='link'>
            <Link to='/recipes'>Recipes</Link>
          </MDBNavItem>
          <MDBNavItem className='link'>
            <Link to='/contact'>Contact</Link>
          </MDBNavItem>
          <MDBNavItem>
            <SearchBar />
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBNavbar>

      {/* Routing for Pages */}

      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/categories'>
          <Categories />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/recipes'>
          <Recipes />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path='/search'>
          <SearchResults />
        </Route>
      </Switch>
    </Router>
  );
};

export default NavBar;
