import { Col, Container, Row } from "react-bootstrap";
import { StoreProduct } from "../components/StoreProduct";
import products from "../data/products.json";
import { motion } from "framer-motion";

const Store = () => {
	return (
    <Container>
		<motion.div className='store' initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity:0, transition: {duration: 0.25} }}>
			<h1 className="store__title">Our Products</h1>
      <Row xs={1} md={2} lg={3} className="g-3">
        {products.map(product => (
        <Col key={product.id}><StoreProduct {...product}/></Col>
        ))}
      </Row>
		</motion.div>
    </Container>
	);
};

export default Store;
