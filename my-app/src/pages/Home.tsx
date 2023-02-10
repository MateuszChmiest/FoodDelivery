import React from "react";
import HomeBanner from "../components/HomeBanner";
import HomeCarousel from "../components/HomeCarousel";
import { motion } from "framer-motion";

const Home = () => {
	return (
		<motion.div className='home' initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity:0, transition: {duration: 0.25} }}>
			<HomeBanner />
			<HomeCarousel/>
		</motion.div>
	);
};

export default Home;
