import React, { useContext, useEffect, useState } from "react";
import Navb from "./Navb";
import Table from "react-bootstrap/Table";
import "../Styles/cart.css";
import { cartcontext, cartlabelcontext, checkoutcontext, newcontext, totalcontext } from "./Route";
import { IoIosClose } from "react-icons/io";
import Footer from "./Footer";
import { Link } from "react-router-dom";


const Cart = () => {
  const [second, setsecond] = useContext(cartcontext);
  const [total, settotal] = useContext(totalcontext)
  const [cartvalue, setcartvalue] = useContext(cartlabelcontext)
  const [checkoutdata, setcheckoutdata] = useContext(checkoutcontext)


  const handletotal = () => {
    settotal(second.reduce((totalans,item) => totalans+item.price , 0));
    //reduce contains two parametes, totalvalue and currentvalue of the item
  };

  useEffect(() => {
    handletotal() 
  }, [second])
  

  console.log(second);

  const additem = (id) => {

    const newarray = second.map((display1) =>
      display1.id == id && display1.quantity<5
        ? {
            ...display1,
            quantity: display1.quantity + 1,
            price: display1.baseprice * (display1.quantity + 1),
          }
        : display1
    );

    setsecond(newarray);
    
    console.log(second);
  };

  const decreasequantity = (id) => {
    const newarray = second.map((display1) =>
      display1.id === id && display1.quantity > 1
        ? {
            ...display1,
            quantity: display1.quantity - 1,
            price: display1.baseprice * (display1.quantity -1),
          }
        : display1
    );
    setsecond(newarray);
  
  };

  const deleteitem = (id) => {
    const newlist = second.filter((display1) => display1.id !== id);
    setsecond(newlist);
    setcartvalue(cartvalue-1)
  };

  const checkout =()=>{
setcheckoutdata([...second])
  }

  return (
    <div >
      <Navb />

      {cartvalue == 0 ?  

      <div className="emptycart"> 
        <h1 >your cart is empty</h1> 
       <br />
      <Link to={'/allproducts'}> <button>Continue shopping</button> </Link> 
        </div> 

        :

      <div className="carttab container ">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th colSpan={4}>
                Your Cart
                <p style={{ float: "inline-end", paddingRight: "80px" }}>
                  TOTAL: {total}
                </p>
              </th>
            </tr>
          </thead>

          {second.map((display1, index) => (
            <>
              <tbody id="display1.id">
                <tr>
                  <td style={{ width: "100px" }}>
                    <p className="tabbtn">{index + 1}</p>
                  </td>

                  <td style={{ width: "400px" }}>
                    <img src={display1.image} alt="" height={100} />

                    <p>{display1.name}</p>
                  </td>
                  <td style={{ width: "250px" }}>
                    <div className="tabbtn ">
                      <button onClick={() => additem(display1.id)}>+</button>

                      <button>{display1.quantity}</button>

                      <button onClick={() => decreasequantity(display1.id)}>
                        -
                      </button>
                    </div>
                  </td>
                  <td>
                    {" "}
                    <h6
                      onClick={() => deleteitem(display1.id)}
                      className="tabbtn"
                    >
                      {display1.price}{" "}
                      <p style={{ position: "absolute", paddingLeft: "170px" }}>
                        <IoIosClose style={{ fontSize: "20px" ,marginTop:"-30px"}} />
                      </p>
                    </h6>
                  </td>
                </tr>
              </tbody>
            </>
          ))}
        </Table>

        <div className="total">
          <h5>TOTAL : {total}</h5>
         <Link to={'/checkout'}> <button onClick = {checkout} > CHECKOUT</button></Link>
        </div>
      </div>
      }
  
    </div>
  );
};

export default Cart;
