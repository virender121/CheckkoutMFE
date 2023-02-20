import React from 'react'
import PropTypes from 'prop-types'

import classes from './RatingStars.module.css';



/**
 * Impliments RatingStars component
 * 
 * @method
 * @param {object} props - React properties passed from higher-level
 * @returns RatingStars
 */

export const RatingStars = (props) => {
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
 * Default values for RatingStars
 * 
 * @type {object}
 * @property {string} example='RatingStars 
 */

export const defaultProps = {
    example:'RatingStars'
};

RatingStars.propTypes = propTypes;
RatingStars.defaultProps = defaultProps;

export default RatingStars;