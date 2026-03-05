import React from 'react'
import Subtitle from './Subtitle'
import h6main from '../../assets/h6main.png'
import paypal from '../../assets/paypal.png'
import agy from '../../assets/agy.png'
import backk from '../../assets/backk.png'
import Hero7 from './Hero7'
import Border from '../Border'


const Hero6 = () => {
  return (
    <>
    <div className='h-screen relativemt-20 px-20 flex'>

      <div className='flex h-5 justify-end text-end absolute right-20 mt-15'>
<img src={backk} alt="" className='w-5 h-5' />
<img src={agy} alt="" className='w-5 h-5' />
        </div>
      

<div className='flex flex-col w-[20%] mr-20 ml-30 justify-center'>
 <div className='mb-4 flex rounded-full justify-start uppercase'>
        <Subtitle text='Testimonals'/>
</div>
<div className=' tracking-wide font-normal text-[28px]'>See how customers <span className='font-[700]'>drive impact</span> </div>
    <div className='justify-start flex text-start items-start my-10 '>
<button className='bg-[#0CBBC7] px-5 py-3 cursor-pointer text-white  flex text-start font-semibold'>See case studies
                </button>

                </div>
</div>
<div className='flex items-center relative'>
    <img className='h-120 w-100 ' src={h6main} alt="" />
    <div className='w-90 h-auto absolute bottom-10 left-80 bg-[#EDFEFF] p-5 '>
        <img className='w-25 ' src={paypal} alt="" />
        <div className='pe-10 text-[#676767] pt-5 leading-7 pb-5'>"I used to have a bunch of different tools I had to pay for, with Circle you get everything in one bundle."</div>
        <div className=' pb-5'> <span className='font-[700]'> Michel Dedrick </span><br />
Senior Conversion Optimizer</div>
    </div>

</div>


</div>

<Border/>
         <Hero7/>       
    
    </>
    
  )
}

export default Hero6