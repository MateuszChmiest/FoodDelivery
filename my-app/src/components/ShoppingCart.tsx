import React from "react";
import { Offcanvas, Stack } from "react-bootstrap";
import { useCartContext } from "../context/CartContext";
import CartItem from "./CartItem";

const ShoppingCart = () => {
	const { isOpen, closeCart, cartItems } = useCartContext();
	return (
		<Offcanvas show={isOpen} onHide={closeCart} placement='end'>
			<Offcanvas.Header closeButton>
				<Offcanvas.Title className='m-auto'>My Order</Offcanvas.Title>
			</Offcanvas.Header>
			<Offcanvas.Body>
				<Stack gap={3}>
					{cartItems.map((item) => (
						<CartItem key={item.id} {...item} />
					))}
				</Stack>
			</Offcanvas.Body>
		</Offcanvas>
	);
};

export default ShoppingCart;
