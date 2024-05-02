import React, { useContext, useState } from 'react'
import '../Styles/navb.css'
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { cartcontext, cartlabelcontext, inputcontext, newcontext } from './Route';
import { useSyncExternalStore } from 'react';


const Navb = () => {

  const [cartvalue, setcartvalue] = useContext(cartlabelcontext)

  const [input, setinput] = useContext(inputcontext)

  const [first, setfirst] = useContext(newcontext)
  
  const handlechange = (event)=>{
setinput(event.target.value)
console.log(input)
  }

  return (

 <div className='navib '>

<div className='navv container'>
<div className="logo">
            CARVELI
          </div>
       
          <input onChange={handlechange} type="text" placeholder='       Search item' value={input} 
          style={{marginLeft:'400px',marginTop:"20px" , width:"450px",height:'40px'}}/>

          <ul style={{marginTop:"20px"}}>
            <Link to={'/'}>   <li><a href="">HOME</a></li> </Link> 
                
                <Link to={'/login'}><li><a href="">CONTACT</a></li></Link>

             <Link to={'/yourwishlist'}>   <li><a href="">WISHLIST</a></li> </Link>

                <Link to={'/yourcart'}>  <li><button><a style={{color:"black"}} href="#" class="notification">
                <span><FaShoppingCart  style={{Color:"black"}}/></span>
                <span class="badge">{cartvalue}</span>
                </a>
                </button></li></Link>
           
              <Link to={'/login'}>  <li><button>LOGIN</button></li> </Link>
            </ul>
    
   


</div>


    </div>
  )
}

export default Navb