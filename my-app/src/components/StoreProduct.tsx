import { Button, Card } from "react-bootstrap";
import { useCartContext } from "../context/CartContext";
import { formatCurrency } from "../utilities/formatCurrency";

type StoreProductProps = {
	id: number;
	name: string;
	price: number;
	imgUrl: string;
};

export const StoreProduct = ({
	id,
	name,
	price,
	imgUrl,
}: StoreProductProps) => {

	const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeCart } = useCartContext();

	const quantity = getItemQuantity(id);

	return (
		<Card>
			<Card.Img
				variant='top'
				src={imgUrl}
				alt={name}
				loading='lazy'
				height='300px'
				style={{ objectFit: "cover" }}
			/>
			<Card.Body className='d-flex flex-column'>
				<Card.Title className='d-flex justify-content-between align-items-baseline mb-4'>
					<span className='fs-2'>{name}</span>
					<span className='ms-2 text-muted'>{formatCurrency(price)}</span>
				</Card.Title>
				<div className='mt-auto'>
					{quantity === 0 ? (
						<Button variant='outline-danger' className='w-100' onClick={() => increaseCartQuantity(id)}>
							Add to cart
						</Button>
					) : (
						<div
							className='d-flex align-items-center flex-column '
							style={{ gap: ".5rem" }}>
							<div
								className='d-flex align-items-center justify-content-center'
								style={{ gap: ".5rem" }}>
								<Button variant='danger' onClick={() => decreaseCartQuantity(id)}>-</Button>
								<div>
									<span className='fs-3'>{quantity}</span> in cart
								</div>
								<Button variant='danger' onClick={() => increaseCartQuantity(id)}>+</Button>
							</div>
							<Button className='w-100' size='sm' variant='warning' onClick={() => removeCart(id)}>
								Remove
							</Button>
						</div>
					)}
				</div>
			</Card.Body>
		</Card>
	);
};
