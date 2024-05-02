import React from 'react'
import '../Styles/griditem.css'
import Accordion from 'react-bootstrap/Accordion';
import Dropdown from 'react-bootstrap/Dropdown';
import osmo from '../Assets/Osmo - Armchair.jpg'
import Bombom from '../Assets/Bombom by Infiniti Design and designed by Favaretto & Partners.jpg'
import db3 from '../Assets/db32ec6a-248b-4b11-bc2a-a4c84829bda3.jpg'
import alice from '../Assets/Alice Armchair _ Domkapa.jpg'
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from 'react-router-dom';
import sogood from '../Assets/Sofa so good_ B&B Italia.jpg'


const Griditem = () => {
  return (
    <div className='section4 '>


    
        <div className='colmn1 '>

          <Link to={'/allproducts'}>

<img src={sogood} alt="" />
<div className='colmn1name' >
  <h5>Dining sofas of four and above seaters</h5>
  <a href="">VIEW ALL <IoIosArrowRoundForward /></a>

 </div>
 </Link>     

        <div className='colmn2 '>
           <div className='flexbox1'>
        <div className='a'>
            <img src={osmo} alt=""  />
             <div  className='gridname'>
             <h6 >Sofa with Table</h6>
               <a href="">VIEW ALL <IoIosArrowRoundForward /></a>
             </div>
                 
            </div>

            

            <div className='a'>
            <img src={Bombom} alt="" />
            <div  className='gridname'>
             <h6>Combo set</h6>
               <a href="">VIEW ALL <IoIosArrowRoundForward className='arrowicon'/></a>
             </div>
            </div>

            
           </div>
           <br />
   
           <div className='flexbox1'>
            <div className='a'>
            <img src={alice} alt="" />
            <div  className='gridname'>
             <h6>Single seaters</h6>
               <a href="">VIEW ALL <IoIosArrowRoundForward /></a>
             </div>
            </div>

            <div className='a'>
            <img src={db3} alt="" />
            <div  className='gridname'>
             <h6>Wooden Tables</h6>
               <a href="">VIEW ALL <IoIosArrowRoundForward /></a>
             </div>
            </div>
          
           </div>
   
           </div>
           <br />
    </div>




    </div>
  )
}

export default Griditem