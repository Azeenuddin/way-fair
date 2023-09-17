import React from 'react'
import Header from '../header/header'
import HeroSection from './hero-section/hero-section'
import ShopProducts from './shop-products/shop-products'
import KitchenGameChanger from './kitchen-game-changer/kitchen-game-changer'
import MostSaleProduct from './most-sale-product/most-sale-product'
import BrandTrust from './brand trust/brand-trust'
import WayFairBrands from './way-fair-brands/way-fair-brands'
import OurServices from './our-services/our-services'


const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <ShopProducts />
      <KitchenGameChanger/>
      <MostSaleProduct/>
      <BrandTrust/>
      <WayFairBrands />
      <OurServices />
    </div>
  )
}

export default HomePage