import { useState } from 'react'
import './index.css'
function App() {
  const [color, setColor] = useState('black');

  return (
    <>
      <div
        className="w-full h-full duration-200"
        style={{ backgroundColor: color, height: '100vh' }}
      >
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap gap-3 justify-center shadow-lg bg-white px-3 py-2 rounded-xl'>
            <button  className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor : 'red'}}>Red</button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor : 'blue'}}>Blue</button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor : 'yellow'}}>Yellow</button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor : 'olive'}}>Olive</button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor : 'violet'}}>Violet</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
