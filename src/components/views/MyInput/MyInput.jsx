import React from 'react'
import PropTypes from 'prop-types'

import classes from './MyInput.module.scss';



/**
 * Impliments MyInput component
 * 
 * @method
 * @param {object} props - React properties passed from higher-level
 * @returns MyInput
 */

export const MyInput = ({placeholder,className}) => {
   
    return (
        <div className={classes.container}>
            <input placeholder={placeholder} className={className}/>
           
        </div>
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
 * Default values for MyInput
 * 
 * @type {object}
 * @property {string} example='MyInput 
 */

export const defaultProps = {
    example:'Your email address'
};

MyInput.propTypes = propTypes;
MyInput.defaultProps = defaultProps;

export default MyInput;