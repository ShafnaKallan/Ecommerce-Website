import React, { useContext } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import task from '../Assets/Task Chair -18.png'
import chair2 from '../Assets/51vPgwc6Y5L.png'
import '../Styles/Home.css'
import { Link } from 'react-router-dom';
import { cartlabelcontext } from './Route';
import cartval from '../cartval';



const Home = () => {

  const [cartvalue, setcartvalue] = useContext(cartlabelcontext)
 
  return (
    <div className='body'>
      <div className="square1  " >

        <div className="square2">

          <div className="navv">
              <div className="logo">
            CARVELI
          </div>
          <ul>
            <Link to={'/'}>   <li><a href="">HOME</a>
                </li>
                </Link> 
                
             <Link to={'/yourwishlist'}>   <li><a href="">WISHLIST</a>
                </li></Link>

               <Link to={'/yourcart'}> <li><button><a style={{color:"black"}} href="#" class="notification">
                <span><FaShoppingCart  style={{Color:"black"}}/></span>
                <span class="badge">{cartvalue}</span>
                </a>
                </button></li></Link>
           
              <Link to={'/login'}>  <li><button>LOGIN</button></li></Link>
            </ul>
      </div>
           <h5 className="head1">With Love from Germany

           </h5>


           <div className="logo2">
        <h1>CARVELI</h1>
      </div>

      <div className="img1">
        <img src={task} alt="" style={{border:"none"}}  width={440} height={430}/>
      </div>

<div className="img2">
<img src={chair2} alt=""  width={410} height={390} style={{border:"none"}}/>
</div>

<p className="para1">“Our family dinner table was my first platform - <br /> every dinner was all about sharing stories <br /> and jokes and  points of view.”</p>

<div className="simple">
    <ul>
        <li>SIMPLE</li>
        <li>STYLISH</li>
        <li>QUALITY</li>
    </ul>
</div>

        </div>

      </div>
      <br />


    </div>
  )
}

export default Home