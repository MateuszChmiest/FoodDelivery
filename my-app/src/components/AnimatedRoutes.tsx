import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import Store from "../pages/Store";
import { AnimatePresence } from "framer-motion";
import Summary from "../pages/Summary";

const AnimatedRoutes = () => {
	const location = useLocation();

	return (
		<AnimatePresence>
			<Routes location={location} key={location.pathname}>
				<Route path='/' element={<Home />} />
				<Route path='/store' element={<Store />} />
				<Route path='/about' element={<About />} />
				<Route path="/summary" element={<Summary/>} />
			</Routes>
		</AnimatePresence>
	);
};

export default AnimatedRoutes;
