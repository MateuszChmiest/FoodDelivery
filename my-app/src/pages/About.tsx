import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <motion.div className='about' initial={{width: 0}} animate={{width: "100%"}} exit={{x: window.innerWidth, transition: {duration: 0.2} }}>About</motion.div>
  )
}

export default About