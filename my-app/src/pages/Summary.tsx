import React, { useState } from "react";
import { Button, Col, Container, Form, Row, Stack } from "react-bootstrap";
import CartItem from "../components/CartItem";
import { useCartContext } from "../context/CartContext";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { formatCurrency } from "../utilities/formatCurrency";
import products from "../data/products.json";

const Summary = () => {
	const { cartItems, cartQuantity } = useCartContext();
	const navigate = useNavigate();
	const [payment, setPayment] = useState<string>("");

	const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPayment(e.target.value);
	};

	return (
		<Container>
			<div className='summary'>
				<div className='summary__back'>
					<p onClick={() => navigate("/store")}>
						<BsFillArrowLeftSquareFill size={19} color={"#f9b041"} /> Continue
						shopping
					</p>
				</div>
				<Row xs={1} className='d-flex flex-column-reverse flex-lg-row'>
					<Col lg={7} xl={8}>
						<h2 className='summary__billing'>Billing address</h2>
						<Form className='summary__address'>
							<Row className='mb-3'>
								<Form.Group as={Col}>
									<Form.Label>First Name</Form.Label>
									<Form.Control type='text' placeholder='First Name' />
								</Form.Group>
								<Form.Group as={Col}>
									<Form.Label>Last Name</Form.Label>
									<Form.Control type='text' placeholder='Last Name' />
								</Form.Group>
							</Row>
							<Form.Group className='mb-3'>
								<Form.Label>Address</Form.Label>
								<Form.Control type="text" placeholder='1234 Main St' />
							</Form.Group>
							<Form.Group className='mb-3'>
								<Form.Label>Address 2 (Optional)</Form.Label>
								<Form.Control type="text" placeholder='Apartment, studio, or floor' />
							</Form.Group>
							<Row className='mb-3'>
								<Form.Group as={Col}>
									<Form.Label>City</Form.Label>
									<Form.Control type="text" />
								</Form.Group>

								<Form.Group as={Col}>
									<Form.Label>Zip</Form.Label>
									<Form.Control type="text"/>
								</Form.Group>
							</Row>
							<hr className='mt-4 mb-2' />
							<Form.Label column sm={2} className='fs-4 mb-2 '>
								Payment
							</Form.Label>
							<Form.Check
								type='radio'
								label='Credit card'
								id='formHorizontalRadios1'
								value='Credit'
								onChange={handleRadioChange}
								checked={payment === "Credit"}
							/>
							<Form.Check
								type='radio'
								label='Debit card'
								id='formHorizontalRadios2'
								value='Debit'
								onChange={handleRadioChange}
								checked={payment === "Debit"}
							/>
							<Form.Check
								type='radio'
								label='PayPal'
								id='formHorizontalRadios3'
								value='Paypal'
								onChange={handleRadioChange}
								checked={payment === "Paypal"}
							/>
							<Row className='mb-3 mt-3'>
								<Form.Group as={Col}>
									<Form.Label>Name on card</Form.Label>
									<Form.Control placeholder="VISA"/>
								</Form.Group>

								<Form.Group as={Col}>
									<Form.Label>Credit card number</Form.Label>
									<Form.Control placeholder="4513 2568 5876 0869"/>
								</Form.Group>
							</Row>
							<Row className='mb-4'>
								<Form.Group as={Col}>
									<Form.Label>Expiration</Form.Label>
									<Form.Control placeholder="00/0000"/>
								</Form.Group>
								<Form.Group as={Col}>
									<Form.Label>CVV</Form.Label>
									<Form.Control placeholder="123"/>
								</Form.Group>
								<Form.Group as={Col}></Form.Group>

								<Form.Group as={Col}></Form.Group>
							</Row>
							<hr />
							<Button
								variant='outline-danger'
								type='submit'
								size='lg'
								className='w-100 mt-3'>
								Submit Order
							</Button>
						</Form>
					</Col>
					<Col lg={5} xl={4}>
						<div className='summary__quantity'>
							<h2>Your cart</h2>
							<span>{cartQuantity}</span>
						</div>
						<div className='summary__cart'>
							<Stack gap={2}>
								{cartItems.map((item) => (
									<CartItem key={item.id} {...item} />
								))}
							</Stack>
							<hr />
							<div className='fw-bold fs-5 mt-2'>
								Total price:{" "}
								{formatCurrency(
									cartItems.reduce((total, cartItem) => {
										const item = products.find((i) => i.id === cartItem.id);

										return total + (item?.price || 0) * cartItem.quantity;
									}, 0)
								)}
							</div>
						</div>
					</Col>
				</Row>
			</div>
		</Container>
	);
};

export default Summary;
