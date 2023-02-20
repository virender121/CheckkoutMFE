import React from 'react'
import PropTypes from 'prop-types'

import classes from './Exp.module.scss';



/**
 * Impliments Exp component
 * 
 * @method
 * @param {object} props - React properties passed from higher-level
 * @returns Exp
 */

export const Exp = (props) => {
    return (
        <div className={classes.container}>
            {props.example}
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
 * Default values for Exp
 * 
 * @type {object}
 * @property {string} example='Exp 
 */

export const defaultProps = {
    example:'Exp'
};

Exp.propTypes = propTypes;
Exp.defaultProps = defaultProps;

export default Exp;