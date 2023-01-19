import { Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";
import Layout from "./components/Layout";
import { CartProvider } from "./context/CartContext";

const App = () => {
	return (
		<CartProvider>
			<Layout>
				<Container>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/store' element={<Store />} />
						<Route path='/about' element={<About />} />
					</Routes>
				</Container>
			</Layout>
		</CartProvider>
	);
};

export default App;
