import React, { useContext } from 'react'
import '../Styles/carousel.css'
import Slider from "react-slick";
import shinto from '../Assets/GIORGETTI AT 2015 SALONE DEL MOBILE.jpg'
import { buynowcontext, cartcontext, cartlabelcontext, newcontext, wishlistdatacontext } from './Route';
import { Link, useNavigate } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import toast from 'react-hot-toast';



const Carousel = () => {

    const [first, setfirst] = useContext(newcontext)
    const [wishlist, setwishlist] = useContext(wishlistdatacontext)
    const [buynw, setbuynw] = useContext(buynowcontext)
    const [second, setsecond] = useContext(cartcontext);
    const [cartvalue, setcartvalue] = useContext(cartlabelcontext)

    let history =useNavigate();
   

  const checkwishlist = (i) =>{
    
    if(!wishlist.includes(i))
    {
      setwishlist([...wishlist,i])
    }
    else{

      setwishlist(wishlist.filter(item => item != i ))  
    }

  }


  

  const addcart =(prdct)=>{
    const additem = second.find((display) =>display.id === prdct.id )
    if(additem){
      toast.success('Item already in the cart')
    }
    else{
    setcartvalue(cartvalue+1)
      setsecond([...second, prdct])
      toast.success('Successfully Moved!')
    
    }
  }
  
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 3
    };

    
  return (



    <div className='section2'>
          <p className='featured'>Featured Products</p>
      


          <Slider className='sliderr container' {...settings}>


{first.map((display,ind)=>
<>

        <div className='slidediv'id='display.id'>
       
        <Link to={`/viewpage/${display.name}/${ind}`}>    <img src={display.image} alt="" height={320}/> </Link>
           <button onClick={()=>checkwishlist(display)} style={{position:'absolute' , marginLeft:'250px'  , border:'none' ,backgroundColor:"transparent" , marginTop:"-310px"}} >
{ wishlist.includes (display) ?  <FaHeart style={{fontSize:"25px"}}/>  : <CiHeart  style={{fontSize:"25px"}}/>}
         
           </button>
             <div className='desc1' >
              <p style={{fontSize:"12px",marginTop:"10px" , marginLeft:"20px"}}>{display.name}</p>
              <p style={{fontSize:"18px",marginTop:"-12px" ,marginLeft:"20px"}}>{display.price}</p>

            <button onClick={()=>addcart(display)} style={{marginLeft:'20px',fontSize:"12px"}} >MOVE TO CART</button>
        <Link to ={`/buynow/${display.name}/${ind}`}>  <button  style={{marginLeft:'50px',fontSize:"12px"}}>BUY NOW</button></Link> 
            
             </div>
        
    
        </div>
        </>)}
      </Slider>
      




    <br />
    <br />

<br />
    <div className='section3'>
<p  style={{fontSize:"40px"}}>WOODEN <br />
<b>LEIBAL PLAIN SOFA</b> <br /></p>
<p className='p1'>a good looking and comfortbale</p>
<div className='btn1'>
 <Link to={'/allproducts'}> <button>SHOP NOW</button></Link>
</div>
    </div>
     </div>
     
  )
}

export default Carousel