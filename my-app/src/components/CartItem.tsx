import React from "react";
import { Stack } from "react-bootstrap";
import { useCartContext } from "../context/CartContext";
import storeItems from "../data/products.json";

const CartItems = ({ id, quantity }: CartItemsProps) => {
	const { removeCart } = useCartContext();
	const cartItem = storeItems.find((i) => i.id === id);
	if (cartItem == null) return null;

	return (
		<Stack direction='horizontal' gap={2} className='d-flex align-items-center'>
			<img
				src={cartItem.imgUrl}
				style={{ width: "120px", height: "75px", objectFit: "cover" }}
			/>
			<div>
				<div>
					{cartItem.name}{" "}
					<span className="text-muted">x{quantity}</span>
          <br/>{cartItem.price}$
				</div>
			</div>
		</Stack>
	);
};

type CartItemsProps = {
	id: number;
	quantity: number;
};

export default CartItems;
