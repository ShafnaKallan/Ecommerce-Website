import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../Styles/login.css'
import Navb from './Navb'

const Lgin = () => {

  const [logininp, setlogininp] = useState({username:"" , password:""})




  const handleChange =(event)=>{
      setlogininp({...logininp,[event.target.name]:event.target.value})
      
  }

  const handleSubmit =(event)=>{
    event.preventDefault()
    console.log(logininp)
  }

  return (
    <div>

<Navb />

<div className='login'>
           
           <div className='loginimg '>
           </div>

           <div className='loginform'>
               <h1 style={{margin:"10px"}}>LOGIN</h1>
<br />
               <div className='signin'>
                   <button>Sign in with google</button>  
                   <button>Sign in with apple</button>
               </div>
              <form onSubmit={handleSubmit} action="" className='form'>
               <input type="text" placeholder='username' className='user' name='username' onChange={handleChange} /> <br />
               <input type="password" placeholder='password' className='user' name='password'  onChange={handleChange} />
               <br />
                <button type='submit' style={{width:"560px", margin:"10px",height:"50px", backgroundColor:"black", color:"white"}} >Sign in</button>
                <br />
              <Link to = '/Reset password'>  <a href="" style={{margin:"10px", color:"black"}}>forgot your password</a></Link>
                <hr />
                <button style={{width:"560px", margin:"10px",height:"50px", backgroundColor:"black", color:"white"}} >Create Account</button>

              </form>
     



           </div>
       </div>



    </div>
  )
}

export default Lgin