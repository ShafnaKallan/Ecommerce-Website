// import React, { useState } from 'react'

// const Rough = () => {

// const data = [ {name:"john" , age:"25"},
// {name:"alen" , age:"23"} ]

// const [first, setfirst] = useState(data)

// const handlefilter =() =>{
//     const age = first.filter((p)=> p.age.includes("23"))
//     setfirst(age)
// }


//   return (
//     <div>

//         <button onClick={handlefilter}>sdfghjkl;</button>
// {first.map((display)=>
// <h1>{display.name}</h1>
// )}

// <form action="">
//   <input type="checkbox" />
// </form>

//     </div>
    
//   )
// }

// export default Rough


import React, { useState } from 'react'

const Rough = () => {


const [taskk, settaskk] = useState([
  {task:"learn html" , status :"pending"},
  {task:"letter" , status:"pending"}
])

  return (
    <div>

<form action="">
  <input type="text" />
  <button>submit</button>
</form>

<div>

<table>
  <th>
    <td>no</td>
    <td>task</td>
    <td>status</td>
    <td>removv</td>
  </th>
  

  {taskk.map((display)=>
<>

  <tr>
    <td><input type="checkbox" name="" id="" /></td>
    <td>{display.task}</td>
    <td>{display.status}</td>
    <td>remover</td>
  </tr>

  </>)}
</table>

</div>

    </div>
  )
}

export default Rough