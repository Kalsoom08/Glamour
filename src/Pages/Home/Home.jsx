import React from 'react'
import Hero from '../../Components/Hero/Hero'
import AllCategories from '../Categories/AllCategories'
import Accessories from '../Categories/Accessories'
import Men from '../Categories/Men'
import Women from '../Categories/Women';

const Home = () => {
  return (
    <div>
      <Hero/>
      <AllCategories/>
      <Accessories/>
      <Men/>
      <Women/>
      
    </div>
  )
}

export default Home