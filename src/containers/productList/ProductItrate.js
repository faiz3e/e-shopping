import React, { Component } from 'react';
import classes from './Productstyle.css';
import Aux from '../../components/hoc/aux/Aux';
// import ModalReact from '../../components/modal/ModalReact';
import * as actionsTypes from '../../store/actions/Actions';
import {connect} from 'react-redux';

class ProductItrate extends Component {
    state={
show :false
    };
    onClickAddtoCart=(product)=>{
        let found = this.props.cartItems.find(function (e) {
            return e.id === product.id;
        });
        if(!found)
        this.props.addToCart(product);
        else
        this.props.updateTOCart(product.id);
    }  
    
    render() {
        let products = null;
        products = [...this.props.products];
        
        return (
            <Aux>


{/* <ModalReact show={this.state.show} ><div>
asdasdasd</div></ModalReact> */}



                {products && products.map((product) =>
                    <div id={classes.store} key={product.id} >
                        {/* {this.props.name} */}
                        <div className="col-md-9 col-sm-6 col-xs-6">
                            <div className={classes.product + " " + classes.productsingle}>
                                <div className={classes.productthumb}>
                                    <div className={classes.productlabel}>
                                        <span>New</span>
                                        <span className={classes.sale}>-20%</span>
                                    </div>
                                    <button className={classes.mainbtn + " " + classes.quickview} onClick={this.quickView} ><i className="fa fa-search-plus"></i> Quick view</button>
                                    <img src={product.imgUrl} alt="" />
                                </div>
                                <div className={classes.productbody}>
                                    <h4 className={classes.productprice}>{product.priceIs} <del className={classes.productoldprice}>{product.priceWas}</del></h4>
                                    <div className={classes.productrating}>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star-o empty"></i>
                                    </div>
                                    <h4 className={classes.productname}><a href="/">{product.name}</a></h4>
                                    <div className={classes.productbtns}>
                                        <button className={classes.mainbtn + " " + classes.iconbtn}><i className="fa fa-heart"></i></button>
                                        <button className={classes.mainbtn + " " + classes.iconbtn}><i className="fa fa-exchange"></i></button>
                                        <button className={classes.primarybtn}  onClick={()=>this.onClickAddtoCart(product)}>
                                        <i className="fa fa-shopping-cart"></i> Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        totalItems: state.totalItems,
        cartItems:state.cartItems,
        products:state.products,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        addToCart: (product) => dispatch({type: actionsTypes.ADD_TO_CART,payload:product}),
        updateTOCart: (id) => dispatch({type: actionsTypes.UPDATE_TO_CART,payload:id}),
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductItrate);
