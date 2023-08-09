import { useContext, useState } from "react"
import { Context } from "./Context";

export default function Counts({item}) {
  const [count,setCount] = useState(0);
  const _ = useContext(Context);
  return (
    <div className="counts">
        <button onClick={() => {
          if(count >= 2) {
            setCount(item.isQuan -= 1);
            _.setMoney(item.isQuan * item.price);
            _.setTotal(_.total - item.data);
          }
        }}>-</button>
        <span>{item.isQuan}</span>
        <button onClick={()=>{
          setCount(item.isQuan += 1);
          _.setMoney(item.isQuan * item.price);
          _.setTotal(_.total + item.data);
        }}>+</button>
    </div>
  )
}
