import React, { useState } from 'react'
import "./probieren.css"

const Probieren = () => {

    const [klick, setKlick] = useState(false)

    const handleKlick = () => {
        setKlick(prev => !prev)
    }

  return (
    <div className='w-full h-[50vh]'>
        <button onClick={handleKlick} className='bg-yellow-500'>klick</button>
        <div className={`bg-yellow-500 w-[70px]   text-center mx-auto ${klick ? "menu-down " : "menu-up"}`}>
            <p className=''>Hallo</p>
            <p>Hallo</p>
            <p>Hallo</p>
            <p>Hallo</p>
        </div>
    </div>
  )
}

export default Probieren