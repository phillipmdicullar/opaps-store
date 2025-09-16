import React from 'react'
import OrangeImg from "./orange.png"
import CabbageImg from "./cab.png"
import "./offers.css";
function Offers() {
  return (
    <div className='offers'>
        <div className="offers-left">
            <div className="left-details">
                <p>Buy 20kgs at kes 800</p>
                <p>Get 5kgs free</p>
                <button>purchase</button>
            </div>
            <img src={OrangeImg} />
        </div>
        <div className="offers-right">
            <div className="right-details">
                <p>Buy 10kgs at kes 500</p>
                <p>Get 2kgs free</p>
                <button>purchase</button>
            </div>
            <img src={CabbageImg} />
        </div>
    </div>
  )
}

export default Offers