import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem } from 'mdbreact';

import Home from '../pages/Home';
import SearchResults from '../pages/SearchResults';
import Categories from '../pages/Categories';
import Contact from '../pages/Contact';
import About from '../pages/About';
import Recipe from '../pages/Recipe';

const NavBar = () => {
  return (
    <Router>
      {/* Navigation */}
      <MDBNavbar color='deep-orange lighten-4' expand='md'>
        <MDBNavbarBrand>
          <Link to='/'>Open The Pantry</Link>
        </MDBNavbarBrand>
        <MDBNavbarNav right>
          <MDBNavItem active>
            <Link className='link' to='/categories'>
              Categories
            </Link>
          </MDBNavItem>
          <MDBNavItem>
            <Link className='link' to='/about'>
              About
            </Link>
          </MDBNavItem>
          <MDBNavItem>
            <Link className='link' to='/recipe'>
              Recipe
            </Link>
          </MDBNavItem>
          <MDBNavItem>
            <Link className='link' to='/contact'>
              Contact
            </Link>
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
        <Route path='/recipe'>
          <Recipe />
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
