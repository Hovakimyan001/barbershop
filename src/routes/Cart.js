import React, { useContext } from 'react'
import { Context } from '../components/Context';
import Counts from '../components/Counts';
import { FaTrash } from 'react-icons/fa'
import {Link} from 'react-router-dom';
import { MdShoppingCartCheckout } from "react-icons/md";
export default function Cart() {
  const _ = useContext(Context);
  return (
    <>
     
      <div className='cart' style={{gridTemplateColumns : _.cart.length == 0 ? '5fr' : '4fr'}}>
      <h2 className='title'>Shop Cart</h2>
        {
          _.cart.length == 0 ?  <div className="empty">
            <h3>Cart is Empty</h3>
            <MdShoppingCartCheckout />
          <Link to='/Shop'>Go to shop</Link>
        </div> : <>
            <div className="cart-content">
              {_.cart.map((item) => {
                return (
                  <div className="cart-item" key={item.id}>
                    <img src={item.picture} alt="" />
                    <h2>{item.name}</h2>
                    <Counts item={item} />
                    <span>{item.price * item.isQuan}$</span>
                    <FaTrash
                      onClick={() => {
                        if (_.cart.length <= 1) {
                          _.setOpenCopy(false);
                          _.setOpenCartCopy(false);
                        }
                        _.removeCart(item.id);
                        _.setTotal(_.total - (item.price * item.isQuan));
                        item.isQuan = 1;
                      }}
                    />
                  </div>
                );
              })}
            </div>
            <div className="cart-total">
              <h3>Cart count is {_.cart.length}</h3>
              <span>
                <h2>Total :</h2>
                <span>{_.total}$</span>
              </span>
              <span>
                <h2>Delivery :</h2>
                <span>10$</span>
              </span>
              <span>
                <h2>Grand Total :</h2>
                <span>{_.total + 10}$</span>
              </span>
            </div>
          </>
        }
      </div>
    </>
  )
}
