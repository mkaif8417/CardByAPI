import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'

import './App.css'

function App() {
  const [cards, setCard] = useState([])

  const fetchData=async ()=>{
    let a=await fetch("https://jsonplaceholder.typicode.com/posts")
    let data=await a.json()
    setCard(data)
    console.log(data);
    
  }

  useEffect(()=>{
fetchData()
  },[])

  return (
    <>
    <Navbar/>
     <div className="container">
      {cards.map((card)=>(
 <div key={card.id} className="card">
<h2>{card.title}</h2>
<p>{card.body}</p>
<span>{card.userId}</span>
</div>
      ))}

     </div>
    
    </>
  )
}

export default App
