import React from 'react'
import FirstRecommended from './Recommended/FirstRecommended'
import Featured_Products from './Featured-Products/Featured_Products'
import Discount from './Featured-Products/Discount'

function Home_Page() {
  return (
    <>
        <FirstRecommended />
        <Featured_Products />
        <Discount />
    </>
  )
}

export default Home_Page
