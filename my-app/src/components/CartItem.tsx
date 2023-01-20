import React from "react";
import { Button, Stack } from "react-bootstrap";
import { useCartContext } from "../context/CartContext";
import storeItems from "../data/products.json";
import { formatCurrency } from "../utilities/formatCurrency";
import {AiOutlineClose} from "react-icons/ai"

const CartItems = ({ id, quantity }: CartItemsProps) => {
	const { removeCart } = useCartContext();
	const cartItem = storeItems.find((i) => i.id === id);
	if (cartItem == null) return null;

	return (
		<Stack direction='horizontal' gap={2} className='d-flex align-items-center justify-content-between'>
			<img
				src={cartItem.imgUrl}
				className="cartImg"
			/>
			<div>
				<div className="cartInfo">
					{cartItem.name}{" "}
					<span className="text-muted cartInfo__quantity">x{quantity}</span>
				</div>
				<div className="text-muted cartPrice">
					{formatCurrency(cartItem.price)}
				</div>
			</div>
			<div className="cartPrice">
				{formatCurrency(cartItem.price * quantity)}
			</div>
			<Button variant="outline-danger" size="sm" onClick={() => removeCart(cartItem.id)}><AiOutlineClose size={10}/></Button>
		</Stack>
	);
};

type CartItemsProps = {
	id: number;
	quantity: number;
};

export default CartItems;
