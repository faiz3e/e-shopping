import React, { Component } from 'react';
import logo from '../logo.svg';
// import '../styling/slick.css';
// import '../styling/slick-theme.css';
// import '../styling/bootstrap.min.css';
// import '../styling/nouislider.min.css';
// import '../styling/font-awesome.min.css';
import '../styling/style.css';



class HomePage extends Component {
    render() {
        return (
            <div className="App">

                <header style={{display:"flex",flexDirection:"column"}}>

                    <div id="top-header">
                        <div className="container">
                            <div className="pull-left">
                                <span>Welcome to E-shop!</span>
                            </div>
                            <div className="pull-right">
                                <ul className="header-top-links">
                                    <li><a href="#">Store</a></li>
                                    <li><a href="#">Newsletter</a></li>
                                    <li><a href="#">FAQ</a></li>
                                    <li className="dropdown default-dropdown">
                                        <a className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">ENG </a>
                                        <ul className="custom-menu">
                                            <li><a href="#">English (ENG)</a></li>
                                            <li><a href="#">Russian (Ru)</a></li>
                                            <li><a href="#">French (FR)</a></li>
                                            <li><a href="#">Spanish (Es)</a></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown default-dropdown">
                                        <a className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">USD </a>
                                        <ul className="custom-menu">
                                            <li><a href="#">USD ($)</a></li>
                                            <li><a href="#">EUR (€)</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                     
                    <div id="header">
                        <div className="container">
                            <div className="pull-left">

                                <div className="header-logo">
                                    <a className="logo" href="#">
                                        <img src="./img/logo.png" alt="" />
                                    </a>
                                </div>

                                <div className="header-search">
                                    <form>
                                        <input className="input search-input" type="text" placeholder="Enter your keyword" />
                                        <select className="input search-categories">
                                            <option value="0">All Categories</option>
                                            <option value="1">Category 01</option>
                                            <option value="1">Category 02</option>
                                        </select>
                                        <button className="search-btn"><i className="fa fa-search"></i></button>
                                    </form>
                                </div>

                            </div>
                            <div className="pull-right">
                                <ul className="header-btns">

                                    <li className="header-account dropdown default-dropdown">
                                        <div className="dropdown-toggle" role="button" data-toggle="dropdown" aria-expanded="true">
                                            <div className="header-btns-icon">
                                                <i className="fa fa-user-o"></i>
                                            </div>
                                            <strong className="text-uppercase">My Account </strong>
                                        </div>
                                        <a href="#" className="text-uppercase">Login</a> / <a href="#" className="text-uppercase">Join</a>
                                        <ul className="custom-menu">
                                            <li><a href="#"><i className="fa fa-user-o"></i> My Account</a></li>
                                            <li><a href="#"><i className="fa fa-heart-o"></i> My Wishlist</a></li>
                                            <li><a href="#"><i className="fa fa-exchange"></i> Compare</a></li>
                                            <li><a href="#"><i className="fa fa-check"></i> Checkout</a></li>
                                            <li><a href="#"><i className="fa fa-unlock-alt"></i> Login</a></li>
                                            <li><a href="#"><i className="fa fa-user-plus"></i> Create An Account</a></li>
                                        </ul>
                                    </li>

                                    <li className="header-cart dropdown default-dropdown">
                                        <a className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
                                            <div className="header-btns-icon">
                                                <i className="fa fa-shopping-cart"></i>
                                                <span className="qty">3</span>
                                            </div>
                                            <strong className="text-uppercase">My Cart:</strong>
                                            <br />
                                            <span>35.20$</span>
                                        </a>
                                        <div className="custom-menu">
                                            <div id="shopping-cart">
                                                <div className="shopping-cart-list">
                                                    <div className="product product-widget">
                                                        <div className="product-thumb">
                                                            <img src="./img/thumb-product01.jpg" alt="" />
                                                        </div>
                                                        <div className="product-body">
                                                            <h3 className="product-price">$32.50 <span className="qty">x3</span></h3>
                                                            <h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
                                                        </div>
                                                        <button className="cancel-btn"><i className="fa fa-trash"></i></button>
                                                    </div>
                                                    <div className="product product-widget">
                                                        <div className="product-thumb">
                                                            <img src="./img/thumb-product01.jpg" alt="" />
                                                        </div>
                                                        <div className="product-body">
                                                            <h3 className="product-price">$32.50 <span className="qty">x3</span></h3>
                                                            <h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
                                                        </div>
                                                        <button className="cancel-btn"><i className="fa fa-trash"></i></button>
                                                    </div>
                                                </div>
                                                <div className="shopping-cart-btns">
                                                    <button className="main-btn">View Cart</button>
                                                    <button className="primary-btn">Checkout <i className="fa fa-arrow-circle-right"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="nav-toggle">
                                        <button className="nav-toggle-btn main-btn icon-btn"><i className="fa fa-bars"></i></button>
                                    </li>

                                </ul>
                            </div>
                        </div>

                    </div>

                </header>














	<div id="navigation">
	
		<div className="container">
			<div id="responsive-nav">
			
				<div className="category-nav show-on-click">
					<span className="category-header">Categories <i className="fa fa-list"></i></span>
					<ul className="category-list">
						<li className="dropdown side-dropdown">
							<a className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">Women’s Clothing <i className="fa fa-angle-right"></i></a>
							<div className="custom-menu">
								<div className="row">
									<div className="col-md-4">
										<ul className="list-links">
											<li>
												<h3 className="list-links-title">Categories</h3></li>
											<li><a href="#">Women’s Clothing</a></li>
											<li><a href="#">Men’s Clothing</a></li>
											<li><a href="#">Phones & Accessories</a></li>
											<li><a href="#">Jewelry & Watches</a></li>
											<li><a href="#">Bags & Shoes</a></li>
										</ul>
										<hr className="hidden-md hidden-lg"/>
									</div>
									<div className="col-md-4">
										<ul className="list-links">
											<li>
												<h3 className="list-links-title">Categories</h3></li>
											<li><a href="#">Women’s Clothing</a></li>
											<li><a href="#">Men’s Clothing</a></li>
											<li><a href="#">Phones & Accessories</a></li>
											<li><a href="#">Jewelry & Watches</a></li>
											<li><a href="#">Bags & Shoes</a></li>
										</ul>
										<hr className="hidden-md hidden-lg"/>
									</div>
									<div className="col-md-4">
										<ul className="list-links">
											<li>
												<h3 className="list-links-title">Categories</h3></li>
											<li><a href="#">Women’s Clothing</a></li>
											<li><a href="#">Men’s Clothing</a></li>
											<li><a href="#">Phones & Accessories</a></li>
											<li><a href="#">Jewelry & Watches</a></li>
											<li><a href="#">Bags & Shoes</a></li>
										</ul>
									</div>
								</div>
								<div className="row hidden-sm hidden-xs">
									<div className="col-md-12">
										<hr/>
										<a className="banner banner-1" href="#">
											<img src="./img/banner05.jpg" alt=""/>
											<div className="banner-caption text-center">
												<h2 className="white-color">NEW COLLECTION</h2>
												<h3 className="white-color font-weak">HOT DEAL</h3>
											</div>
										</a>
									</div>
								</div>
							</div>
						</li>
						<li><a href="#">Men’s Clothing</a></li>
						<li className="dropdown side-dropdown"><a className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">Phones & Accessories <i className="fa fa-angle-right"></i></a>
							<div className="custom-menu">
								<div className="row">
									<div className="col-md-4">
										<ul className="list-links">
											<li>
												<h3 className="list-links-title">Categories</h3></li>
											<li><a href="#">Women’s Clothing</a></li>
											<li><a href="#">Men’s Clothing</a></li>
											<li><a href="#">Phones & Accessories</a></li>
											<li><a href="#">Jewelry & Watches</a></li>
											<li><a href="#">Bags & Shoes</a></li>
										</ul>
										<hr/>
										<ul className="list-links">
											<li>
												<h3 className="list-links-title">Categories</h3></li>
											<li><a href="#">Women’s Clothing</a></li>
											<li><a href="#">Men’s Clothing</a></li>
											<li><a href="#">Phones & Accessories</a></li>
											<li><a href="#">Jewelry & Watches</a></li>
											<li><a href="#">Bags & Shoes</a></li>
										</ul>
										<hr className="hidden-md hidden-lg"/>
									</div>
									<div className="col-md-4">
										<ul className="list-links">
											<li>
												<h3 className="list-links-title">Categories</h3></li>
											<li><a href="#">Women’s Clothing</a></li>
											<li><a href="#">Men’s Clothing</a></li>
											<li><a href="#">Phones & Accessories</a></li>
											<li><a href="#">Jewelry & Watches</a></li>
											<li><a href="#">Bags & Shoes</a></li>
										</ul>
										<hr/>
										<ul className="list-links">
											<li>
												<h3 className="list-links-title">Categories</h3></li>
											<li><a href="#">Women’s Clothing</a></li>
											<li><a href="#">Men’s Clothing</a></li>
											<li><a href="#">Phones & Accessories</a></li>
											<li><a href="#">Jewelry & Watches</a></li>
											<li><a href="#">Bags & Shoes</a></li>
										</ul>
									</div>
									<div className="col-md-4 hidden-sm hidden-xs">
										<a className="banner banner-2" href="#">
											<img src="./img/banner04.jpg" alt=""/>
											<div className="banner-caption">
												<h3 className="white-color">NEW<br/>COLLECTION</h3>
											</div>
										</a>
									</div>
								</div>
							</div>
						</li>
						<li><a href="#">Computer & Office</a></li>
						<li><a href="#">Consumer Electronics</a></li>
						<li className="dropdown side-dropdown">
							<a className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">Jewelry & Watches <i className="fa fa-angle-right"></i></a>
							<div className="custom-menu">
								<div className="row">
									<div className="col-md-4">
										<ul className="list-links">
											<li>
												<h3 className="list-links-title">Categories</h3></li>
											<li><a href="#">Women’s Clothing</a></li>
											<li><a href="#">Men’s Clothing</a></li>
											<li><a href="#">Phones & Accessories</a></li>
											<li><a href="#">Jewelry & Watches</a></li>
											<li><a href="#">Bags & Shoes</a></li>
										</ul>
										<hr/>
										<ul className="list-links">
											<li>
												<h3 className="list-links-title">Categories</h3></li>
											<li><a href="#">Women’s Clothing</a></li>
											<li><a href="#">Men’s Clothing</a></li>
											<li><a href="#">Phones & Accessories</a></li>
											<li><a href="#">Jewelry & Watches</a></li>
											<li><a href="#">Bags & Shoes</a></li>
										</ul>
										<hr className="hidden-md hidden-lg"/>
									</div>
									<div className="col-md-4">
										<ul className="list-links">
											<li>
												<h3 className="list-links-title">Categories</h3></li>
											<li><a href="#">Women’s Clothing</a></li>
											<li><a href="#">Men’s Clothing</a></li>
											<li><a href="#">Phones & Accessories</a></li>
											<li><a href="#">Jewelry & Watches</a></li>
											<li><a href="#">Bags & Shoes</a></li>
										</ul>
										<hr/>
										<ul className="list-links">
											<li>
												<h3 className="list-links-title">Categories</h3></li>
											<li><a href="#">Women’s Clothing</a></li>
											<li><a href="#">Men’s Clothing</a></li>
											<li><a href="#">Phones & Accessories</a></li>
											<li><a href="#">Jewelry & Watches</a></li>
											<li><a href="#">Bags & Shoes</a></li>
										</ul>
										<hr className="hidden-md hidden-lg"/>
									</div>
									<div className="col-md-4">
										<ul className="list-links">
											<li>
												<h3 className="list-links-title">Categories</h3></li>
											<li><a href="#">Women’s Clothing</a></li>
											<li><a href="#">Men’s Clothing</a></li>
											<li><a href="#">Phones & Accessories</a></li>
											<li><a href="#">Jewelry & Watches</a></li>
											<li><a href="#">Bags & Shoes</a></li>
										</ul>
										<hr/>
										<ul className="list-links">
											<li>
												<h3 className="list-links-title">Categories</h3></li>
											<li><a href="#">Women’s Clothing</a></li>
											<li><a href="#">Men’s Clothing</a></li>
											<li><a href="#">Phones & Accessories</a></li>
											<li><a href="#">Jewelry & Watches</a></li>
											<li><a href="#">Bags & Shoes</a></li>
										</ul>
									</div>
								</div>
							</div>
						</li>
						<li><a href="#">Bags & Shoes</a></li>
						<li><a href="#">View All</a></li>
					</ul>
				</div>
	

		
				<div className="menu-nav">
					<span className="menu-header">Menu <i className="fa fa-bars"></i></span>
					<ul className="menu-list">
						<li><a href="#">Home</a></li>
						<li><a href="#">Shop</a></li>
						<li className="dropdown mega-dropdown"><a className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">Women </a>
							<div className="custom-menu">
								<div className="row">
									<div className="col-md-4">
										<ul className="list-links">
											<li>
												<h3 className="list-links-title">Categories</h3></li>
											<li><a href="#">Women’s Clothing</a></li>
											<li><a href="#">Men’s Clothing</a></li>
											<li><a href="#">Phones & Accessories</a></li>
											<li><a href="#">Jewelry & Watches</a></li>
											<li><a href="#">Bags & Shoes</a></li>
										</ul>
										<hr className="hidden-md hidden-lg"/>
									</div>
									<div className="col-md-4">
										<ul className="list-links">
											<li>
												<h3 className="list-links-title">Categories</h3></li>
											<li><a href="#">Women’s Clothing</a></li>
											<li><a href="#">Men’s Clothing</a></li>
											<li><a href="#">Phones & Accessories</a></li>
											<li><a href="#">Jewelry & Watches</a></li>
											<li><a href="#">Bags & Shoes</a></li>
										</ul>
										<hr className="hidden-md hidden-lg"/>
									</div>
									<div className="col-md-4">
										<ul className="list-links">
											<li>
												<h3 className="list-links-title">Categories</h3></li>
											<li><a href="#">Women’s Clothing</a></li>
											<li><a href="#">Men’s Clothing</a></li>
											<li><a href="#">Phones & Accessories</a></li>
											<li><a href="#">Jewelry & Watches</a></li>
											<li><a href="#">Bags & Shoes</a></li>
										</ul>
									</div>
								</div>
								<div className="row hidden-sm hidden-xs">
									<div className="col-md-12">
										<hr/>
										<a className="banner banner-1" href="#">
											<img src="./img/banner05.jpg" alt=""/>
											<div className="banner-caption text-center">
												<h2 className="white-color">NEW COLLECTION</h2>
												<h3 className="white-color font-weak">HOT DEAL</h3>
											</div>
										</a>
									</div>
								</div>
							</div>
						</li>
						<li className="dropdown mega-dropdown full-width"><a className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">Men </a>
							<div className="custom-menu">
								<div className="row">
									<div className="col-md-3">
										<div className="hidden-sm hidden-xs">
											<a className="banner banner-1" href="#">
												<img src="./img/banner06.jpg" alt=""/>
												<div className="banner-caption text-center">
													<h3 className="white-color text-uppercase">Women’s</h3>
												</div>
											</a>
											<hr/>
										</div>
										<ul className="list-links">
											<li>
												<h3 className="list-links-title">Categories</h3></li>
											<li><a href="#">Women’s Clothing</a></li>
											<li><a href="#">Men’s Clothing</a></li>
											<li><a href="#">Phones & Accessories</a></li>
											<li><a href="#">Jewelry & Watches</a></li>
											<li><a href="#">Bags & Shoes</a></li>
										</ul>
									</div>
									<div className="col-md-3">
										<div className="hidden-sm hidden-xs">
											<a className="banner banner-1" href="#">
												<img src="./img/banner07.jpg" alt=""/>
												<div className="banner-caption text-center">
													<h3 className="white-color text-uppercase">Men’s</h3>
												</div>
											</a>
										</div>
										<hr/>
										<ul className="list-links">
											<li>
												<h3 className="list-links-title">Categories</h3></li>
											<li><a href="#">Women’s Clothing</a></li>
											<li><a href="#">Men’s Clothing</a></li>
											<li><a href="#">Phones & Accessories</a></li>
											<li><a href="#">Jewelry & Watches</a></li>
											<li><a href="#">Bags & Shoes</a></li>
										</ul>
									</div>
									<div className="col-md-3">
										<div className="hidden-sm hidden-xs">
											<a className="banner banner-1" href="#">
												<img src="./img/banner08.jpg" alt=""/>
												<div className="banner-caption text-center">
													<h3 className="white-color text-uppercase">Accessories</h3>
												</div>
											</a>
										</div>
										<hr/>
										<ul className="list-links">
											<li>
												<h3 className="list-links-title">Categories</h3></li>
											<li><a href="#">Women’s Clothing</a></li>
											<li><a href="#">Men’s Clothing</a></li>
											<li><a href="#">Phones & Accessories</a></li>
											<li><a href="#">Jewelry & Watches</a></li>
											<li><a href="#">Bags & Shoes</a></li>
										</ul>
									</div>
									<div className="col-md-3">
										<div className="hidden-sm hidden-xs">
											<a className="banner banner-1" href="#">
												<img src="./img/banner09.jpg" alt=""/>
												<div className="banner-caption text-center">
													<h3 className="white-color text-uppercase">Bags</h3>
												</div>
											</a>
										</div>
										<hr/>
										<ul className="list-links">
											<li>
												<h3 className="list-links-title">Categories</h3></li>
											<li><a href="#">Women’s Clothing</a></li>
											<li><a href="#">Men’s Clothing</a></li>
											<li><a href="#">Phones & Accessories</a></li>
											<li><a href="#">Jewelry & Watches</a></li>
											<li><a href="#">Bags & Shoes</a></li>
										</ul>
									</div>
								</div>
							</div>
						</li>
						<li><a href="#">Sales</a></li>
						<li className="dropdown default-dropdown"><a className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">Pages </a>
							<ul className="custom-menu">
								<li><a href="index.html">Home</a></li>
								<li><a href="products.html">Products</a></li>
								<li><a href="product-page.html">Product Details</a></li>
								<li><a href="checkout.html">Checkout</a></li>
							</ul>
						</li>
					</ul>
				</div>
		
			</div>
		</div>
		
	</div>



















	<div className="section">
		
		<div className="container">
		
			<div className="row">
		
				<div id="aside" className="col-md-3">
				
					<div className="aside">
						<h3 className="aside-title">Shop by:</h3>
						<ul className="filter-list">
							<li><span className="text-uppercase">color:</span></li>
							<li><a href="#" style={{color:"#FFF", backgroundColor:"#8A2454"}}>Camelot</a></li>
							<li><a href="#" style={{color:"#FFF", backgroundColor:"#475984"}}>East Bay</a></li>
							<li><a href="#" style={{color:"#FFF",backgroundColor:"#BF6989"}}>Tapestry</a></li>
							<li><a href="#" style={{color:"#FFF",backgroundColor:"#9A54D8"}}>Medium Purple</a></li>
						</ul>

						<ul className="filter-list">
							<li><span className="text-uppercase">Size:</span></li>
							<li><a href="#">X</a></li>
							<li><a href="#">XL</a></li>
						</ul>

						<ul className="filter-list">
							<li><span className="text-uppercase">Price:</span></li>
							<li><a href="#">MIN: $20.00</a></li>
							<li><a href="#">MAX: $120.00</a></li>
						</ul>

						<ul className="filter-list">
							<li><span className="text-uppercase">Gender:</span></li>
							<li><a href="#">Men</a></li>
						</ul>

						<button className="primary-btn">Clear All</button>
					</div>
		
					<div className="aside">
						<h3 className="aside-title">Filter by Price</h3>
						<div id="price-slider"></div>
					</div>
		
					<div className="aside">
						<h3 className="aside-title">Filter By Color:</h3>
						<ul className="color-option">
							<li><a href="#" style={{backgroundColor:"#475984"}}></a></li>
							<li><a href="#" style={{backgroundColor:"#8A2454"}}></a></li>
							<li className="active"><a href="#" style={{backgroundColor:"#BF6989"}}></a></li>
							<li><a href="#" style={{backgroundColor:"#9A54D8"}}></a></li>
							<li><a href="#" style={{backgroundColor:"#675F52"}}></a></li>
							<li><a href="#" style={{backgroundColor:"#050505"}}></a></li>
							<li><a href="#" style={{backgroundColor:"#D5B47B"}}></a></li>
						</ul>
					</div>
	
					<div className="aside">
						<h3 className="aside-title">Filter By Size:</h3>
						<ul className="size-option">
							<li className="active"><a href="#">S</a></li>
							<li className="active"><a href="#">XL</a></li>
							<li><a href="#">SL</a></li>
						</ul>
					</div>

					<div className="aside">
						<h3 className="aside-title">Filter by Brand</h3>
						<ul className="list-links">
							<li><a href="#">Nike</a></li>
							<li><a href="#">Adidas</a></li>
							<li><a href="#">Polo</a></li>
							<li><a href="#">Lacost</a></li>
						</ul>
					</div>

					<div className="aside">
						<h3 className="aside-title">Filter by Gender</h3>
						<ul className="list-links">
							<li className="active"><a href="#">Men</a></li>
							<li><a href="#">Women</a></li>
						</ul>
					</div>

					<div className="aside">
						<h3 className="aside-title">Top Rated Product</h3>
					
						<div className="product product-widget">
							<div className="product-thumb">
								<img src="./img/thumb-product01.jpg" alt=""/>
							</div>
							<div className="product-body">
								<h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
								<h3 className="product-price">$32.50 <del className="product-old-price">$45.00</del></h3>
								<div className="product-rating">
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star-o empty"></i>
								</div>
							</div>
						</div>
	
						<div className="product product-widget">
							<div className="product-thumb">
								<img src="./img/thumb-product01.jpg" alt=""/>
							</div>
							<div className="product-body">
								<h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
								<h3 className="product-price">$32.50</h3>
								<div className="product-rating">
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star-o empty"></i>
								</div>
							</div>
						</div>
		
					</div>
		
				</div>

				<div id="main" className="col-md-9">

					<div className="store-filter clearfix">
						<div className="pull-left">
							<div className="row-filter">
								<a href="#"><i className="fa fa-th-large"></i></a>
								<a href="#" className="active"><i className="fa fa-bars"></i></a>
							</div>
							<div className="sort-filter">
								<span className="text-uppercase">Sort By:</span>
								<select className="input">
										<option value="0">Position</option>
										<option value="0">Price</option>
										<option value="0">Rating</option>
									</select>
								<a href="#" className="main-btn icon-btn"><i className="fa fa-arrow-down"></i></a>
							</div>
						</div>
						<div className="pull-right">
							<div className="page-filter">
								<span className="text-uppercase">Show:</span>
								<select className="input">
										<option value="0">10</option>
										<option value="1">20</option>
										<option value="2">30</option>
									</select>
							</div>
							<ul className="store-pages">
								<li><span className="text-uppercase">Page:</span></li>
								<li className="active">1</li>
								<li><a href="#">2</a></li>
								<li><a href="#">3</a></li>
								<li><a href="#"><i className="fa fa-caret-right"></i></a></li>
							</ul>
						</div>
					</div>
		
					<div id="store">
				
						<div className="row">
		
							<div className="col-md-4 col-sm-6 col-xs-6">
								<div className="product product-single">
									<div className="product-thumb">
										<div className="product-label">
											<span>New</span>
											<span className="sale">-20%</span>
										</div>
										<button className="main-btn quick-view"><i className="fa fa-search-plus"></i> Quick view</button>
										<img src="./img/product01.jpg" alt=""/>
									</div>
									<div className="product-body">
										<h3 className="product-price">$32.50 <del className="product-old-price">$45.00</del></h3>
										<div className="product-rating">
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star-o empty"></i>
										</div>
										<h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
										<div className="product-btns">
											<button className="main-btn icon-btn"><i className="fa fa-heart"></i></button>
											<button className="main-btn icon-btn"><i className="fa fa-exchange"></i></button>
											<button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
										</div>
									</div>
								</div>
							</div>
						
							<div className="col-md-4 col-sm-6 col-xs-6">
								<div className="product product-single">
									<div className="product-thumb">
										<button className="main-btn quick-view"><i className="fa fa-search-plus"></i> Quick view</button>
										<img src="./img/product02.jpg" alt=""/>
									</div>
									<div className="product-body">
										<h3 className="product-price">$32.50</h3>
										<div className="product-rating">
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star-o empty"></i>
										</div>
										<h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
										<div className="product-btns">
											<button className="main-btn icon-btn"><i className="fa fa-heart"></i></button>
											<button className="main-btn icon-btn"><i className="fa fa-exchange"></i></button>
											<button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
										</div>
									</div>
								</div>
							</div>


							<div className="clearfix visible-sm visible-xs"></div>

				
							<div className="col-md-4 col-sm-6 col-xs-6">
								<div className="product product-single">
									<div className="product-thumb">
										<div className="product-label">
											<span>New</span>
											<span className="sale">-20%</span>
										</div>
										<button className="main-btn quick-view"><i className="fa fa-search-plus"></i> Quick view</button>
										<img src="./img/product03.jpg" alt=""/>
									</div>
									<div className="product-body">
										<h3 className="product-price">$32.50 <del className="product-old-price">$45.00</del></h3>
										<div className="product-rating">
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star-o empty"></i>
										</div>
										<h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
										<div className="product-btns">
											<button className="main-btn icon-btn"><i className="fa fa-heart"></i></button>
											<button className="main-btn icon-btn"><i className="fa fa-exchange"></i></button>
											<button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
										</div>
									</div>
								</div>
							</div>
		

							<div className="clearfix visible-md visible-lg"></div>

		
							<div className="col-md-4 col-sm-6 col-xs-6">
								<div className="product product-single">
									<div className="product-thumb">
										<div className="product-label">
											<span>New</span>
										</div>
										<button className="main-btn quick-view"><i className="fa fa-search-plus"></i> Quick view</button>
										<img src="./img/product04.jpg" alt=""/>
									</div>
									<div className="product-body">
										<h3 className="product-price">$32.50</h3>
										<div className="product-rating">
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star-o empty"></i>
										</div>
										<h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
										<div className="product-btns">
											<button className="main-btn icon-btn"><i className="fa fa-heart"></i></button>
											<button className="main-btn icon-btn"><i className="fa fa-exchange"></i></button>
											<button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
										</div>
									</div>
								</div>
							</div>
			

							<div className="clearfix visible-sm visible-xs"></div>

							<div className="col-md-4 col-sm-6 col-xs-6">
								<div className="product product-single">
									<div className="product-thumb">
										<div className="product-label">
											<span>New</span>
										</div>
										<button className="main-btn quick-view"><i className="fa fa-search-plus"></i> Quick view</button>
										<img src="./img/product05.jpg" alt=""/>
									</div>
									<div className="product-body">
										<h3 className="product-price">$32.50</h3>
										<div className="product-rating">
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star-o empty"></i>
										</div>
										<h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
										<div className="product-btns">
											<button className="main-btn icon-btn"><i className="fa fa-heart"></i></button>
											<button className="main-btn icon-btn"><i className="fa fa-exchange"></i></button>
											<button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
										</div>
									</div>
								</div>
							</div>
				

							<div className="col-md-4 col-sm-6 col-xs-6">
								<div className="product product-single">
									<div className="product-thumb">
										<div className="product-label">
											<span>New</span>
											<span className="sale">-20%</span>
										</div>
										<button className="main-btn quick-view"><i className="fa fa-search-plus"></i> Quick view</button>
										<img src="./img/product06.jpg" alt=""/>
									</div>
									<div className="product-body">
										<h3 className="product-price">$32.50 <del className="product-old-price">$45.00</del></h3>
										<div className="product-rating">
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star-o empty"></i>
										</div>
										<h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
										<div className="product-btns">
											<button className="main-btn icon-btn"><i className="fa fa-heart"></i></button>
											<button className="main-btn icon-btn"><i className="fa fa-exchange"></i></button>
											<button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
										</div>
									</div>
								</div>
							</div>
					

							<div className="clearfix visible-md visible-lg visible-sm visible-xs"></div>

							<div className="col-md-4 col-sm-6 col-xs-6">
								<div className="product product-single">
									<div className="product-thumb">
										<div className="product-label">
											<span>New</span>
											<span className="sale">-20%</span>
										</div>
										<button className="main-btn quick-view"><i className="fa fa-search-plus"></i> Quick view</button>
										<img src="./img/product07.jpg" alt=""/>
									</div>
									<div className="product-body">
										<h3 className="product-price">$32.50 <del className="product-old-price">$45.00</del></h3>
										<div className="product-rating">
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star-o empty"></i>
										</div>
										<h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
										<div className="product-btns">
											<button className="main-btn icon-btn"><i className="fa fa-heart"></i></button>
											<button className="main-btn icon-btn"><i className="fa fa-exchange"></i></button>
											<button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
										</div>
									</div>
								</div>
							</div>
		
							<div className="col-md-4 col-sm-6 col-xs-6">
								<div className="product product-single">
									<div className="product-thumb">
										<button className="main-btn quick-view"><i className="fa fa-search-plus"></i> Quick view</button>
										<img src="./img/product08.jpg" alt=""/>
									</div>
									<div className="product-body">
										<h3 className="product-price">$32.50</h3>
										<div className="product-rating">
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star-o empty"></i>
										</div>
										<h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
										<div className="product-btns">
											<button className="main-btn icon-btn"><i className="fa fa-heart"></i></button>
											<button className="main-btn icon-btn"><i className="fa fa-exchange"></i></button>
											<button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
										</div>
									</div>
								</div>
							</div>
			

							<div className="clearfix visible-sm visible-xs"></div>

							<div className="col-md-4 col-sm-6 col-xs-6">
								<div className="product product-single">
									<div className="product-thumb">
										<div className="product-label">
											<span className="sale">-20%</span>
										</div>
										<button className="main-btn quick-view"><i className="fa fa-search-plus"></i> Quick view</button>
										<img src="./img/product01.jpg" alt=""/>
									</div>
									<div className="product-body">
										<h3 className="product-price">$32.50 <del className="product-old-price">$45.00</del></h3>
										<div className="product-rating">
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star-o empty"></i>
										</div>
										<h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
										<div className="product-btns">
											<button className="main-btn icon-btn"><i className="fa fa-heart"></i></button>
											<button className="main-btn icon-btn"><i className="fa fa-exchange"></i></button>
											<button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
										</div>
									</div>
								</div>
							</div>
					
						</div>
					
					</div>
			

			
					<div className="store-filter clearfix">
						<div className="pull-left">
							<div className="row-filter">
								<a href="#"><i className="fa fa-th-large"></i></a>
								<a href="#" className="active"><i className="fa fa-bars"></i></a>
							</div>
							<div className="sort-filter">
								<span className="text-uppercase">Sort By:</span>
								<select className="input">
										<option value="0">Position</option>
										<option value="0">Price</option>
										<option value="0">Rating</option>
									</select>
								<a href="#" className="main-btn icon-btn"><i className="fa fa-arrow-down"></i></a>
							</div>
						</div>
						<div className="pull-right">
							<div className="page-filter">
								<span className="text-uppercase">Show:</span>
								<select className="input">
										<option value="0">10</option>
										<option value="1">20</option>
										<option value="2">30</option>
									</select>
							</div>
							<ul className="store-pages">
								<li><span className="text-uppercase">Page:</span></li>
								<li className="active">1</li>
								<li><a href="#">2</a></li>
								<li><a href="#">3</a></li>
								<li><a href="#"><i className="fa fa-caret-right"></i></a></li>
							</ul>
						</div>
					</div>
			>
				</div>
	
			</div>
	
		</div>


	</div>



















            </div>
        );
    }
}

export default HomePage;
