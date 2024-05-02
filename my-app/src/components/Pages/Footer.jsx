import React from 'react'
import '../Styles/footer.css'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>


    <div className='footerbox ' style={{marginLeft:"190px"}}>
      <div className='row '>

          <div className='legal col-sm-6 '>
              <ul>
                  <h5>Customer Services</h5>
                  <br />
                  <li>All our services</li>
                  <li>Did you know?</li>
                  <li>Contact us</li>
                  <li>Store locator</li>
                  <br />
                  <a href="">Catalogue </a>
              </ul>

              <ul style={{paddingLeft:"150px"}}>
                  <h5>Customer Services</h5>
                  <br />
                  <li>All our services</li>
                  <li>Did you know?</li>
                  <li>Contact us</li>
                  <li>Store locator</li>
                  <br />
                  <a href="">Catalogue </a>
              </ul>
         
          </div>

          <div className='legal col-sm-6'>
          <ul>
                  <h5>Legal & Corporate</h5>
                  <br />
                  <li>All our services</li>
                  <li>Did you know?</li>
                  <li>Contact us</li>
                  <li>Store locator</li>
                  <li>Contact us</li>
                  <li>Store locator</li>
                 
              </ul>
              <ul style={{paddingLeft:"100px"}}>
                  <h5>Newsletter</h5>
                  <br />
                  <li>
                      <form action="">
                          <input style={{width:"200px",borderBottom:"1px solid white", backgroundColor:"transparent", color:"White"}} type="text" placeholder='Enter your email address' />
                      </form>
                  </li>
                  <br />
                  <li><button style={{width:"200px", height:"40px"}}>Subscribe</button></li>
                
              </ul>
          </div>

      </div>

    </div>


</div>
  )
}

export default Footer