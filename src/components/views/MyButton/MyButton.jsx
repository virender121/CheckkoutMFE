import React from 'react'
import PropTypes from 'prop-types'

import classes from './MyButton.module.scss';



/**
 * Impliments MyButton component
 * 
 * @method
 * @param {object} props - React properties passed from higher-level
 * @returns MyButton
 */

export const MyButton = (props: MyButtonProps) => {
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
 * Default values for MyButton
 * 
 * @type {object}
 * @property {string} example='MyButton 
 */

export const defaultProps: MyButtonProps = {
    example:'MyButton'
};

MyButton.propTypes = propTypes;
MyButton.defaultProps = defaultProps;

export default MyButton;