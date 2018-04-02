import React from 'react';
import "../../assets/css/app.css"
import Logo from "../../assets/images/logo.png"

const Header = () => (
    

		<img src={Logo} alt="Mboutique logo" class="logo"/>
		<ul>
			<li><a href="index.html">welcome</a></li>
			<li><a href="our_macarons.html">our macarons</a></li>
			<li><a href="gifts_parties.html">gifts amp parties</a></li>
			<li><a href="contact.html">contact</a></li>
		</ul>


);


export default Header;

