import React from 'react'
import Subtitle from './Subtitle'
import h51 from '../../assets/h51.png'
import h52 from '../../assets/h52.png'
import h53 from '../../assets/h53.png'
import h54 from '../../assets/h54.png'


const Hero5 = () => {
  return (
    <div className='h-screen '>
            <div className='mt-30 flex rounded-full justify-center uppercase'><Subtitle text='Built for people' /></div>
            <div className='text-4xl mt-3 text-center'><span className='font-[700]'>Easy</span>  for beginners.<span className='font-[700]'>Powerful</span>  for experts.</div>
            <div className='flex justify-center flex-wrap mt-20 gap-x-10'>
                <div className='text-[#0CBBC7] flex w-1/5 border-b-2 text-center justify-center pb-2 '><img src={h51} alt=""  className='w-7 h-6' />Create</div>
                <div className='text-[#676767] flex w-1/5 text-center justify-center pb-2 '><img src={h52} alt=""  className='w-7' />Create</div>
                <div className='text-[#676767] flex w-1/5 text-center justify-center pb-2 '><img src={h53} alt=""  className='w-7' />Create</div>
                <div className='text-[#676767] flex w-1/5 text-center justify-center pb-2 '><img src={h54} alt="" className='w-7' />Create</div>
                
            </div>
   
    </div>
  )
}

export default Hero5