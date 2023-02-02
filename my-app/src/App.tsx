import Layout from "./components/Layout";
import { CartProvider } from "./context/CartContext";
import { Container } from "react-bootstrap";
import AnimatedRoutes from "./components/AnimatedRoutes";

const App = () => {



	return (
		<CartProvider>
			<Layout>
				<Container>
					<AnimatedRoutes/>
				</Container>
			</Layout>
		</CartProvider>
	);
};

export default App;
