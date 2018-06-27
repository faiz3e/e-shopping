import React, { Component } from 'react';
// import HomePage from '../homePage/HomePage';
// import Aux from '../hoc/aux/Aux';
import classes from './header.css';
// import './header.css';

class Header extends Component {
  render() {
    return (
      <div>
   
                      <header className={classes.displayflexcol}>
  {/*
                    <div className={classes.header}>
                        <div className={classes.container}>
                            <div className={classes.pullleft}>
                                <span className={classes.Sp}>Welcome to Eshop!</span>
                            </div>
                            <div className={classes.pullright}>
                                <ul className={classes.headertoplinks}>
                                    <li><a href="#">Store</a></li>
                                    <li><a href="#">Newsletter</a></li>
                                    <li><a href="#">FAQ</a></li>
                                    <li className={classes.dropdown +classes.defaultdropdown}>
                                        <a className={classes.dropdowntoggle} datatoggle={classes.dropdown} ariaexpanded="true">ENG </a>
                                        <ul className={classes.custommenu}>
                                            <li><a href="#">English (ENG)</a></li>
                                            <li><a href="#">Russian (Ru)</a></li>
                                            <li><a href="#">French (FR)</a></li>
                                            <li><a href="#">Spanish (Es)</a></li>
                                        </ul>
                                    </li>
                                    <li className={classes.dropdown + " "+ classes.defaultdropdown}>
                                        <a className={classes.dropdowntoggle} datatoggle={classes.dropdown} ariaexpanded="true">USD </a>
                                        <ul className={classes.custommenu}>
                                            <li><a href="#">USD ($)</a></li>
                                            <li><a href="#">EUR (€)</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>*/}
                     
                    <div className={classes.header}>
                        <div className={classes.container}>
                            <div className={classes.pullleft}>

                                <div className={classes.headerlogo}>
                                    <a className={classes.logo} href="/">
                                        <img src="./img/logo.png" alt="" />
                                    </a>
                                </div>

                                <div className={classes.headersearch}>
                                    <form>
                                        <input className={classes.input +" "+  classes.searchinput} type="text" placeholder="Enter your keyword" />
                                        <select className={classes.input +" "+ classes.searchcategories}>
                                            <option value="0">All Categories</option>
                                            <option value="1">Category 01</option>
                                            <option value="1">Category 02</option>
                                        </select>
                                        {/* <button className={classes.searchbtn}><i className={classes.fa+ classes.fasearch}></i></button> */}
                                    </form>
                                </div>

                            </div>
                            <div className={classes.pullright}>
                                <ul className={classes.headerbtns}>

                                    <li className={classes.headeraccount+" "+ classes.dropdown +" "+ classes.defaultdropdown}>
                                        <div className={classes.dropdowntoggle} role="button" datatoggle={classes.dropdown} ariaexpanded="true">
                                            <div className={classes.headerbtnsicon}>
                                                <i className={classes.fa +" "+ classes.fausero}></i>
                                            </div>
                                            <strong className={classes.textuppercase}>My Account </strong>
                                        </div>
                                        <a href="/" className={classes.textuppercase}>Login</a> / <a href="/" className={classes.textuppercase}>Join</a>
                                        <ul className={classes.custommenu}>
                                            <li><a href="/"><i className="fa fausero"></i> My Account</a></li>
                                            <li><a href="/"><i className="fa facheck"></i> Checkout</a></li>
                                            <li><a href="/"><i className="fa faunlockalt"></i> Login</a></li>
                                            <li><a href="/"><i className="fa fauserplus"></i> Create An Account</a></li>
                                        </ul>
                                    </li>

                                    <li className={classes.headercart+" " +classes.dropdown +" "+classes.defaultdropdown}>
                                        <a className={classes.dropdowntoggle } datatoggle={classes.dropdown} ariaexpanded="true">
                                            <div className={classes.headerbtnsicon }>
                                                <i className="fa fashoppingcart"></i>
                                                <span className={classes.qty}>3</span>
                                            </div>
                                            <strong className={classes.textuppercase}>My Cart:</strong>
                                            <br />
                                            <span>35.20$</span>
                                        </a>
                              
                                    </li>

                                    {/* <li className={classes.navtoggle}>
                                        <button className={classes.navtogglebtn+" "+ classes.mainbtn +" "+ classes.iconbtn}><i className={classes.fa +" "+classes.fabars}></i></button>
                                    </li> */}

                                </ul>
                            </div>
                        </div>

                    </div>

                </header>
                <hr/>
      </div>
    );
  }
}

export default Header;
