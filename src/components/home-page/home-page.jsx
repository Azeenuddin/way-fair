import React from 'react'
import Header from '../header/header'
import HeroSection from './hero-section/hero-section'
import ShopProducts from './shop-products/shop-products'
import KitchenGameChanger from './kitchen-game-changer/kitchen-game-changer'


const HomePage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <ShopProducts />
      <KitchenGameChanger/>
    </div>
  )
}

export default HomePage