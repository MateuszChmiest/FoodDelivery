import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Typewriter from 'typewriter-effect'

const HomeBanner = () => {

  const navigate = useNavigate()

  return (
    <div className='home__banner'>
      <div className='home__text'>
        <h1>							<Typewriter
							options={{
								deleteSpeed: 100,
								loop: true,
								delay: 80,
							}}
								onInit={(typewriter) => {
									typewriter
										.typeString("The best food in City!")
										.pauseFor(300)
										.deleteAll()
										.typeString("Check our dishes!")
										.pauseFor(300)
                    .deleteAll()
                    .typeString("Order quickly and safely!")
                    .pauseFor(300)
										.start();
								}}
							/></h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <Button variant="danger" className="home__btn" onClick={() => navigate('/store')}>Order Now!</Button>
      </div>
    </div>
  )
}

export default HomeBanner