import React from 'react';
import Style from './navbar.module.css'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/actions/auth-actions';



const Navbar = () => {
    const isConnected = useSelector(state => state.identification.isConnected)
    const dispatch = useDispatch()

    const onLogOut = () => {
        dispatch(logout())
    }
    return (
        <div>
            <nav className={Style.NavBar}>
                <ul>
                    <NavLink to="/geants">
                        <li>Les géants</li>
                    </NavLink>
                    <NavLink to='/collaborative'>
                        <li>Galerie Collaborative</li>
                    </NavLink>
                    <NavLink to="/">
                        
                        <img src="http://image.noelshack.com/fichiers/2022/38/2/1663671987-logo-minisite.png" alt="" />
                        
                    </NavLink>

                    {!isConnected && <NavLink to="/register">
                        <li>Inscription</li>
                    </NavLink>}
                    {!isConnected && <NavLink to="/login">
                        <li>Connexion</li>
                    </NavLink>}
                    {isConnected&&<li onClick={onLogOut}>Déconnexion</li>}
                    

                </ul>
            </nav>
        </div>
    );
};

export default Navbar;