import React from "react";
import { Button, Col, Container, Form, Row, Stack } from "react-bootstrap";
import CartItem from "../components/CartItem";
import { useCartContext } from "../context/CartContext";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Summary = () => {
	const { cartItems, cartQuantity } = useCartContext();
	const navigate = useNavigate();

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
								<Form.Control placeholder='1234 Main St' />
							</Form.Group>

							<Form.Group className='mb-3'>
								<Form.Label>Address 2</Form.Label>
								<Form.Control placeholder='Apartment, studio, or floor' />
							</Form.Group>

							<Row className='mb-3'>
								<Form.Group as={Col}>
									<Form.Label>City</Form.Label>
									<Form.Control />
								</Form.Group>

								<Form.Group as={Col}>
									<Form.Label>Zip</Form.Label>
									<Form.Control />
								</Form.Group>
							</Row>

							<Button variant='danger' type='submit' size='lg'>
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
						</div>
					</Col>
				</Row>
			</div>
		</Container>
	);
};

export default Summary;
