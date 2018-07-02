import React, { Component } from 'react';
// import HomePage from './components/homePage/HomePage';
import {Link} from 'react-router-dom';
import Aux from '../../components/hoc/aux/Aux';
class Checkout extends Component {
  render() {
    return (
      <Aux>
<div className="section">

		<div className="container">

			<div className="row">
				<form id="checkout-form" className="clearfix">
					<div className="col-md-6">
						<div className="billing-details">
							<p>Already a customer ? <a href="/">Login</a></p>
							<div className="section-title">
								<h3 className="title">Billing Details</h3>
							</div>
							<div className="form-group">
								<input className="input" type="text" name="first-name" placeholder="First Name"/>
							</div>
							<div className="form-group">
								<input className="input" type="text" name="last-name" placeholder="Last Name"/>
							</div>
							<div className="form-group">
								<input className="input" type="email" name="email" placeholder="Email"/>
							</div>
							<div className="form-group">
								<input className="input" type="text" name="address" placeholder="Address"/>
							</div>
							<div className="form-group">
								<input className="input" type="text" name="city" placeholder="City"/>
							</div>
							<div className="form-group">
								<input className="input" type="text" name="country" placeholder="Country"/>
							</div>
							<div className="form-group">
								<input className="input" type="text" name="zip-code" placeholder="ZIP Code"/>
							</div>
							<div className="form-group">
								<input className="input" type="tel" name="tel" placeholder="Telephone"/>
							</div>
							<div className="form-group">
								<div className="input-checkbox">
									<input type="checkbox" id="register"/>
									<label className="font-weak" for="register">Create Account?</label>
									<div className="caption">
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.
											</p>
												<input className="input" type="password" name="password" placeholder="Enter Your Password"/>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="col-md-6">
						<div className="shiping-methods">
							<div className="section-title">
								<h4 className="title">Shiping Methods</h4>
							</div>
							<div className="input-checkbox">
								<input type="radio" name="shipping" id="shipping-1" checked/>
								<label htmlFor="shipping-1">Free Shiping -  $0.00</label>
								<div className="caption">
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
										</p>
								</div>
							</div>
							<div className="input-checkbox">
								<input type="radio" name="shipping" id="shipping-2"/>
								<label for="shipping-2">Standard - $4.00</label>
								<div className="caption">
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
										</p>
								</div>
							</div>
						</div>

						<div className="payments-methods">
							<div className="section-title">
								<h4 className="title">Payments Methods</h4>
							</div>
							<div className="input-checkbox">
								<input type="radio" name="payments" id="payments-1" checked/>
								<label for="payments-1">Direct Bank Transfer</label>
								<div className="caption">
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
										</p>
								</div>
							</div>
							<div className="input-checkbox">
								<input type="radio" name="payments" id="payments-2"/>
								<label for="payments-2">Cheque Payment</label>
								<div className="caption">
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
										</p>
								</div>
							</div>
							<div className="input-checkbox">
								<input type="radio" name="payments" id="payments-3"/>
								<label for="payments-3">Paypal System</label>
								<div className="caption">
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
										</p>
								</div>
							</div>
						</div>
					</div>

					<div className="col-md-12">
						<div className="order-summary clearfix">
							<div className="section-title">
								<h3 className="title">Order Review</h3>
							</div>
              

              
              
              
             

						<div >
							<Link to="/cart" ><button className="primary-btn">Back to cart</button></Link>
		
							<Link to="/" ><button className="primary-btn">Place Order</button></Link>
							</div>
						</div>

					</div>
				</form>
			</div>

		</div>

	</div>
      </Aux>
    );
  }
}

export default Checkout;
