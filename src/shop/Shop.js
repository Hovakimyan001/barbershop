import React, { useContext, useState } from "react";
import { list } from "../components/list";
import { swiperList } from "../components/swiperlist";
import { Swiper, SwiperSlide } from "swiper/react";
import { HiShoppingCart } from 'react-icons/hi';
import "swiper/css";
import { Context } from "../components/Context";
import { Link } from 'react-router-dom'
import { AiFillSetting } from 'react-icons/ai';
import { BsCheck2 } from 'react-icons/bs'
export default function Shop() {
  const _ = useContext(Context);
  const categories = ['All', 'Beard', 'Gear', 'Candles', 'Deodorant', 'Unisex Cologne', 'Shave', 'Skincare', 'Shampoo', 'Fragrance'];
  const [filterlist, setFilterlist] = useState(list);
  const filtered = item => {
    let fill = list.filter(it => it.categories === item)
    setFilterlist(fill)
  }
  return (
    <>
      <div className="background-img">
        <h2>Choose the Proffesional</h2>
      </div>
      <h2 className="title">Shop</h2>
      <h3 className="second-title">Sales Products</h3>
      <Swiper spaceBetween={50} slidesPerView={window.innerWidth <= 1820 ? 1 : 4} grabCursor='true'>
        {swiperList.map(item => {
          return <SwiperSlide>
            <div className="item">
              <div className="sale">10%</div>
              <img src={item.picture} alt="" />
              <h2 style={{ textDecoration: 'line-through', color: 'var(--barberColor1)' }}>{item.price}$</h2>
              <h2>{item.price - (item.price * 10 / 100)}$</h2>
              <p>{item.name}</p>
              <button style={{ cursor: 'pointer' }}>Show More</button>
            </div>
          </SwiperSlide>
        })}
      </Swiper>
      <div className="shop_container">
        <div className="shop_categories">
          {categories.map(cat => {
            return <span onClick={() => {
              cat == 'All' ? setFilterlist(list) : filtered(cat)
            }}>{cat}</span>
          })}
        </div>
        <div className="shop_content">
          {filterlist.map((item) => {
            return (
              <div className="shop-item">
                <Link className="cart-icon" to='/Cart'>
                  <HiShoppingCart />
                </Link>
                <img src={item.picture} alt="" />
                <h2>{item.name}</h2>
                <p>{item.info}</p>
                <span>{item.price}$</span>
                <button style={{opacity : _.cart.includes(item) ? 0.3 : 1}} onClick={() => {
                  if (!_.cart.includes(item)) {
                    _.addCart(item);
                    _.setOpenCopy(true);
                    _.setOpenCartCopy(true);
                    _.setTotal(_.total + item.data);
                  }
                }}>{_.cart.includes(item) ? 'Added' : 'Pay now'}{_.cart.includes(item) ? <BsCheck2 style={{color:'green'}}/> : <AiFillSetting />}</button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}