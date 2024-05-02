import React, { useContext, useState } from 'react'
import { checkoutcontext, totalcontext } from './Route'
import { Link } from 'react-router-dom'
import Navb from './Navb'


const Checkout = () => {

const [checkoutdata, setcheckoutdata] = useContext(checkoutcontext)
const [total, settotal] = useContext(totalcontext)
const [address, setaddress] = useState({name:"" , address:"" , phonenumber:"" , pin:""})



const handlechange = (event) =>{
  setaddress({...address,[event.target.name]:event.target.value})
}

const handleSubmit=(event)=>{
event.prevent.default()
console.log(address)

}


  return (
    <div>

      <Navb/>

<div className='row container'> 
<div className='rig col-sm-8 ' >

{checkoutdata.map((display)=>
<>
<div style={{paddingLeft:"120px",marginTop:"50px"}} className='col1'>
<div className='buyimg'>
     <img src={display.image} alt="" height={100} width={100}/>
     </div>
     <div className='buydet'style={{position:"absolute" , marginTop:"-100px",marginLeft:"120px" ,fontSize:"15px"}}>
      <p style={{fontSize:"15px"}}>{display.name}</p>
      <h4>{display.price}</h4>
      <p>Quantity :{display.quantity}</p>
     </div>
</div>
     </>)}

</div>

<div className='lef col-sm-4 '>

<h5>ADD DETAILS</h5>

<br />
<form action="" className='forms' onSubmit={handleSubmit}>
  
 <label htmlFor=""> Add address</label> <br />
           <input type="text" placeholder='username' name='name' className='user' onChange={handlechange}/> <br />
           <input type="text" placeholder='Address' name='address' onChange={handlechange}/><br />
           <input type="text " placeholder='phone number' /><br />
           <input type="text" placeholder='pin' name="" id="" /><br />
           <label htmlFor="">mode of Payment</label> <br />
       

<div className='rdio' style={{display:"flex"}}>
           <input type="radio" name="cod" id="cod" />
           <label htmlFor="">Cash on Delivery</label>
           <input type="radio" name="cod" id="online" />
           <label htmlFor="">Online Payment</label>
</div>
<br />
          <h6>TOTAL AMOUNT TO BE PAID : {total}</h6><br />
         <Link to={'/orderplaced'} ><button type='submit' style={{width:"560px",height:"50px", backgroundColor:"black", color:"white"}} >PROCEED</button></Link>
            <br />
            <hr style={{width:"700px"}}/>

          </form  >
          </div>

</div>



    </div>
  )
}

export default Checkout