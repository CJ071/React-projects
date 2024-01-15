
import './App.css'
import { useState } from 'react'

function App() {
  const [color, setColor] = useState('black');

  return (
    <div className={`w-full h-screen duration-200`} style={{backgroundColor:color}}>      
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>      
    <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'> 
    <p className='px-4 py-1 text-white shadow-lg text-black'>Change Background Color</p>
    <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg text-black' style={{backgroundColor:'red'}} onClick={()=>setColor('red')}>red</button>
    <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg text-black ' style={{backgroundColor:'brown'}} onClick={()=>setColor('brown')}>brown</button>
    <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg text-black' style={{backgroundColor:'silver'}} onClick={()=>setColor('silver')}>silver</button>
    </div>     
    </div>
    </div>
  )
}

export default App
