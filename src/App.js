import { Route, Routes } from "react-router-dom";
import "./App.css";
import FixHeader from "./components/FixHeader";
import Shop from "./shop/Shop";
import Contact from "./contact/Contact";
import Footer from "./components/Footer";
import Footercopy from "./components/Footercopy";
import Home from "./home/Home";
import Service from "./service/Service";
import Showcard from "./components/Showcard";
import { Context } from "./components/Context";
import { useState } from "react";
import Cart from "./routes/Cart";
import Queuing from "./queuing/Queuing";

function App() {
  const [cart, setCart] = useState([]);
  const [openCartCopy, setOpenCartCopy] = useState(false);
  const [openCopy, setOpenCopy] = useState(false);
  const [money, setMoney] = useState(0);
  const [total,setTotal] = useState(0);
  const addCart = (item) => setCart([...cart, item]);
  const removeCart = (id) => setCart([...cart.filter((item) => item.id !== id)]);
 
  const _ = {
    cart,
    setCart,
    addCart,
    openCartCopy,
    setOpenCartCopy,
    openCopy,
    setOpenCopy,
    removeCart,
    money, setMoney,
    total,setTotal
  };
  return (
    <Context.Provider value={_}>
      <div className="App">
        <FixHeader />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Shop" element={<Shop />}></Route>
          <Route path="/Service" element={<Service />}></Route>
          <Route path="/Contacts" element={<Contact />}></Route>
          <Route path="/Cart" element={<Cart />}> </Route>
          <Route path="/Queuing" element={<Queuing />}></Route>
        </Routes>
        <Footer />
        <Footercopy />
        <Showcard />
      </div>
    </Context.Provider>
  );
}

export default App;