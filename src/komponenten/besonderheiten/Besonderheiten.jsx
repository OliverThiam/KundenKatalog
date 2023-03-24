import { CalendarMonth, CarRental, HeartBroken, House, Money } from '@mui/icons-material'
import React from 'react'

const Besonderheiten = () => {
  return (
    <div className='p-6 py-12'>
        <div className='flex flex-col sm:flex-row flex-wrap justify-center items-center'>
            <div className='flex flex-col items-center text-center  p-4'>
                <CalendarMonth sx={{fontSize: 70}} className=''/>
                <span className='text-2xl mb-2'>Tägliche Kurse</span>
                <span className=''>Unsere Kurse werden von <br /> Montag bis Samstag angeboten.</span>
            </div>
            <div className='flex flex-col items-center text-center  p-4'>
                <Money sx={{fontSize: 70}} className=''/>
                <span className='text-2xl mb-2'>Tägliche Kurse</span>
                <span className=''>Unsere Kurse werden von <br /> Montag bis Samstag angeboten.</span>
            </div>
            <div className='flex flex-col items-center text-center  p-4'>
                <House sx={{fontSize: 70}} className=''/>
                <span className='text-2xl mb-2'>Tägliche Kurse</span>
                <span>Unsere Kurse werden von <br /> Montag bis Samstag angeboten.</span>
            </div>
            <div className='flex flex-col items-center text-center  p-4'>
                <CarRental sx={{fontSize: 70}} className=''/>
                <span className='text-2xl mb-2'>Tägliche Kurse</span>
                <span>Unsere Kurse werden von <br /> Montag bis Samstag angeboten.</span>
            </div>
        </div>
    </div>
  )
}

export default Besonderheiten