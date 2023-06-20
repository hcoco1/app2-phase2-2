import React from "react";
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';




const NavBar = () => {
    return (

        <Nav className="navbar fixed-top bg-body-tertiary" activeKey="/home" sticky="top" >
        <div className="navbar navbar-expand-lg">
        <ul className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/addNewProp">Add a New Property</Link>
            
         </ul>
      </div>

      </Nav>















    )
}

export default NavBar;