import React, { useContext } from 'react'
import { cartcontext, cartlabelcontext, wishlistdatacontext } from './Route'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Navb from './Navb';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';


const Wishlist = () => {

    const [wishlist, setwishlist] = useContext(wishlistdatacontext)
    const [second, setsecond] = useContext(cartcontext);
    const [cartvalue, setcartvalue] = useContext(cartlabelcontext)


    const removeFrom = (id) =>{
          const removedata = wishlist.filter((display) => display.id !== id)
          setwishlist(removedata)
    }

//    const addtocart = (prdct)=>{
//     console.log( "lllllllll")
//     console.log(second, "iiiiiii")
// const additem = second.find((display) =>display.id === prdct.id )
// if(additem){
//   setcartvalue(cartvalue+1)
//   setsecond([ {...prdct, quantity:prdct.quantity + 1 ,price: prdct.price + prdct.baseprice }])
// }
// else
// {
// setcartvalue(cartvalue+1)
// setsecond([...second, prdct])

// }
//    }


const addtocart = (prdct)=>{
let exist = false;
let additem = second.map((display) =>{
if(display.id == prdct.id )
{
setcartvalue(cartvalue+1)
exist = true;
return{...display, quantity:display.quantity + 1 , price: display.price + display.baseprice }
}
return display
})
setsecond(additem)
if(! exist)
{
setcartvalue(cartvalue+1)
setsecond([...second, prdct])
}

 }




  return (
    <div>
    <Navb/>
    <br />

<div className='wishsection ' style={{marginTop:"50px"}}>
    {wishlist.length == 0 ? <div className="emptycart"> 
        <h1 >your Wishlist is empty</h1> 
       <br />
      <Link to={'/allproducts'}>  <button>Continue shopping</button> </Link>
        </div>  :

    <div style={{display:"flex", flexWrap:"wrap", justifyContent:'center' }}>

       {wishlist.map((display)=>
    <>
   <Card style={{ width: '18rem' , margin:"10px"}}>
      <Card.Img variant="top" src={display.image} />
      <Card.Body>
        <Card.Title style={{fontSize:"15px"}}>{display.name}</Card.Title>
        <Card.Text>
         {display.price}
        </Card.Text>
        <div style={{padding:'10px'}} className='crdbuttn'>
        <Button onClick={()=>removeFrom(display.id) } style={{backgroundColor:"lightgrey", color:"black", border:"none"}} >Remove</Button>
        <br />
        <br />
       <Button onClick={()=>addtocart(display) } style={{backgroundColor:"lightgrey", color:"black", border:"none"}} >Add to cart</Button>
       </div>

       </Card.Body>
    </Card>
    </>)}

    </div>
    }
    </div>
    </div>
  )
}

export default Wishlist