import React from 'react'
import Subtitle from './Subtitle'
import h51 from '../../assets/h51.png'
import h52 from '../../assets/h52.png'
import h53 from '../../assets/h53.png'
import h54 from '../../assets/h54.png'
import h5main from '../../assets/h5main.png'
import Button from '../Button'
import Hero6 from './Hero6'
import Border from '../Border'


const Hero5 = () => {
  return (
    <div className='h-screen '>
            <div className='mt-30 flex rounded-full justify-center uppercase'><Subtitle text='Built for people' /></div>
            <div className='text-4xl mt-3 text-center'><span className='font-[700]'>Easy</span>  for beginners.<span className='font-[700]'>Powerful</span>  for experts.</div>
            <div className='flex justify-center flex-wrap mt-20 gap-x-10'>
                <div className='text-[#0CBBC7] flex w-1/6 border-b-2 text-center justify-center pb-2 '><img src={h51} alt="" className='w-5 me-2 h-6'/>Create</div>
                <div className='text-[#676767] flex w-1/6 text-center justify-center pb-2 '><img src={h52} alt=""   className='w-5 me-2 h-6' />Distribute</div>
                <div className='text-[#676767] flex w-1/6 text-center justify-center pb-2 '><img src={h53} alt="" className='w-5 me-2 h-6' />Collect</div>
                <div className='text-[#676767] flex w-1/6 text-center justify-center pb-2 '><img src={h54} alt="" className='w-7 me-2 h-6'/>Analyze</div>
                
            </div>
            <div className='h-auto bg-[#EDFEFF]  flex flex-wrap m-auto justify-between items-center' >
                <div className=' w-1/2 h-full flex flex-col justify-between'>
                <div className= 'mt-10   m-auto w-lg flex flex-col h-full'>
                       <h1 className='font-semibold text-2xl mb-8'>Create</h1>
                <div className='font-semibold mb-4'>
                Advanced  research software
                </div>
                <div className='leading-7 w-90 text-[#676767]'>
                    Ask the right questions and get the answers you need with the most secure and collaborative survey platform on the market featuring powerful logic, sophisticated analytics, and built-in automation and integration.
                </div>

                <div className='justify-start flex text-start items-start my-10 '>
<button className='bg-[#0CBBC7] px-5 py-3 cursor-pointer text-white  flex text-start font-semibold'>Get started for free
                </button>

                </div>
                
                </div>
             
                </div>
                <div className='w-1/2 flex justify-center'><img src={h5main} alt="" className='w-2/3' /></div>
            </div>
            
   <Hero6/>
    </div>
  )
}

export default Hero5