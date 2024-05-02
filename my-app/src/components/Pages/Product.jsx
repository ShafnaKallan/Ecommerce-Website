import React, { useContext, useState } from 'react'
import Home from './Home'
import Navb from './Navb'
import product from '../Assets/product.png'
import '../Styles/product.css'
import georg from '../Assets/GIORGETTI AT 2015 SALONE DEL MOBILE (1).png'
import { MdStar } from "react-icons/md";
import { IoMdStarHalf } from "react-icons/io";
import { IoMdStarOutline } from "react-icons/io";
import Accordion from 'react-bootstrap/Accordion';
import { useParams } from 'react-router-dom'
import { cartcontext, cartlabelcontext, inputcontext, newcontext } from './Route'


const Product = () => {

  const [first, setfirst] = useContext(newcontext)

  const [second, setsecond] = useContext(cartcontext)

  const [cartvalue, setcartvalue] = useContext(cartlabelcontext)

 
  const [input, setinput] = useContext(inputcontext)


  const{product} = useParams()
  const viewproduct = first[product]
console.log(viewproduct)

  const [addproduct, setaddproduct] = useState(1)
  

  const add =()=>{
    setaddproduct(addproduct+1)
  }

  const subtract =()=>{
    if(addproduct >= 2)
    {
    setaddproduct(addproduct-1)
    }
    else{
      alert("invalid")
    }
  }

const addtocart =()=>{
let exist =false
  let arr = second.map((item) => {
    if(item.id == viewproduct.id)
    {
      setcartvalue(cartvalue + 1)
      exist = true 
      return {...item, quantity : item.quantity + 1 , price: item.price+item.baseprice}
    
    }
    return item

  })
  setsecond(arr)
  if (!exist)
  {
    setcartvalue(cartvalue + 1)
    setsecond([...second,viewproduct])
  }
  
  console.log(second)

}


  return (
    <div>
       <Navb/>


<div className='row container '>

<div className='prcol1 col-sm-10 '>

       <div className='prdct'>
      
      <img src={viewproduct.image1} alt="" height={350}/>
      <img src={viewproduct.image2} alt="" height={350}/>
    
     </div>
     <div>
       <img className='prdctimg2' src={viewproduct.image3} alt="" />
       </div>
</div>

<div className='prcol2 col-sm-2'>
<div className='prname'style={{width:"200px"}}>
       <p ><b>{viewproduct.name}</b></p>
       <p className='prname2'>Timeless appeal is expressed in a versatile personality of quality: <br />
        this is the unmistakable style with which Giorgetti is present at the <br /> 2015 Salone del</p>
        <p><MdStar /><MdStar /><MdStar /><IoMdStarHalf /><IoMdStarOutline /></p>
        
        <p style={{fontWeight:"lighter", fontSize:'16px'}}>Price
        <h4 style={{color:"orangered"}}>Rs. {viewproduct.price}</h4></p>

        <div className='quantitybtn'>
          <p style={{fontWeight:"lighter", fontSize:'16px'}}>Quantity
          <br />
         <button onClick={add}>+</button>
            <button>{addproduct}</button>
            <button onClick={subtract}>-</button>
            </p> 
          </div>

           <div className='row'>
            <div className='row1 col-sm-6'>
                  <Accordion >
      <Accordion.Item eventKey="0">
        <Accordion.Header>Description</Accordion.Header>
        <Accordion.Body >
         <p style={{fontWeight:"lighter" , fontSize:"14px"}}> 
         height:  1470 cm <br />
         weight:  54kg <br />
         height:  1470 cm <br />
         weight:  54kg <br />
         </p>
        </Accordion.Body>
      </Accordion.Item>
   
    </Accordion>
            </div>
            <div className='row1 col-sm-6'>
            <Accordion >
      <Accordion.Item eventKey="0">
        <Accordion.Header>Details</Accordion.Header>
        <Accordion.Body >
         <p style={{fontWeight:"lighter" , fontSize:"14px"}}> 
         Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit, sed do
          eiusmod tempor <br /> incididunt <br /> ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, <br /> quis nostrud exercitation ullamco laboris nisi ut <br />
          aliquip ex ea commodo consequat. <br /> Duis aute irure dolor in
         <br /> reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      
         </p>
        </Accordion.Body>
      </Accordion.Item>
   
    </Accordion>
            </div>
            
           </div>

<br />
<div>
    <p style={{fontWeight:"lighter", fontSize:'14px'}}>TOTAL PRICE
    <h4>RS.{viewproduct.price * addproduct}/-</h4>
    
    </p>
    <button onClick={()=>addtocart(second.id)} style={{fontSize:"14px" , backgroundColor:"orange", border:"none" , height:"40px", width:"120px"}}>ADD TO CART</button>
</div>


       </div>
</div>


</div>


       <br />
       <br />
    </div>
    
  )
}

export default Product