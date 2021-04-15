import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Avatar } from '@material-ui/core';
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" href="/">
          Recat User
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>.css

        </button>
        

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">
                Services
              </NavLink>
            </li>
          
           
          </ul>
        </div>






        <div className='header__center'>
                
                <div className='header__icons'>
                    
                    <Link to='/'>
                        <i className='fa fa-home'></i>{' '}
                    </Link>{' '}
                    <Link to='#search'>
                        <i className='fa fa-search'></i>{' '}
                    </Link>{' '}
                    <Link to='#notifications'>
                        <i className='fa fa-bell'></i>{' '}
                    </Link>
                    <Link>
                        <i onClick={""} class='fa fa-power-off' alt='Sign Out'></i>
                    </Link>
                    <Avatar className='header__avatar' src={""}></Avatar>
                </div>
            </div>










            <Link className="btn btn-outline-light" to="/users/admin">Sign In</Link>
        <Link className="btn btn-outline-light" to="/users/add">Add User</Link>
        
     
      </div>
    </nav>
  );
};

export default Navbar;
