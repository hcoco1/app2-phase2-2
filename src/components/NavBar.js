import React from "react";
import { Link } from 'react-router-dom';



const NavBar = () => {
    return (

        <div className="navbar navbar-expand-lg">
        <ul className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/addNewProp">Add a New Property</Link>
            
         </ul>
      </div>















    )
}

export default NavBar;