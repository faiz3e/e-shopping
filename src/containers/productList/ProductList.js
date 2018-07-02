import React, { Component } from 'react';
import Aux from '../../components/hoc/aux/Aux';
import classes from './Productstyle.css';
// import PropTypes from 'prop-types';
import ProductItrate from './ProductItrate';
import * as actionsTypes from '../../store/actions/Actions';
import {connect} from 'react-redux';

class ProductList extends Component {
    render() {
        return (
            <Aux>
                {console.log("this.state.prod", this.props.products)}
                <div id={classes.store}>
                    {/* {this.props.name} */}
                    <div className="row" style={{ display: "flex", justifyContent: "center" }}>
                        <ProductItrate products={this.props.products}  cartItems={this.props.cartItems}/>
                    </div>
                </div>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        totalItems: state.totalItems,
        products:state.products,
        cartItems:state.cartItems,
    };
}
const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: actionsTypes.ADD_TO_CART}),

    };
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductList);
