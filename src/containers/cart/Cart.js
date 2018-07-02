import React, { Component } from 'react';
// import HomePage from './components/homePage/HomePage';
import classes from './cartstyle.css';
import Aux from '../../components/hoc/aux/Aux';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import * as actionsTypes from '../../store/actions/Actions';
import TableFooter from './TableFooter';
class Cart extends Component {
state = {
// cart:this.props.cartItems,
products: [
	{ id: 1, name: "LV side bag", priceWas: 45.00, priceIs: 32.50, rating: 4, imgUrl: "./img/product01.jpg", quan: 1 },
	{ id: 2, name: "DW watch", priceWas: 45.00, priceIs: 3.50, rating: 4, imgUrl: "./img/product02.jpg", quan: 4 },
	{ id: 3, name: "LP wallet", priceWas: 45.00, priceIs: 2.50, rating: 4, imgUrl: "./img/product03.jpg", quan: 2 },
	{ id: 4, name: "Puma shoes", priceWas: 45.00, priceIs: 12.50, rating: 4, imgUrl: "./img/product04.jpg", quan: 1 }
],
selecteditem: null,
}

handleChange = (e) => {
}

addProduct = (e) => {
	console.log(e.id,"value from cart comp");
	this.props.updateTOCart(e.id);
	this.forceUpdate()
	}
	
subProduct = (e) => {
	console.log(e.id,"value from cart comp");
	this.props.reduceItemFromCart(e);
	this.forceUpdate()
	}

removeRec = (e) => {
console.log(e);
this.props.removeItemFromCart(e);
}


render() {
var products = this.props.cartItems;
return (
	<Aux>
		<div className="row" style={{ justifyContent: "center" }}>
			<div className="col-md-11">
				<div className={classes.ordersummary + " clearfix"}>
					<div className={classes.sectiontitle}>
						<h3 className={classes.title}>Order Review</h3>
					</div>
					<table className={classes.shoppingcarttable + " table"}>
						<thead>
							<tr>
								<th>Product</th>
								<th></th>
								<th className="text-center">Price</th>
								<th className="text-center">Quantity</th>
								<th className="text-center">Total</th>
								<th className="text-right"></th>
							</tr>
						</thead>
						<tbody>
							{products && products.map((product) =>
								<tr key={product.id} >
									<td className={classes.thumb}><img style={{ height: "100px" }} src={product.imgUrl} alt="" /></td>
									<td className={classes.details}>
										<a href="/">{product.name}</a>
										<ul>
											<li><span>Color: Camelot</span></li>
										</ul>
									</td>
									<td className="price text-center"><strong>${product.priceIs}</strong><br /><del className="font-weak"><small>${product.priceWas}</small></del></td>
									<td className="qty text-center">
										<input className="input" type="number" value={product.quan} onChange={()=>this.handleChange(product)}/>
										<button onClick={()=>this.subProduct(product)} >-</button>
										<button onClick={()=>this.addProduct(product)}>+</button>
									</td>
									<td className="total text-center"><strong className="primary-color">${product.priceIs * product.quan}</strong></td>
									<td className="text-right"><button className="main-btn icon-btn" onClick={()=>this.removeRec(product)}><i className="fa fa-close"></i></button></td>
								</tr>
							)}
						</tbody>
						<TableFooter/>
					</table>
					<div className="pull-right">
						<Link to="/checkout"><button className={classes.primarybtn} >Proceed to pay</button></Link>
					</div>
				</div>

			</div>
		</div>
	</Aux>
);
}
}


const mapStateToProps = state => {
    return {
        cartItems:state.cartItems,
    };

}


const mapDispatchToProps = dispatch => {
    return {
		onIncrementCounter: () => dispatch({type: actionsTypes.ADD_TO_CART}),
		updateTOCart: (id) => dispatch({type: actionsTypes.UPDATE_TO_CART,payload:id}),
		reduceItemFromCart: (id) => dispatch({type: actionsTypes.REDUCE_FROM_CART,payload:id}),
		removeItemFromCart: (id) => dispatch({type: actionsTypes.REMOVE_FROM_CART,payload:id}),
        // onDecrementCounter: () => dispatch({type: 'DECREMENT'}),
        // onAddCounter: () => dispatch({type: 'ADD_5' ,val:5}),
        // onSubCounter: () => dispatch({type: 'SUB_5' , val :5}),
        // onResetCounter: () => dispatch({type: 'RESET' , val :5})
    };
}




export default connect(mapStateToProps,mapDispatchToProps)(Cart);
