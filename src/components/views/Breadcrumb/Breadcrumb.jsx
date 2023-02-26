import React from 'react'
import PropTypes from 'prop-types'

import classes from './Breadcrumb.module.css';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';


/**
 * Impliments Breadcrumb component
 * 
 * @method
 * @param {object} props - React properties passed from higher-level
 * @returns Breadcrumb
 */

export const Breadcrumb = (props) => {
    return (
        <div className={classes.container}>
         <div className={classes.frame1}>
            <h2 className={classes.home}>Home</h2>
            <ChevronRightOutlinedIcon className={classes.logo}/>
            <h2 className={classes.shop}>Shop</h2>
            <ChevronRightOutlinedIcon className={classes.logo1}/>
            <h2 className={classes.check}>Checkout </h2>
         </div>
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
 * Default values for Breadcrumb
 * 
 * @type {object}
 * @property {string} example='Breadcrumb 
 */

export const defaultProps = {
    example:'Breadcrumb'
};

Breadcrumb.propTypes = propTypes;
Breadcrumb.defaultProps = defaultProps;

export default Breadcrumb;