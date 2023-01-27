import { Col, Container, Row } from "react-bootstrap";
import { StoreProduct } from "../components/StoreProduct";
import products from "../data/products.json";

const Store = () => {
	return (
    <Container>
		<div className='store'>
			<h1 className="store__title">Our Products</h1>
      <Row xs={1} md={2} lg={3} className="g-3">
        {products.map(product => (
        <Col key={product.id}><StoreProduct {...product}/></Col>
        ))}
      </Row>
		</div>
    </Container>
	);
};

export default Store;
