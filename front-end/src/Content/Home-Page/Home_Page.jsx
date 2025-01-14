import React from 'react'
import FirstRecommended from './Recommended/FirstRecommended'
import Featured_Products from './Featured-Products/Featured_Products'
import Discount from './Featured-Products/Discount'
import PurchaseOnline from './Purchased-Online/PurchaseOnline'

function Home_Page() {
  return (
    <>
        <FirstRecommended />
        <Featured_Products />
        <Discount />
        <PurchaseOnline />
    </>
  )
}

export default Home_Page
