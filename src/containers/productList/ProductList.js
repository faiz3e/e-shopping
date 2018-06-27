import React, { Component } from 'react';
import Aux from '../../components/hoc/aux/Aux';
import classes from './Productstyle.css';
// import PropTypes from 'prop-types';
import ProductItrate from './ProductItrate';


class ProductList extends Component {

    state = {
        products: [
            { id: 1, name: "LV side bag", priceWas: 45.00, priceIs: 32.50, rating: 4, imgUrl: "./img/product01.jpg" },
            { id: 2, name: "DW watch", priceWas: 45.00, priceIs: 3.50, rating: 4, imgUrl: "./img/product02.jpg" },
            { id: 3, name: "LP wallet", priceWas: 45.00, priceIs: 2.50, rating: 4, imgUrl: "./img/product03.jpg" },
            { id: 4, name: "Puma shoes", priceWas: 45.00, priceIs: 12.50, rating: 4, imgUrl: "./img/product04.jpg" },
            { id: 5, name: "Boots", priceWas: 145.00, priceIs: 132.50, rating: 4, imgUrl: "./img/product05.jpg" },
            { id: 6, name: "DW watch", priceWas: 45.00, priceIs: 3.50, rating: 4, imgUrl: "./img/product06.jpg" },
            { id: 7, name: "LP wallet", priceWas: 45.00, priceIs: 2.50, rating: 4, imgUrl: "./img/product07.jpg" },
            { id: 8, name: "Puma shoes", priceWas: 45.00, priceIs: 12.50, rating: 4, imgUrl: "./img/product08.jpg" }
        ],
        cart: []
    }


    onProductCliked = (item) => {
        let cart = [...this.state.cart]
        cart.push(item);
        this.setState({
            cart: cart
        }, function () { console.log(this.state.cart, "cart"); })
    }

    render() {
        var showAllProduct = null;
        showAllProduct = this.state.products;

        return (
            <Aux>
                {console.log("this.state.prod", showAllProduct)}
                <div id={classes.store}>
                    {/* {this.props.name} */}

                    <div className="row" style={{ display: "flex", justifyContent: "center" }}>

                        <ProductItrate products={showAllProduct} getClicked={this.onProductCliked} />

                    </div>
                </div>
            </Aux>
        );
    }
}

// ProductList.propTypes={
//     name:PropTypes.string.isRequired
// };

export default ProductList;
