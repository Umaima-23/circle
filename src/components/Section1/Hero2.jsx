import React from 'react'
import Subtitle from './Subtitle'
import banner from '../../assets/banner.png'
import Tick from './Tick'
import Hero3 from './Hero3'
import Border from '../Border'


const Hero2 = () => {
  return (
    <div className='h-screen mt-25'>
        <div className=' flex justify-center '>
<Subtitle text='Our Customers'/>

        </div>
    <div className='text-[28px] font-jakarta text-center mt-2 font-normal text-[#000000]'>
        Trusted by <span className='font-brand '> 100,000+ customers </span>  in 90+ countries</div>
     <div className='my-4'><img src={banner} alt="" /></div>

     <div className='flex flex-wrap  justify-center font-medium'>
        <div className=' mx-3 flex '><span className='text-[#0CBBC7] flex me-1'>
 <Tick /> 18281  </span> signed up last month</div>
        <div className='mx-5 flex '><span className='text-[#0CBBC7] flex'> <Tick/> GDPR </span>- & <span className='text-[#0CBBC7]'>CCPA</span>-ready</div>
        <div className='mx-5 flex'><span className='text-[#0CBBC7] flex me-1'><Tick/> Leader@G2 </span>Summer</div>
     </div>
     <div className='mt-30'>
   <Border/>

     </div>

<Hero3/>
    </div>
    
  )
}

export default Hero2