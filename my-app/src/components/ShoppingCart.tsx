import React, { useState } from "react";
import { Button, Offcanvas, Stack } from "react-bootstrap";
import { useCartContext } from "../context/CartContext";
import CartItem from "./CartItem";
import { CgSmileSad } from "react-icons/cg";
import { formatCurrency } from "../utilities/formatCurrency";
import products from "../data/products.json";
import { useNavigate } from "react-router-dom";

const ShoppingCart = () => {
	const { isOpen, closeCart, cartItems } = useCartContext();
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const handleSubmit = () => {
		if (cartItems.length === 0) return;
		setIsLoading(true);

		setTimeout(() => {
			setIsLoading(false);
			navigate("/summary");
			closeCart();
		}, 1000);
	};

	return (
		<Offcanvas show={isOpen} onHide={closeCart} placement='end'>
			<Offcanvas.Header closeButton>
				<Offcanvas.Title className='m-auto'>My Order</Offcanvas.Title>
			</Offcanvas.Header>
			<Offcanvas.Body>
				<Stack gap={3}>
					{cartItems.length === 0 && (
						<h1 className='cartEmpty'>
							Your cart is empty.. <CgSmileSad size={20} />
						</h1>
					)}
					{cartItems.map((item) => (
						<CartItem key={item.id} {...item} />
					))}

					{cartItems.length === 0 ? null : (
						<>
							<div className='ms-auto fw-bold fs-6 mt-4'>
								Total price:{" "}
								{formatCurrency(
									cartItems.reduce((total, cartItem) => {
										const item = products.find((i) => i.id === cartItem.id);

										return total + (item?.price || 0) * cartItem.quantity;
									}, 0)
								)}
							</div>
							<Button variant='danger' onClick={handleSubmit} disabled={isLoading}>
								{isLoading ? "Loading.." : "Go to checkout"}
							</Button>
						</>
					)}
				</Stack>
			</Offcanvas.Body>
		</Offcanvas>
	);
};

export default ShoppingCart;
