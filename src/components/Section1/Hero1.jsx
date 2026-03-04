import React from 'react'
import hero1 from '../../assets/hero01.png'

const Hero1 = () => {
  return (
    <div className='bg-[#EFFEFF] w-full h-[60vh]'>
        <h1 className='pt-5 px-50 text-center text-[#191619] font-semibold text-4xl'>A powerful online engagement tool <br /> that’s intuitive and simple to use.</h1>
        <p className='text-sm mt-5 px-60 text-center text-[#878787]'>With stellar one-click reports and unmatched support, see how <br /> Circle will make a difference in your business.</p>
        <img className='w-2/3 m-auto mt-5' src={hero1} alt="" />
        
        </div>
  )
}

export default Hero1