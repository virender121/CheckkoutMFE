import React from 'react'
import PropTypes from 'prop-types'

{{#if isCSSNeeded}}
import classes from './{{properCase componentName}}.module.css';
{{/if}}



/**
 * Impliments {{ componentName }} component
 * 
 * @method
 * @param {object} props - React properties passed from higher-level
 * @returns {{properCase componentName}}
 */

export const {{properCase componentName}} = (props) => {
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
 * Default values for {{properCase componentName}}
 * 
 * @type {object}
 * @property {string} example='{{properCase componentName}} 
 */

export const defaultProps = {
    example:'{{properCase componentName}}'
};

{{properCase componentName}}.propTypes = propTypes;
{{properCase componentName}}.defaultProps = defaultProps;

export default {{properCase componentName}};