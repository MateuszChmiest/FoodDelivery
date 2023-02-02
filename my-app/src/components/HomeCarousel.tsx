import React from "react";
import burgerking from "../assets/burger_king.png";
import tacotime from "../assets/tacotime.png";
import chipotle from "../assets/chipotle.png";
import kebab from "../assets/kebab.jpg";
import kfc from "../assets/kfc.jpeg";
import mcdonalds from "../assets/mcdonalds.webp";
import subway from "../assets/subway.svg";
import tacobell from "../assets/tacobell.png";
import togos from "../assets/togos.png";

const HomeCarousel = () => {
	return (
		<div>
			<p className="title">OUR PARTNERS</p>
			<div className='carousel'>
				<div className='carousel__slider'>
					<div className='carousel__track'>
						<div className='carousel__slide'>
							<img src={burgerking} alt='burger king' />
						</div>
						<div className='carousel__slide'>
							<img src={tacotime} alt='tacotime' />
						</div>
						<div className='carousel__slide'>
							<img src={chipotle} alt='chipotle' />
						</div>
						<div className='carousel__slide'>
							<img src={kebab} alt='kebab' />
						</div>
						<div className='carousel__slide'>
							<img src={kfc} alt='kfc' />
						</div>
						<div className='carousel__slide'>
							<img src={mcdonalds} alt='mcdonalds' />
						</div>
						<div className='carousel__slide'>
							<img src={subway} alt='subway' />
						</div>
						<div className='carousel__slide'>
							<img src={tacobell} alt='tacobell' />
						</div>
						<div className='carousel__slide'>
							<img src={togos} alt='togos' />
						</div>
						<div className='carousel__slide'>
							<img src={burgerking} alt='burger king' />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomeCarousel;
