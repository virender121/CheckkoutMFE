import React from 'react'
import PropTypes from 'prop-types'
import { Text } from "../Text/Text";
import classes from './CheckoutPage.module.css';
import { TextField } from '@mui/material';
import OrderCard from '../OrderCard/OrderCard';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';




/**
 * Impliments CheckoutPage component
 * 
 * @method
 * @param {object} props - React properties passed from higher-level
 * @returns CheckoutPage
 */

export const CheckoutPage = (props) => {
    const {checkoutName,Payment} =props
    return (
      <>
        <div className={classes.container}>

             {/* <Text variant="heading-sm">{checkoutName}</Text> */}
             <div className={classes.left}>
             <TextField
              margin="normal"
              required
              fullWidth
              name="First name"
              label="First name"
            //   type="password"
            //   id="password"
            //   autoComplete="current-password"
            />
              <TextField
              margin="normal"
              required
              fullWidth
            //   name="Last name"
              label="Address 1"
           
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="State/Country"
          
            />
             <TextField
              margin="normal"
              required
              fullWidth
            //   name="Last name"
              label="Postcode/Zip"
            //   type="password"
            //   id="password"
            //   autoComplete="current-password"
            />
             <TextField
              margin="normal"
              required
              fullWidth
            //   name="Last name"
              label="Email"
           
            />
            </div>
            <div className={classes.right}>
             <TextField
              margin="normal"
              required
              fullWidth
            //   name="Last name"
              label="Last name"
            />
             <TextField
              margin="normal"
              required
              fullWidth
            //   name="Last name"
              label="Address line2"

            />
             <TextField
              margin="normal"
              required
              fullWidth
            //   name="Last name"
              label="City/Town"
            // 
            />
             <TextField
              margin="normal"
              required
              fullWidth
        
              label="Phone number"
            />
             <TextField
              margin="normal"
              required
              fullWidth
            //   name="Last name"
              label="Company"
            
            />
             </div>
             <div className={classes.word}>
               <TextField
              margin="normal"
              required
              fullWidth
            //   name="Last name"
              label="Additional information"
           
            />
            </div>
           
           <OrderCard/>
           
        </div>
        <div>
        <div className={classes.payment}><Text variant="heading-sm">{Payment}</Text>
        <FormControl>
      {/* <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel> */}
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        // value={value}
        // onChange={handleChange}
      >
        <FormControlLabel  value="female" control={<Radio />} label="Direct bank transfer" />
        <FormControlLabel value="male" control={<Radio />} label="Cash on delivery" />
      </RadioGroup>
    </FormControl>
    
    <span>
     <img  className={classes.pay} src='https://w7.pngwing.com/pngs/782/863/png-transparent-paypal-logo-paypal-logo-paypal-blue-text-trademark-thumbnail.png'/>
     <img className={classes.visa} src='https://assets.stickpng.com/images/58482363cef1014c0b5e49c1.png'/>
     <img className={classes.logo}  src='https://e7.pngegg.com/pngimages/169/96/png-clipart-logo-mastercard-graphics-font-visa-mastercard-text-label.png'/>
     <img className={classes.zapper}  src='https://www.logolynx.com/images/logolynx/c5/c57071df5dbbbbd9ad4129db3a5cff32.png'/>
     </span>
    </div>
        </div>
        </>
    )
}

/**
 * Property type definations
 * 
 * @type {object}
 * @property {string} example - shows example - delete for in use
 */

export const propTypes = {
    checkoutName: PropTypes.string,
    Payment: PropTypes.string
};

/**
 * Default values for CheckoutPage
 * 
 * @type {object}
 * @property {string} example='CheckoutPage 
 */

export const defaultProps = {
    checkoutName:'Checkout',
    Payment: 'Payment'
};

CheckoutPage.propTypes = propTypes;
CheckoutPage.defaultProps = defaultProps;

export default CheckoutPage;