import React from 'react'
import imageh3 from '../../assets/hero3img.png'
import Subtitle from './Subtitle'
import Button from '../Button'
import Hero4 from './Hero4'
import Border from '../Border'

const Hero3 = () => {
  return (
    <>
    <div className='h-screen mt-25 grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2  '>
        <div className=' w-full px-6 md:ps-20 lg:ps-30 '><div className='w-1/3 '><Subtitle text='Our Promise'/></div>
        <div className='text-4xl mt-3'>Tool  <span className='font-[700] '>built for people.</span>
        </div>
        <div className='font-normal text-[#676767] pr-6 md:pe-20 lg:pe-40 leading-6.5 mt-3'>Whether you want to edit your Google Docs, resolve Jira issues, or collaborate over Zoom. <div className='font-normal text-[#676767] mt-8 '>Circle has 100+ integrations with tools you already use and love.</div> </div>
        <div className='flex justify-start mt-10 '><Button text='Get started free'/></div>
        </div>
        <div className='mb-0 pb-0'><img src={imageh3} alt="" /></div>
        
    
  
    </div>
      <div className='text-center mt-0'>
      <Border />

      </div>
      <Hero4/>
    </>
  )
}

export default Hero3