import React, { Fragment, useContext, useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import '../Styles/allproducts.css'
import Button from 'react-bootstrap/Button';
import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { inputcontext, newcontext, wishlistdatacontext } from './Route';
import Card from 'react-bootstrap/Card';
import Navb from './Navb';
import data from '../Data';
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';




const Allproduct = () => {

    const [first, setfirst] = useContext(newcontext)

    const [input, setinput] = useContext(inputcontext)

    const [filterData, setFilterData] = useState(data)

    const [selected, setselected] = useState([])
      
const [favouriteicon, setfavouriteicon] = useState([])

  const [wishlist, setwishlist] = useContext(wishlistdatacontext)

  const [checkboxval, setcheckboxval] = useState(false)

    console.log(first)

    const handleclick = (prdctcolor) =>{
    setcheckboxval(!checkboxval)
    if(checkboxval == false)
    {

        const array = first.filter((p) => {
  
        return  p.color == prdctcolor;
        });
       
         setFilterData(array)
        }
        else{
          setFilterData(first)
        }
      }


        const handleclickcate = (prcatgry) =>{
          setcheckboxval(!checkboxval)
          if (checkboxval == false){
          const catgryfltr = first.filter((p) => {
           return p.category == prcatgry;
          })
          setFilterData(catgryfltr)
        }
        else{
          setFilterData(first)
        }
      }
  

       
        const handleclickprice = () =>{
          setcheckboxval(!checkboxval)
          if (checkboxval == false){
         
          const pricefilter = first.filter((p) => {
         return   p.price >=10000 && p.price<=15000;
          })
          setFilterData(pricefilter) 
                
          }
          else{
            setFilterData(first)
          }
        }
   

       
        const handleclickprice1 = () =>{
          setcheckboxval(!checkboxval)
          if(checkboxval == false){
          const pricefilter = first.filter((p) => {
         return   p.price >=15000 && p.price<=25000;
          })
          setFilterData(pricefilter)    
        }
        else{
          setFilterData(first)
        }
      }

             
        const handleclickprice2 = () =>{
          setcheckboxval(!checkboxval)
          if(checkboxval == false){
          
          const pricefilter = first.filter((p) => {
         return   p.price > 25000;
          })
          setFilterData(pricefilter)    
        }
  else{
    setFilterData(first)
  }
      }

    

        const handleFavour =(i)=>
        {
          if(!wishlist.includes(i)){
            setwishlist([...wishlist,i])
          }
          else{
            setwishlist(wishlist.filter(item => item != i ))
          }
        }




         const prevPage =()=>{
               setFilterData(first)
          }



  return (

    <div>

      <Navb/>


<div className='row' >

    <div className='leftside col-sm-2' style={{ marginTop:'50px',paddingTop:"25px"}}>

{/* <button style={{border:"none" , backgroundColor:"transparent"}} onClick={prevPage}><FaArrowLeftLong style={{marginLeft:"40px" , color:"black"}}  /></button> */}
    <br />
    
          <ul className='leftul'>
             <li>         <Accordion defaultActiveKey="1">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Color</Accordion.Header>
        <Accordion.Body>

        

              <form action="" >
         

                <input type="checkbox" id='red' name='color' onClick={()=>handleclick('red')} />
                <label style={{marginLeft:"10px"}} htmlFor="">red</label>
                <br />
                <input type="checkbox" id='green' name='color' onClick={()=>handleclick('green')} />
                <label style={{marginLeft:"10px"}} htmlFor="">green</label>
                </form>
                <input type="checkbox" id='white' name='color' onClick={()=>handleclick('white')} />
                <label style={{marginLeft:"10px"}} htmlFor="">white</label>
                <br />
                <input type="checkbox" id='black' name='color' onClick={()=>handleclick('black')} />
                <label style={{marginLeft:"10px"}} htmlFor="">Black</label>
    


        </Accordion.Body>
      </Accordion.Item>
      
    </Accordion>
    
   

    </li>
             <li>         
              <Accordion defaultActiveKey="1">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Price</Accordion.Header>
        <Accordion.Body>
      
                   <form action="">
                    <input onClick={()=>handleclickprice()} type="checkbox" id='5000' name='price' value={checkboxval} />
                    <label htmlFor="">10000 - 15000</label>
                    <br />
                    <input onClick={()=>handleclickprice1()} type="checkbox" id='5000' name='price'  value={checkboxval} />
                    <label htmlFor="">15000 - 25000</label>
                    <br />
                    <input onClick={()=>handleclickprice2()} type="checkbox" id='5000' name='price'  value={checkboxval}/>
                    <label htmlFor="">Above 25000</label>

                   </form>



        </Accordion.Body>
      </Accordion.Item>
      
   
   
    </Accordion></li>
             <li>         <Accordion defaultActiveKey="1">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Category</Accordion.Header>
        <Accordion.Body>
        
        <form action="">

                    <input onClick={()=>handleclickcate("two seater")} type="checkbox" id='twoseater' name='category' />
                    <label htmlFor="">Two seater</label>
                    <br />
                    <input onClick={()=>handleclickcate("chair")} type="checkbox" id='chair' name='category' />
                    <label htmlFor="">Chair</label>
                    <br />
                    <input onClick={()=>handleclickcate("sofa")} type="checkbox" id='sofa' name='category' />
                    <label htmlFor="">Sofa</label>
            

                   </form>
        
        </Accordion.Body>
      </Accordion.Item>
      
    </Accordion></li>
      
          </ul>
    
  

    </div>

    <div style={{display:"flex",flexWrap:"wrap", marginTop:"90px" }} className='rightside col-sm-10'>


{filterData.filter((inp) => inp.name.toLowerCase().includes(input)).map((display,index)=>
<>

<Card  id='display.id' style={{ width: "200px" ,margin:"20px"}}>
  <Card.Img variant="top" src={display.image} style={{width:"200px" , height:"200px"}}/>



  <button onClick={()=>handleFavour(display)}   style={{position:'absolute' , marginLeft:'160px' , marginTop:'10px' , border:'none' ,backgroundColor:"transparent"}}  >

{ wishlist.includes (display) ?  <FaHeart style={{fontSize:"20px"}}/>  : <CiHeart  style={{fontSize:"20px"}}/>}

</button>


  <Card.Body style={{height:"170px"}}>
    <Card.Title style={{height:"5px"}}>{display.price}</Card.Title> <br />
    <Card.Text style={{height:"40px"}}>
   {display.name}
    </Card.Text>
  <Link to={`/buynow/${display.name}/${index}`}> 
  <Button style={{backgroundColor:"orange" , border:"none"}}>BUY NOW</Button> 
   </Link> 
       
  </Card.Body>

</Card>

</>)}

    </div>

        
    </div>
  
    </div>
  )
}

export default Allproduct