import React from "react";                          //imports react
import {MenuItems} from "./MenuItems";              //imports menu items for use in this file.

class Navbar extends React.Component {
    
    render() {                                     
        return(                                     //the "h1" labels the project; "MenuItems.map" creates the Navbar using the Menu Items.
            <nav className="NavbarItems">
                <h1 className="navbar-logo">React Navbar and Login</h1> 
                <div className="menu-icon">
                    
                </div>
                <ul className="nav-menu">
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navbar