import React from "react";
import HomeBanner from "../components/HomeBanner";
import HomeCarousel from "../components/HomeCarousel";
import { motion } from "framer-motion";

const Home = () => {
	return (
		<motion.div className='home' initial={{width: 0, opacity: 0}} animate={{width: "100%", opacity: 1}} exit={{x: window.innerWidth, transition: {duration: 0.15}, opacity: 0 }}>
			<HomeBanner />
			<HomeCarousel/>
		</motion.div>
	);
};

export default Home;
