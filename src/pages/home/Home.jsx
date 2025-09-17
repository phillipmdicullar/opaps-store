import React from 'react'
import "./home.css";
import oneImg from "./1.png"
import twoImg from "./2.png"
import Categories from './section/categories/Categories';
import FeaturedProducts from './section/featured/FeaturedProducts';
import NewProducts from './section/new/NewProducts';
import Offers from './section/offers/Offers';
import Top from './section/top/Top';
function Home() {
  return (
    <div className='top-layer'>    <div className='home'>
        <div className="wrapper">
            <div className="left-side">
            <p><span>Guaranteed</span> 100% organic product</p>
        </div>
        <div className="b">
            <p><span>Opaps</span> Online Fresh</p>
        </div>
        <div className="last">
            <p>Grocery <span>Product</span></p>
        </div>
        <div className="buttons">
            <button className='shop-now'>Shop Now</button>
            <button className='contact-us'>Contact Us</button>
        </div>
        </div>
        <div className="right-side">
            <img src={oneImg}/>
            <img src={twoImg}/>
        </div>
    </div>
    <Categories/>
        <FeaturedProducts />
      <NewProducts />
      <Offers />
      <Top />
    </div>
  )
}

export default Home