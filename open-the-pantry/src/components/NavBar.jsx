import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem } from 'mdbreact';

import Home from '../pages/Home.jsx';
import SearchResults from '../pages/SearchResults.jsx';
import Categories from '../pages/Categories.jsx';
import Contact from '../pages/Contact.jsx';
import About from '../pages/About.jsx';
import Recipe from '../pages/Recipe.jsx';

const NavBar = () => {
  return (
    <Router>
      {/* Navigation */}
      <MDBNavbar expand='md'>
        <MDBNavbarBrand>
          <Link to='/'>Open The Pantry</Link>
        </MDBNavbarBrand>
        <MDBNavbarNav right>
          <MDBNavItem active>
            <Link className='link' to='/categories'>
              CATEGORIES
            </Link>
          </MDBNavItem>
          <MDBNavItem>
            <Link className='link' to='/about'>
              ABOUT
            </Link>
          </MDBNavItem>
          <MDBNavItem>
            <Link className='link' to='/recipe'>
              RECIPE
            </Link>
          </MDBNavItem>
          <MDBNavItem>
            <Link className='link' to='/contact'>
              CONTACT
            </Link>
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBNavbar>

      {/* Routing for Pages */}
      <div className='container'>
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
            <Recipe />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='/search'>
            <SearchResults />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default NavBar;
