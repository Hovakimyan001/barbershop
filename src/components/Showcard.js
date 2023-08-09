import { useContext } from "react";
import { TiTimes } from "react-icons/ti";
import { Context } from "./Context";
import { FaTrash } from "react-icons/fa";
import { Link } from 'react-router-dom'
import Counts from "./Counts";
export default function Showcard() {
  const _ = useContext(Context);
  return (
    <div
      className="cart-overlay"
      style={{
        opacity: _.openCartCopy ? 1 : 0,
        visibility: _.openCartCopy ? "visible" : "hidden",
      }}
    >
      <div
        className="cart-copy"
        style={{
          transform: _.openCopy ? "translateX(0)" : "translateX(600px)",
        }}
      >
        <div className="cart-copy-count">
          <span>Products count ({_.cart.length})</span>
          <TiTimes
            className="closeing-cart-copy"
            onClick={() => {
              _.setOpenCopy(false);
              _.setOpenCartCopy(false);
            }}
          />
        </div>
        {_.cart.map((item) => {
          return (
            <div className="cart-copy-item" key={item.id}>
              <div className="it">
                <img src={item.picture} alt="" />
                <Counts item={item} />
                <span>{item.price}$</span>
              </div>
              <div className="del-it">
                <h2>{item.name}</h2>
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
            </div>
          );
        })}
        <div className="subtotal">
          <span>Subtotal:</span>
          <span>${_.total}</span>
        </div>
        <div className="cart-copy-buttons">
          <button>Checkout</button>
          <Link to='/Cart' onClick={() => {
            _.setOpenCopy(false);
            _.setOpenCartCopy(false);
          }}>
            <button>View cart</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
