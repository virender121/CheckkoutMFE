import React from 'react'
import PropTypes from 'prop-types'

import classes from './OrderCard.module.css';
import Text from '../Text/Text';



/**
 * Impliments OrderCard component
 * 
 * @method
 * @param {object} props - React properties passed from higher-level
 * @returns OrderCard
 */

export const OrderCard = (props) => {
    const {orderName,orangeImage,orangeText,dollorSign,lemonImage,lemonText,dollor,muttonImage,muttonText,dollorText}=props
    return (
        <>
        <div className={classes.container}>
               <Text variant="heading-sm">{orderName}</Text>
               <span><img  className={classes.orange} src ={orangeImage}/><Text  className={classes.text} variant="text-sm">{orangeText}</Text><Text>{dollorSign}</Text></span>
               <span><img  className={classes.lemon} src ={lemonImage}/><Text variant="text-sm">{lemonText}</Text><Text>{dollor}</Text></span>
               <span><img  className={classes.mutton}src ={muttonImage}/><Text variant="text-sm">{muttonText}</Text><Text>{dollorText}</Text></span>
                 
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
    orderName: PropTypes.string,
    orangeImage: PropTypes.string,
    orangeText: PropTypes.string,
    dollorSign: PropTypes.string,
    lemonImage:PropTypes.string,
    lemonText: PropTypes.string,
 



};

/**
 * Default values for OrderCard
 * 
 * @type {object}
 * @property {string} example='OrderCard 
 */

export const defaultProps = {
    orderName:'Your Orders',
    orangeImage: 'https://s3-alpha-sig.figma.com/img/8b45/4a65/7d09e0d193461fe0cf5fe4d9cba8cad9?Expires=1678060800&Signature=Va5N39~Yc~6nWIqok7YY36tRpKzlJknk-3FF5wGHWIVa370p8r9iqBkQSpsFKvHHuu75i5VVLtA7yK44o9DyyJ076X8KFvJl1T-YsNg1I2OtyoE3Aa0LyAa6848Ke4sNW1R9jKlwyx0S~Yl7F60bAgUIPVUvzrzLDWdH1T6Mq38pZP7vw2tIr1iEN-obgNQNx3fKmodvKdRMemqtP0kKqvPigh7qElOs15qd3Y3-yZ0F6a05rHtyAGjqMvPN7ndipEUOuDbbniXM4HlVkOZUY2XMunvfvKrAa5eHLsSJmCTiCH~KOamMATpDAlzFHeiseqcSkAeDA5X8M8-IUscNkA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    orangeText: 'Field Roast Chao Cheese Creamy Original',
    dollorSign: '$2.51',
    lemonImage: 'https://s3-alpha-sig.figma.com/img/2d48/0a8f/210cdb0f5871f9d6dc633450452ab720?Expires=1678060800&Signature=HmuVnENyCxCRRVqvSDYVFVlBd-6Xd7ZegcZ1Wk0yotEE0VHaoXTjqkLvOTbXltK6lb0p0kmY9u4IuTNUMFgoGWEqQ7Dyzq6LTncFBh8N-qpGONbTaBZs~pMIFm6gASFpan1oEr-M3lb1WVR0a5o7JEfHci6KMxkF5gimG1JNmWphsSSR9QIvjDKnAQKc1MM0Ue3FOyzflsuS8e1VYM6gWCXpXIvaHHtxUk9M8KUZiJ8BXKWruFeUJ-FT0ArV3MYpvLa8mSeBHSZEJAs9csyNzTPNgurS8vaKKuCvNG~zvUEQ9iss2PKE5IPEtyBp0M80m8LLycfW3iLREex2AzxQlg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    lemonText: 'Seeds of Change Organic Quinoa, Brown, & Red Rice',
    dollor: '$5.60',
    muttonImage:'https://s3-alpha-sig.figma.com/img/4c35/37e0/b383c32aa0cf53ae7651240f5bb90bbf?Expires=1678060800&Signature=P4iQhPP1Dy4~l6VlqgIe-Xoz5fSBM7QaVb0Bfln7Wi1AgoDmVhCsbVkTSbd5D0zROLCEIgcutbcoA3CcOfUmR5ZqCme9xwjb5pk6wrhvS4lXbbWvcEtwS6sb~sJkY7Eb2GN1PuGA941AdUuJZ8Haq~orBaaB9f4Dox-bKzv-dx4PBF~z6tqTfVLb7kUtQNLbQE6hsG~FvuTYvF2Au~pcORMUpPSSp38YtsjCgVJB3tL-RPC2fNX-1PkoI5tN2sdGE4RfbbelyAUDDDVdwNprn1mnSeys-wQE0GSrRjXXWnpTE~iAQLatGfwkPGWhc-kLWhWwe5sbXXRpTNnoWm~rug__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    muttonText: 'Angie’s Boomchickapop Sweet & Salty Kettle Corn',
    dollorText:'$7.00',
  
};

OrderCard.propTypes = propTypes;
OrderCard.defaultProps = defaultProps;

export default OrderCard;