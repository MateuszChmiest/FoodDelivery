import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const HomeBanner = () => {

  const navigate = useNavigate()

  return (
    <div className='home__banner'>
      <div className='home__text'>
        <h1>The Best Food in Town!</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <Button variant="danger" className="home__btn" onClick={() => navigate('/shop')}>Order Now!</Button>
      </div>
    </div>
  )
}

export default HomeBanner