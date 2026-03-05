import React from 'react'
import Subtitle from './Subtitle'
import one from '../../assets/one.png'
const Hero4 = () => {
  return (
    <div className='h-screen'>
        <div className='mt-30 flex rounded-full justify-center'><Subtitle text='AWARDS'/></div>
        <div className='text-4xl mt-3 text-center'>An <span className='font-[700]'> award winning </span> platform, <span className='font-[700]'> loved by customers.</span> </div>
        <div className='grid grid-cols-6 gap-10 m-20'>
            <div className='bg-[#FFF5F3] w-65.25 h-64.75 rounded-sm  flex justify-center items-center'>
                <div className='flex justify-center flex-col items-center'>
                <img className='w-22.25 h-25 '  src={one} alt="" />
                <div className='font-[700] text-[16px] text-center'>Market leader across 18 categories</div>

                </div>

                </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
   
    </div>
  )
}

export default Hero4