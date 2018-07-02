import React, { Component } from 'react';
import classes from './header.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {
    render() {
        return (
            <div>
                <header className={classes.displayflexcol}>
                    <div className={classes.header}>
                        <div className={classes.container}>
                            <div className={classes.pullleft}>
                                <div className={classes.headerlogo}>
                                    <Link to="/" className={classes.logo} >
                                        <img src="./img/logo.png" alt="" />
                                    </Link>
                                </div>

                                <div className={classes.headersearch}>
                                    <form>
                                        <input className={classes.input + " " + classes.searchinput} type="text" placeholder="Enter your keyword" />
                                        <select className={classes.input + " " + classes.searchcategories}>
                                            <option value="0">All Categories</option>
                                            <option value="1">Category 01</option>
                                            <option value="1">Category 02</option>
                                        </select>
                                    </form>
                                </div>
                            </div>
                            <div className={classes.pullright}>
                                <ul className={classes.headerbtns}>

                                    <li className={classes.headeraccount + " " + classes.dropdown + " " + classes.defaultdropdown}>
                                        <div className={classes.dropdowntoggle} role="button" datatoggle={classes.dropdown} ariaexpanded="true">
                                            <div className={classes.headerbtnsicon}>
                                                <i className={classes.fa + " " + classes.fausero}></i>
                                            </div>
                                            <strong className={classes.textuppercase}>My Account </strong>
                                        </div>
                                        <a href="/" className={classes.textuppercase}>Login</a> / <a href="/" className={classes.textuppercase}>Join</a>
                                        <ul className={classes.custommenu}>
                                            <li><a href="/"><i className="fa fa-fausero"></i> My Account</a></li>
                                            <li><a href="/"><i className="fa fa-facheck"></i> Checkout</a></li>
                                            <li><a href="/"><i className="fa fa-faunlockalt"></i> Login</a></li>
                                            <li><a href="/"><i className="fa fa-fauserplus"></i> Create An Account</a></li>
                                        </ul>
                                    </li>

                                    <li className={classes.headercart + " " + classes.dropdown + " " + classes.defaultdropdown}>
                                        < Link to='/cart' className={classes.dropdowntoggle} datatoggle={classes.dropdown} ariaexpanded="true">
                                            <div className={classes.headerbtnsicon}>
                                                <i className="fa fa-shopping-cart"></i>
                                                <span className={classes.qty}>{this.props.totalItems}</span>
                                            </div>
                                            <strong className={classes.textuppercase}>My Cart:</strong>
                                            <br />
                                            <span>35.20$</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>

                </header>
                <hr />
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        totalItems: state.totalItems
    };

}


export default connect(mapStateToProps)(Header);
