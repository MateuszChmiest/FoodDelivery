import { Col, Container, Row } from "react-bootstrap";
import { StoreProduct } from "../components/StoreProduct";
import products from "../data/products.json";
import { motion } from "framer-motion";

const Store = () => {
	return (
    <Container>
		<motion.div className='store' initial={{width: 0, opacity: 0}} animate={{width: "100%", opacity: 1}} exit={{x: window.innerWidth, transition: {duration: 0.2}, opacity: 0 }}>
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
