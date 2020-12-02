import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () =>{
  return (
    
    <nav className="navbar fixed-top navbar-expand navbar-dark bg-dark ">
      <a className="navbar-brand" href="#">
        <img src="https://image.flaticon.com/icons/svg/992/992646.svg  " width="30" height="30" className="d-inline-block align-top" />
        
            Papeleria Mont-RA 
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      

          
          
          <a className="nav-item nav-link active" href="#"> 
            <img src="https://image.flaticon.com/icons/svg/1543/1543917.svg" width="20" height="20" className="d-inline-block align-top" />  
            <NavLink to="/Compras" className="main-nav" activateClassName="min-nav-activate">
              Productos
            </NavLink>
          </a>

          <a className="nav-item nav-link active" href="#"> 
            <img src="https://image.flaticon.com/icons/png/512/252/252025.png" width="20" height="20" className="d-inline-block align-top" />  
            <NavLink to="/UbicacionApp" className="main-nav" activateClassName="min-nav-activate">
              Ubicación
            </NavLink>
          </a>

          

       
    
  </nav>
    );
}

export default Navbar;