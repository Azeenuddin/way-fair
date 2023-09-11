import React from 'react'
import Header from '../header/header'
import HeroSection from './hero-section/hero-section'
import ShopProducts from './shop-products/shop-products'
import KitchenGameChanger from './kitchen-game-changer/kitchen-game-changer'
import MostSaleProduct from './most-sale-product/most-sale-product'
import BrandTrust from './brand trust/brand-trust'


const HomePage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <ShopProducts />
      <KitchenGameChanger/>
      <MostSaleProduct/>
      <BrandTrust/>
    </div>
  )
}

export default HomePage