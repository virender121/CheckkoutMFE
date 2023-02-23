import React from 'react'
import PropTypes from 'prop-types'

import classes from './Footer.module.css';
import Text from '../Text/Text';
import MyInput from '../MyInput/MyInput';
import MyButton from '../MyButton/MyButton';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import TelegramIcon from '@mui/icons-material/Telegram';
import TimerIcon from '@mui/icons-material/Timer';


/**
 * Impliments Footer component
 * 
 * @method
 * @param {object} props - React properties passed from higher-level
 * @returns Footer
 */

export const Footer = (props) => {
    const {heading,heading1,apple,placeholder,heading2}=props
    return (
        <>
        <div className={classes.container}>
              <div className={classes.left}><Text variant="heading-sm"><h2>{heading1}</h2><br/>
              <h2>{heading}</h2></Text>
           <h4 className={classes.heading2}>{heading2}</h4> 
             
              <MyInput placeholder={placeholder} className={classes.input}/><MyButton className={classes.button}/></div>
              <img className={classes.apple} src={apple}/>
        </div>
            <div className={classes.footer}>
       <div className={classes.bottom}>
        {/* <div className={classes.content}> */}
        <div className={classes.col}>
       <div><h4 className={classes.nest}>Nest</h4>
       <div className={classes.h6}><h6 >Pellentesque posuere orci lobortis</h6></div>
       <div className={classes.h5}><h6><LocationOnIcon className={classes.location}/>Address: 5171 W Campbell Ave undefined <br/>   Kent, Utah 53127 United States</h6></div>
       <h6 >< HeadsetMicIcon className={classes.phone}/>Call Us: (+91) - 540-025-124553 </h6>
       <h6>< TelegramIcon className={classes.mail}/>Email: contact@nestmart.com</h6>
       <h6><TimerIcon className={classes.hour}/>Hours: 10:00 - 18:00, Mon - Sat </h6>
       </div>
       </div>
   
        
       <span className={classes.col2}>
        
       <div><h4 className={classes.company}>Company</h4>
          <div className={classes.frame1}> <h5 className={classes.about}>About Us</h5>
          <h5 className={classes.Del}>Delivery Information</h5>
          <h5 className={classes.policy}>Privacy Policy</h5>
          <h5 className={classes.terms}>Terms & Conditions</h5>
          <h5 className={classes.contact}>Contact Us</h5>
          <h5 className={classes.support}>Support Center</h5>
          <h5 className={classes.carrer}>Careers</h5>
          </div>
      
       </div>
       </span>
       <div className={classes.col3}>
      
       <h4 className={classes.account}>Account</h4>
       <div className={classes.frame3}><h5 className={classes.sign}>Sign In</h5>
       <h5 className={classes.cart}>View Cart</h5>
       <h5 className={classes.list}>My Wishlist</h5>
       <h5 className={classes.order}>Track My Order</h5>
       <h5 className={classes.help}>Help Ticket</h5>
       <h5 className={classes.ship}>Shipping Details</h5>
       <h5 className={classes.pro}>Compare products</h5>
       </div>
       </div>
       <div className={classes.col4}>
       <h4 className={classes.header}>Information</h4>
       <div className={classes.frame4}>
        <h5 className={classes.search}>Search Terms</h5>
        <h5 className={classes.adv}>Advanced Search</h5>
        <h5 className={classes.help}>Help & FAQ's</h5>
        <h5 className={classes.store}>Store Location</h5>
        <h5 className={classes.order}>Orders & Returns</h5>
        <h5 className={classes.order}>Feedback for us</h5>
       </div>
       </div>
       <div className={classes.col5}>
       <h5 className={classes.header}>App & Payment</h5>
       <div className={classes.frame4}>
        <h5 className={classes.search}>Install NetMart App from App Store<br/> or Google Play</h5>
        <span><img className={classes.App} src='https://s3-alpha-sig.figma.com/img/bb57/2577/5e87bd4a8f038d60b283b45a996ad9f1?Expires=1678060800&Signature=B-cjClmyHnO6JE0Fq9x4imD8xjaTUJdLKbRmGjiRZ95ync8vrqag9RUk9JdxJIEfhInE8peZO-qiiLgYbIYixYNeERR2qv4zxioNmxPfyBEKaUroQ1~~~giAbiG5TPYmQk~XjsRZfEDJD-quzDldoVcxqZpY5att26E8~II0HUHQQrUyGZ5UubPzLb-kLutqR2IY42hCWJAxS~YlRYSvzZxhjqrGieF6J65TO9AiXH3K5uBAWSVUIijW-Rw~ue-y8D9NZs1lVgmqzsS5pa-IkEurvDQ1m0jDJmtkxT-5BXPytBoUgHh7yh~maaMe-9SEDUBwPNBLDB9pVZsu7msPBw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'/>
            <img  className={classes.Google} src='https://s3-alpha-sig.figma.com/img/93cb/1ed8/cbfe3b6f0ea61ea97ea9ccb8031df087?Expires=1678060800&Signature=gUl-rS8a9WwzlLKMZMYTw2ntabbtaouALkH5wqeTjRdyGByT8P79wV3KjHb0Cc5NQSf5qexkL3-M0phwTYir8xTBDLOMeHvtG0B71PBmm6WNgsIZ84V5A~RtO2gxFtNop1tXaAl9JpcE-wp-pQdIw6CI3LqamA-TtrTQTGhXrWtz0xO1FtdYImnpM9~kacUS57udf-dqBTW2mVkQ~yIUrKZSIl8Z3fNF6LmFVpwmphl8X3AT1rwohgShfMaaI~yh4Y4aLsTe9H4WA-VlOUpJQt3EmeRt6~juhW255YTJJqjNyV~fROrzHltQOlVRLK-Fxb6Q7CU1aP5LNZ7bm8KM2w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'/></span>
        <h5 className={classes.adv}>Advanced Search</h5>
        </div>
       </div>
       </div>
{/* </div> */}

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
    heading1: PropTypes.string,
    heading: PropTypes.string,
    apple: PropTypes.string
};

/**
 * Default values for Footer
 * 
 * @type {object}
 * @property {string} example='Footer 
 */

export const defaultProps = {
    heading1:'Stay home & get your daily',
    heading:'needs from our shop',
    heading2:`Start You'r Daily Sopping with Nest Mart`,
   placeholder: 'Your email address',
    apple:'https://s3-alpha-sig.figma.com/img/b3e9/c055/893e565efaee5bf2a51d16c2b092f6b4?Expires=1678060800&Signature=KRts4527yrX1zQhZXpRstbi0nmnwGZPRmp6cyAG6MNMINPr4LaCjPO7~MDN89dGEQfKxBzNWXr7U0hI39lX2BW~DVLCU1LPiWzh16m8bqxvYiJk1-BP3iV7~ltQA6nKp7YRJM6-Dj32jZehNSNq3mLXug9qXIPrh~L5NVIIFY1T-PivoqSKFr-KhGiERYv6eA8yJzWWhgNcnNOz2xU2NON9VGQ1hZDZWAmiNNvt4933TnaLM8D1ZuJzqhSOkkOu-Q49TH3~YyNIxz~qkKSx8PerRmAT1FI5U-iHAA83GxESN0NbLiwVaqRqqqS4Bm3P67GNqFNs~fuVbxom4JvHphA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
};

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;