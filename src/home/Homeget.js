import React from 'react'
import { BiSolidCoffeeAlt, BiSolidBook } from 'react-icons/bi';
import { FaWifi } from 'react-icons/fa';
import { PiFlowerLotusFill } from 'react-icons/pi'
export default function Homeget() {
  return (
    <>
    <div className="wifi-side">
        <h2>ENJOY HERE</h2>
        <p>Maecenas imperdiet ac lacus ac convallis. In urna lorem, pellentesque id sagittis lacinia, gravida nec massa quisque ac vestibulum metus, de kategoriyak in dahoy.</p>
        <div className="icons-side">
            <div className="ico">
                <BiSolidCoffeeAlt />
                <span>FREE COFFE</span>
            </div>
            <div className="ico">
                <FaWifi />
                <span>FREE WIFI</span>
            </div>
            <div className="ico">
                <BiSolidBook />
                <span>BOOK MAGAZIN</span>
            </div>
            <div className="ico">
                <PiFlowerLotusFill />
                <span>GOOD VIBES</span>
            </div>

        </div>
    </div>
    <div className='home-get'>
        <div className="get-side">
            <h2>GET 50% OFF</h2>
            <h3>FOR YOUR FIRST HAIRCUT</h3>
            <p>Luctus nec ullamcorper mattis elit tellus</p>
            <button>BOOK NOW</button>
        </div>
        <div className="get-side">
            <h2>GET 15% OFF</h2>
            <h3>FOR EVERY GOODS PURCHASE</h3>
            <p>Elit tellus luctus nec ullamcorper mattis</p>
            <button>BECOME MEMBER</button>
        </div>
    </div>
    </>
  )
}
