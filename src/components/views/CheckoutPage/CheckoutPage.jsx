import React from 'react'
import PropTypes from 'prop-types'
import { Text } from "../Text/Text";
import classes from './CheckoutPage.module.css';
import { Checkbox, TextField } from '@mui/material';
import OrderCard from '../OrderCard/OrderCard';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';



/**
 * Impliments CheckoutPage component
 * 
 * @method
 * @param {object} props - React properties passed from higher-level
 * @returns CheckoutPage
 */

export const CheckoutPage = (props) => {
    
    return (
      <>
        <div className={classes.container}>
          <Breadcrumb/>
             <div calssName={classes.body}>
             {/* <Text variant="heading-sm">{checkoutName}</Text> */}
             <div className={classes.header}>
              <h2 className={classes.Textheading}>Checkout</h2>
              <h6 className={classes.Textheading2}>There are 3 products in your cart</h6>
             </div>
             <div className={classes.rectangle1}>
                
                <span className={classes.group1}>< PersonOutlineOutlinedIcon className={classes.user}/><h6 className={classes.text}>Already have an account? <span style={{color:'#3BB77E'}}>Click here to login</span></h6></span>
             </div>
             <div className={classes.Coupon}>
             <div className={classes.rectangle2}/>
             <div className={classes.group2}><SellOutlinedIcon className={classes.tag}/><h6 className={classes.card1}>Coupon Code</h6><div className={classes.rectangle3}><span className={classes.text10}>Apply Coupon</span></div></div>
             </div>
             <div className={classes.bill}><Text variant='heading-md'>Billing Details</Text></div>
             
             <div className={classes.left}>
             <TextField
              margin="normal"
              required
              fullWidth
              name="First name"
              label="First name"
            
            />
              <TextField
              margin="normal"
              required
              fullWidth
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
            
            />
             <TextField
              margin="normal"
              required
              fullWidth
            //   name="Last name"
              label="Email"
           
            />
            
            <input
              margin="normal"
              required
              fullWidth
            //   name="Last name"
              placeholder="            Additional information"
              className={classes.word}
            />
              <div className={classes.acount}>
              <FormControlLabel
              control={<Checkbox value="create" color="primary" />}
              label="Create an account?"
            />
            
             <FormControlLabel
              control={<Checkbox value="create" color="primary" />}
              label="Ship to a different address?"
            />
            </div>
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
           
          <div className={classes.card}><OrderCard/></div> 
           
        </div>
        <div className={classes.payid}>
        <div className={classes.payment}><h4 className={classes.payhead}>Payment</h4>
        <FormControl>
    <div  className={classes.radio}>

      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
    
      >
        <FormControlLabel  className={classes.bank} value='bank' control={<Radio />} label="Direct bank transfer" />
        <FormControlLabel className ={classes.cash} value='cash' control={<Radio />} label="Cash on delivery" />
      </RadioGroup>
      </div>
    </FormControl>
    <div className={classes.paymentlogo}>
    <span className={classes.log}>
     <img  className={classes.pay} src='https://w7.pngwing.com/pngs/782/863/png-transparent-paypal-logo-paypal-logo-paypal-blue-text-trademark-thumbnail.png'/>
     <img className={classes.visa} src='https://assets.stickpng.com/images/58482363cef1014c0b5e49c1.png'/>
     <img className={classes.logo}  src='https://e7.pngegg.com/pngimages/169/96/png-clipart-logo-mastercard-graphics-font-visa-mastercard-text-label.png'/>
     <img className={classes.zapper}  src='https://www.logolynx.com/images/logolynx/c5/c57071df5dbbbbd9ad4129db3a5cff32.png'/>
     </span>
    </div>
    <div calssName={classes.place} style={{marginTop:'5rem'}}><div className={classes.add}>Place an Order<LogoutOutlinedIcon className={classes.icon}/></div></div>
    
  
            </div>
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
   
};

/**
 * Default values for CheckoutPage
 * 
 * @type {object}
 * @property {string} example='CheckoutPage 
 */

export const defaultProps = {

};

CheckoutPage.propTypes = propTypes;
CheckoutPage.defaultProps = defaultProps;

export default CheckoutPage;