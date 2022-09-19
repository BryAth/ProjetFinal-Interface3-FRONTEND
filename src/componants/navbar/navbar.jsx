import React from 'react';
import Style from './navbar.module.css'
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return (
        <div>
            <nav className={Style.NavBar}>
                <ul>
                    <NavLink to ="/"> 
                <img src="logo-minisite.png" alt="" />
                </NavLink>
                    <NavLink to ="/geants"> 
                    <li>Les géants</li>
                    </NavLink>
                    <NavLink to="/eshop">
                    <li>Eshop</li>
                    </NavLink>

                    <NavLink to='/collaborative'>
                        <li>Galerie Collaborative</li>
                    </NavLink>
                    <NavLink to ="/register"> 
                    <li>Inscription</li>
                    </NavLink>
                    <NavLink to ="/login"> 
                    <li>Connexion</li>
                    </NavLink>
                    
                    <NavLink to ="/contact"> 
                    <li>Contact</li>
                    </NavLink>
                    
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;