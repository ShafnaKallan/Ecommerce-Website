import React, { createContext, useState } from "react";
import data from "../Data";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Carousel from "./Carousel";

import Cart from "../Pages/Cart";
import Footer from "../Pages/Footer";
import Griditem from "../Pages/Griditem";
import Home from "../Pages/Home";
import Product from "../Pages/Product";
import Section4 from "../Pages/Section4";
import cartdata from "../cartdata";
import cartval from "../cartval";
import input from "../input";
import Wishlist from "./Wishlist";
import wishdata from "../Wishlistdata";
import Allproduct from "./Allproduct";
import buynow from "../buynow";
import Buynow from "./Buynow";
import Lgin from "./Lgin";
import Checkout from "./checkout";
import checkout from "../checkout";
import Orderplaced from "./Orderplaced";
import totalamount from "./Total";

const newcontext = createContext();
const cartcontext = createContext();
const cartlabelcontext=createContext();
const inputcontext = createContext();
const wishlistdatacontext = createContext();
const buynowcontext = createContext()
const checkoutcontext = createContext()
const totalcontext = createContext()


const Routee = () => {

  const [first, setfirst] = useState(data);


const [second, setsecond] = useState(cartdata);

const [cartvalue, setcartvalue] = useState(cartval)

const [inputval, setinputval] = useState(input)

const [wishlist, setwishlist] = useState(wishdata)

const [buynw, setbuynw] = useState(buynow)

const [checkoutdata, setcheckoutdata] = useState(checkout)

const [total, settotal] = useState(totalamount)

  return (


    <div>
      <newcontext.Provider value={[first, setfirst]}>
<cartcontext.Provider value={[second,setsecond]}>
<cartlabelcontext.Provider value={[cartvalue,setcartvalue]}>
  <inputcontext.Provider value={[inputval,setinputval]}>
<wishlistdatacontext.Provider value={[wishlist, setwishlist]}>
<buynowcontext.Provider value={[buynw,setbuynw]}>
  <checkoutcontext.Provider value={[checkoutdata,setcheckoutdata]}>
    <totalcontext.Provider value={[total,settotal]}>
<BrowserRouter>
<Routes>
  
<Route path="/" element={<><Home/><Carousel/><Griditem/><Section4/><Footer/></>}/>
<Route path="/yourcart" element={<><Cart/></>}/>
<Route path="/viewpage/:name/:product" element={<><Product/></>}/>
<Route path="/allproducts" element={<><Allproduct/></>}/>
<Route path="/yourwishlist" element={<><Wishlist/></>}/>
<Route path="/buynow/:name/:product" element={<><Buynow/></>}/>
<Route path="/login" element={<><Lgin/></>}/>
<Route path="/checkout" element={<><Checkout/></>}/>
<Route path="/orderplaced" element={<><Orderplaced/></>}/>

  </Routes>
  </BrowserRouter>

  </totalcontext.Provider>
  </checkoutcontext.Provider>
  </buynowcontext.Provider>
  </wishlistdatacontext.Provider>
  </inputcontext.Provider>
  </cartlabelcontext.Provider>
 </cartcontext.Provider>

      </newcontext.Provider>
    </div>
  );
};

export default Routee;
export { newcontext };
export {cartcontext}
export {cartlabelcontext}
export {inputcontext}
export {wishlistdatacontext}
export {buynowcontext}
export {checkoutcontext}
export {totalcontext}
