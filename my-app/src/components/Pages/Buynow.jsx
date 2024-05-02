import React, { useContext, useState } from 'react'
import { buynowcontext, newcontext } from './Route'
import Table from 'react-bootstrap/Table';
import { Link, useParams } from 'react-router-dom';
import Navb from './Navb';
import '../Styles/buynow.css'

const Buynow = () => {
  const [buynw, setbuynw] = useContext(buynowcontext)
  
  const [first, setfirst] = useContext(newcontext)

  const [userdata, setuserdata] = useState({name:"" , address:"" , phonenumber:"" , pin:"" , gender:""})

  const {product} = useParams()
  const buyproduct = first[product]
  console.log(buyproduct)

  console.log(userdata)

const handleChange =(event) =>{
  setuserdata({...userdata,[event.target.name]:event.target.value})

}

const submit =(event) =>{
  event.preventDefault()
console.log(userdata)
}

  return (
    <div>
<Navb/>


<div className='row'>


  <div className='righ col-sm-6'>
     <div className='buyimg'>
     <img src={buyproduct.image} alt="" height={200} width={200}/>
     </div>
     <div className='buydet' >
      <h5>{buyproduct.name}</h5>
      <h4>{buyproduct.price}</h4>
      <p>Quantity :{buyproduct.quantity}</p>
     </div>
  </div>



  <div className='lef col-sm-6'>

    <h5>ADD DETAILS</h5>

    <br />
    <form action="" className='forms' onSubmit={submit}>
      
     <label htmlFor=""> Add address</label> <br />
               <input type="text" placeholder='username' name='name' onChange={handleChange} className='user' /> <br />
               <input type="text" placeholder='Address' name='address' onChange={handleChange}/><br />
               <input type="text " placeholder='phone number' name='phonenumber' onChange={handleChange}/><br />
               <input type="text" placeholder='pin' name="pin" onChange={handleChange} id="" /><br />
               <label htmlFor="">mode of Payment</label> <br />
              <input style={{margin:"-120px"}} type="radio" name='gender' />
              <label htmlFor="">Cash on delivery</label>
              <input type="radio" name='gender'/>
              <label htmlFor="" style={{marginLeft:"-150px"}}>Online payment</label>
              <br />
              <p style={{paddingLeft:"30px",marginTop:"10px"}}>TOTALPRICE: <h5>{buyproduct.price}</h5></p>
              
               <Link to={'/orderplaced'}> <button type='submit' style={{width:"560px", margin:"10px",height:"50px", backgroundColor:"black", color:"white"}} >CHECKOUT</button>
                
               </Link>
                <br />
                <hr />

              </form></div>

</div>

    
   

    </div>
  )
}

export default Buynow