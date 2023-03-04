import 'bootstrap/dist/css/bootstrap.min.css';
import useMfeStore from 'LoginPageMFE/useMfeStore';
import React, { useState } from 'react';
import Footer from 'HomePageMFE/Footer';



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
  const [checkoutInput, setCheckoutInput] = useState({
    firstname: '',
    lastname: '',
    address1: '',
    state: '',
    country: '',
    postCode: '',
    email: '',
    additionalInformation: '',
    city: '',
    address2: '',
    phoneNo: '',
    company: ''
  })
  const [checkout, setCheckout] = React.useState(false)
  const cart = useMfeStore(state => state.cart)
  const count = useMfeStore(state => state.count)
  const unsub1 = useMfeStore.subscribe(console.log)
  const removeFromCart = useMfeStore(state => state.removeFromCart)
  const checkoutCart = useMfeStore(state => state.checkoutCart)

  const handleCheckoutCart = () => {
    checkoutCart();
    setCheckout(true)
  }
  return (
    <>
      {checkout ? <>
        <div class="py-5 text-center">
          <h1>Thank you for shopping with us</h1>
        </div></> :
        <div className="maincontainer">
          <div class="py-5 text-center">

            <h2>Checkout form</h2>
            <p class="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>

          {cart.cartItems.length > 0 ? <div class="row">
            <div class="col-md-4 order-md-2 mb-4">
              <h4 class="d-flex justify-content-between align-items-center mb-3">
                <span class="text-muted">Your cart</span>
                <span class="badge badge-secondary badge-pill">{cart.cartItems.length}</span>
              </h4>
              <ul class="list-group mb-3">
                {cart.cartItems.map(item => <li class="list-group-item d-flex justify-content-between lh-condensed">
                  <div onClick={() => removeFromCart(item)}>
                    <h6 class="my-0">{item.productName} X {item.quantity} (Click to delete item)</h6>
                    <small class="text-muted">{item.description}</small>
                  </div>
                  <span class="text-muted">${item.price}</span>
                </li>)}
                <li class="list-group-item d-flex justify-content-between">
                  <span>Subtotal</span>
                  <strong>${cart.pricingDetails.subtotal}</strong>
                </li>
                <li class="list-group-item d-flex justify-content-between">
                  <span>Delivery Charges</span>
                  <strong>${cart.pricingDetails.deliveryCharges}</strong>
                </li>
                <li class="list-group-item d-flex justify-content-between">
                  <span>Total (USD)</span>
                  <strong>${cart.pricingDetails.total}</strong>
                </li>
              </ul>

              <form class="card p-2">
                <div class="input-group">
                  <input type="text" class="form-control" placeholder="Promo code" />
                  <div class="input-group-append">
                    <button type="button" class="btn btn-secondary">Redeem</button>
                  </div>
                </div>
              </form>
            </div>
            <div class="col-md-8 order-md-1">
              <h4 class="mb-3">Billing address</h4>
              <form class="needs-validation" novalidate>
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <label for="firstName">First name</label>
                    <input type="text" class="form-control" id="firstName" placeholder="" value="" required />
                    <div class="invalid-feedback">
                      Valid first name is required.
                    </div>
                  </div>
                  <div class="col-md-6 mb-3">
                    <label for="lastName">Last name</label>
                    <input type="text" class="form-control" id="lastName" placeholder="" value="" required />
                    <div class="invalid-feedback">
                      Valid last name is required.
                    </div>
                  </div>
                </div>

                <div class="mb-3">
                  <label for="username">Username</label>
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text">@</span>
                    </div>
                    <input type="text" class="form-control" id="username" placeholder="Username" required />
                    <div class="invalid-feedback">
                      Your username is required.
                    </div>
                  </div>
                </div>

                <div class="mb-3">
                  <label for="email">Email <span class="text-muted">(Optional)</span></label>
                  <input type="email" class="form-control" id="email" placeholder="you@example.com" />
                  <div class="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                  </div>
                </div>

                <div class="mb-3">
                  <label for="address">Address</label>
                  <input type="text" class="form-control" id="address" placeholder="1234 Main St" required />
                  <div class="invalid-feedback">
                    Please enter your shipping address.
                  </div>
                </div>

                <div class="mb-3">
                  <label for="address2">Address 2 <span class="text-muted">(Optional)</span></label>
                  <input type="text" class="form-control" id="address2" placeholder="Apartment or suite" />
                </div>

                <div class="row">
                  <div class="col-md-5 mb-3">
                    <label for="country">Country</label>
                    <select class="custom-select d-block w-100" id="country" required>
                      <option value="">Choose...</option>
                      <option>United States</option>
                    </select>
                    <div class="invalid-feedback">
                      Please select a valid country.
                    </div>
                  </div>
                  <div class="col-md-4 mb-3">
                    <label for="state">State</label>
                    <select class="custom-select d-block w-100" id="state" required>
                      <option value="">Choose...</option>
                      <option>California</option>
                    </select>
                    <div class="invalid-feedback">
                      Please provide a valid state.
                    </div>
                  </div>
                  <div class="col-md-3 mb-3">
                    <label for="zip">Zip</label>
                    <input type="text" class="form-control" id="zip" placeholder="" required />
                    <div class="invalid-feedback">
                      Zip code required.
                    </div>
                  </div>
                </div>
                <hr class="mb-4" />
                <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="same-address" />
                  <label class="custom-control-label" for="same-address">Shipping address is the same as my billing address</label>
                </div>
                <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="save-info" />
                  <label class="custom-control-label" for="save-info">Save this information for next time</label>
                </div>
                <hr class="mb-4" />

                <h4 class="mb-3">Payment</h4>

                <div class="d-block my-3">
                  <div class="custom-control custom-radio">
                    <input id="credit" name="paymentMethod" type="radio" class="custom-control-input" checked required />
                    <label class="custom-control-label" for="credit">Credit card</label>
                  </div>
                  <div class="custom-control custom-radio">
                    <input id="debit" name="paymentMethod" type="radio" class="custom-control-input" required />
                    <label class="custom-control-label" for="debit">Debit card</label>
                  </div>
                  <div class="custom-control custom-radio">
                    <input id="paypal" name="paymentMethod" type="radio" class="custom-control-input" required />
                    <label class="custom-control-label" for="paypal">Paypal</label>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <label for="cc-name">Name on card</label>
                    <input type="text" class="form-control" id="cc-name" placeholder="" required />
                    <small class="text-muted">Full name as displayed on card</small>
                    <div class="invalid-feedback">
                      Name on card is required
                    </div>
                  </div>
                  <div class="col-md-6 mb-3">
                    <label for="cc-number">Credit card number</label>
                    <input type="text" class="form-control" id="cc-number" placeholder="" required />
                    <div class="invalid-feedback">
                      Credit card number is required
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-3 mb-3">
                    <label for="cc-expiration">Expiration</label>
                    <input type="text" class="form-control" id="cc-expiration" placeholder="" required />
                    <div class="invalid-feedback">
                      Expiration date required
                    </div>
                  </div>
                  <div class="col-md-3 mb-3">
                    <label for="cc-expiration">CVV</label>
                    <input type="text" class="form-control" id="cc-cvv" placeholder="" required />
                    <div class="invalid-feedback">
                      Security code required
                    </div>
                  </div>
                </div>
                <hr class="mb-4" />
                <button class="btn btn-primary btn-lg btn-block" type="button" onClick={() => handleCheckoutCart()}>Continue to checkout</button>
              </form>
            </div>
          </div> : <h1>No items cart</h1>}
        </div>}
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