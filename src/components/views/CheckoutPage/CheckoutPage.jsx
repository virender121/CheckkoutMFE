import 'bootstrap/dist/css/bootstrap.min.css';
import useMfeStore from 'LoginPageMFE/useMfeStore';
import React, { useState } from 'react';



/**
 * Impliments CheckoutPage component
 * 
 * @method
 * @param {object} props - React properties passed from higher-level
 * @returns CheckoutPage
 */

export const CheckoutPage = (props) => {
  // const { useMfeStore, updateCount } = props;
  console.log({ props })
 
  const [address, setAddress]= useState('')
  
  const [checkout, setCheckout] = React.useState(false)
  const cart = useMfeStore(state => state.cart)
  const removeFromCart = useMfeStore(state => state.removeFromCart)
  const checkoutCart = useMfeStore(state => state.checkoutCart)

  const handleCheckoutCart = () => {
    if(!address){
      
      window.alert('Please fill all the details.')
      
    }else {
    window.alert(address)
    checkoutCart();
    setCheckout(true);
    }
  }
  return (
    <>
    <div style={{marginBottom: '4rem',  backgroundImage: "linear-gradient(#D3D3D3,#F5F5F5)"}}>
      {checkout ? <>
        <div className="py-5 text-center">
          <h1>Thank you for shopping with us</h1>
          <h3>your order will be delievred in 3 Working Days in your address:{address}</h3>
        </div></> :
        <div className="maincontainer">
          <div className="py-5 text-center">
           
            <h2>Checkout form</h2>
            <p className="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>

          {cart.cartItems.length > 0 ? <div className="row">
            <div className="col-md-4 order-md-2 mb-2">
              <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-muted">Your cart</span>
                <span className="badge badge-secondary badge-pill">{cart.cartItems.length}</span>
              </h4>
              <ul className="list-group mb-3">
                {cart.cartItems.map(item => <li className="list-group-item d-flex justify-content-between lh-condensed">
                  <div onClick={() => removeFromCart(item)}>
                    <h6 className="my-0">{item.productName} X {item.quantity} (Click to delete item)</h6>
                    <small className="text-muted">{item.description}</small>
                  </div>
                  <span className="text-muted">₹{item.price}</span>
                </li>)}
                <li className="list-group-item d-flex justify-content-between">
                  <span>Subtotal</span>
                  <strong>₹{cart.pricingDetails.subtotal}</strong>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span>Delivery Charges</span>
                  <strong>₹{cart.pricingDetails.deliveryCharges}</strong>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span>Total (INR)</span>
                  <strong>₹{cart.pricingDetails.total}</strong>
                </li>
              </ul>
            </div>
            <div className="col-md-8 order-md-1">
              <h4 className="mb-3">Billing address</h4>
              <form className="needs-validation" noValidate>
                <div className="row">
                  <div className="col-md-5 mb-3">
                    <label htmlFor="firstName">First name</label>
                    <input type="text" className="form-control" id="firstName" placeholder="First Name" required 
               />
                    <div className="invalid-feedback">
                      Valid first name is required.
                    </div>
                  </div>
                  <div className="col-md-5 mb-3">
                    <label htmlFor="lastName">Last name</label>
                    <input type="text" className="form-control" id="lastName" placeholder="Last Name" required 
                     />
                    <div className="invalid-feedback">
                      Valid last name is required.
                    </div>
                  </div>
                </div>

                <div className="col-md-10 mb-3">
                  <label htmlFor="username">Username</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">@</span>
                    </div>
                    <input type="text" className="form-control" id="username" placeholder="Username" required />
                    <div className="invalid-feedback">
                      Your username is required.
                    </div>
                  </div>
                </div>
                <div className=" col-md-10 mb-3">
                  <label htmlFor="address">Address</label>
                  <input type="text" className="form-control" id="address" placeholder="1234 Main St" value={address}
                  onChange={(e)=>setAddress(e.target.value) } required />
                  <div className="invalid-feedback">
                    Please enter your shipping address.
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-4 mb-3">
                    <label htmlFor="country">Country</label>
                    <select className="custom-select d-block w-100" id="country" required>
                      <option value="">Choose...</option>
                      <option>India</option>
                    
                    </select>
                    <div className="invalid-feedback">
                      Please select a valid country.
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <label htmlFor="state">State</label>
                    <select className="custom-select d-block w-100" id="state" required>
                      <option value="">Choose...</option>
                      <option>Delhi</option>
                      <option>punjab</option>
                      <option>karnatka</option>
                      <option>himachal Pradesh</option>
                      <option>Uttar Pradesh</option>
                      <option>Maharashtra</option>
                      <option>Andhra Pradesh</option>
                      <option>Tamil Nadu</option>
                      <option>Assam</option>
                      <option>Kerala</option>
                      <option>Bihar</option>
                      <option>Gujarat</option>
                    </select>
                    <div className="invalid-feedback">
                      Please provide a valid state.
                    </div>
                  </div>
                  <div className="col-md-3 mb-3">
                    <label htmlFor="zip">Zip</label>
                    <input type="number" className="form-control" id="zip" placeholder="" required />
                    <div className="invalid-feedback">
                      Zip code required.
                    </div>
                  </div>
                </div>
                <hr className="col-md-11 mb-4" />
                <div className="custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" id="same-address" />
                  <label className="custom-control-label"htmlFor="same-address">Shipping address is the same as my billing address</label>
                </div>
                <div className="custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" id="save-info" />
                  <label className="custom-control-label"htmlFor="save-info">Save this information for next time</label>
                </div>
                <hr className="col-md-11 mb-4" />

                <h4 className="mb-3">Payment</h4>

                <div className="d-block my-3">
                  <div className="custom-control custom-radio">
                    <input id="credit" name="paymentMethod" type="radio" className="custom-control-input" checked required />
                    <label className="custom-control-label" htmlFor="credit">Credit card</label>
                  </div>
                  <div className="custom-control custom-radio">
                    <input id="debit" name="paymentMethod" type="radio" className="custom-control-input" required />
                    <label className="custom-control-label"htmlFor="debit">Debit card</label>
                  </div>
                  <div className="custom-control custom-radio">
                    <input id="paypal" name="paymentMethod" type="radio" className="custom-control-input" required />
                    <label className="custom-control-label"htmlFor="paypal">Paypal</label>
                  </div>
                </div>
               
                <hr className="col-md-11 mb-4" />
                <button className="btn btn-primary btn-lg btn-block" type="button" onClick={() => handleCheckoutCart()}>Continue to checkout</button>
              </form>
            </div>
          </div> :
          <h1>No items cart</h1>}
        </div>}
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