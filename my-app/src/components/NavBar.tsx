import React, { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import logo from "./logo.png";
import { BsFillCartFill } from "react-icons/bs";
import { FaHamburger } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import clsx from "clsx";
import { useCartContext } from "../context/CartContext";

const NavBar = () => {
	const navigate = useNavigate();
	const [nav, setNav] = useState<boolean>(false);
	const [navBackground, setNavBackground] = useState<boolean>(false);
	const navRef = useRef<boolean>();
	navRef.current = navBackground;
	const { cartQuantity, openCart } = useCartContext();

	const quantity = cartQuantity;

	useEffect(() => {
		const handleScroll = () => {
			const show = window.scrollY > window.innerHeight / 16;

			if (navRef.current !== show) {
				setNavBackground(show);
			}
		};
		document.addEventListener("scroll", handleScroll);
		return () => {
			document.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<>
			<div className={clsx("nav", { 'nav__active': navBackground })}>
				<div className='contactNav'>
					<p>Telephone Orders +1 484 1234567</p>
				</div>
				<Container>
					<div className='nav__container'>
						<img
							src={logo}
							className='nav__logo'
							alt='logo'
							onClick={() => navigate("/")}
						/>
						<div className='nav__menu'>
							<Link to={"/"} className='nav__menu--link'>
								Home
							</Link>
							<Link to={"/store"} className='nav__menu--link'>
								Store
							</Link>
							<Link to={"/about"} className='nav__menu--link'>
								About Us
							</Link>
						</div>

						<div
							className={clsx("nav__mobileMenu", {
								"nav__mobileMenu--active": nav,
							})}>
							<button className="nav__mobileMenu--close" onClick={() => setNav(!nav)}><AiOutlineClose size="1.25em"/></button>
							<Link to={"/"} className='nav__mobileMenu--link'>
								Home
							</Link>
							<Link to={"/store"} className='nav__mobileMenu--link'>
								Store
							</Link>
							<Link to={"/about"} className='nav__mobileMenu--link'>
								About Us
							</Link>
							<img src={logo} alt="logo" className="nav__mobileMenu--logo"/>
						</div>

						<div>
							<button className='nav__checkout' onClick={openCart}>
								<BsFillCartFill size='1.25em' />
								{quantity === 0 ? null : (
									<div className='nav__checkout--counter'>{quantity}</div>
								)}
							</button>
							<button
								className={clsx("nav__burger", { "nav__burger--active": nav })}
								onClick={() => setNav(!nav)}>
								<FaHamburger size='1.25em' />
							</button>
						</div>
					</div>
				</Container>
			</div>
		</>
	);
};

export default NavBar;
