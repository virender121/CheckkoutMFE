import React from 'react'
import PropTypes from 'prop-types'
import './Navbar.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';



/**
 * Impliments Navbar component
 * 
 * @method
 * @param {object} props - React properties passed from higher-level
 * @returns Navbar
 */

export const Navbar = (props) => {
    return (
        <nav className="app__navbar">
            <div className="app__navbar-logo">
                <img src='' alt="app__logo" />
            </div>
            <ul className="app__navbar-links">
                <li className="p__opensans"><a href="#home">Home</a></li>
                <li className="p__opensans"><a href="#about">About</a></li>
                <li className="p__opensans"><a href="#menu">Menu</a></li>
                <li className="p__opensans"><a href="#awards">Awards</a></li>
                <li className="p__opensans"><a href="#contact">Contact</a></li>
            </ul>
            <div className="app__navbar-login">
                <a href="#login" className="p__opensans">Log In / Registration</a>
                <div />
                <a href="/" className="p__opensans"></a>
            </div>

        </nav>
    )
}

/**
 * Property type definations
 * 
 * @type {object}
 * @property {string} example - shows example - delete for in use
 */

export const propTypes = {
    example: PropTypes.string
};

/**
 * Default values for Navbar
 * 
 * @type {object}
 * @property {string} example='Navbar 
 */

export const defaultProps = {
    example: 'Navbar'
};

Navbar.propTypes = propTypes;
Navbar.defaultProps = defaultProps;

export default Navbar;