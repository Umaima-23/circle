import React from 'react'
import h7main from '../../assets/hero7main.png'
import ButtonWa from '../ButtonWa'
import Hero8 from './Hero8'
import Border from '../Border'

const Hero7 = () => {
    return (
        <>
        
      
        <div className='min-h-auto pb-30 flex items-center px-10 md:px-20 m-auto py-20'>
            <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-10 items-center w-full ps-20'>
                <div className='pe-30   '>
                    <div className='text-2xl pe-30 mb-5'>Looking for a <span className='font-[700]'>solution</span>  for your business?</div>
                    <div className='text-[#676767] text-m'>Check out Sogolytics enterprise feedback and experience management platform.</div>
                 <div className='flex mt-10 justify-start '>
                     <button className=' bg-[#0CBBC7] px-5 py-3  cursor-pointer text-white  flex font-semibold'>
                    Learn more
                </button>
                  <button className='outline outline-[#0CBBC7] px-3  py-3 cursor-pointer text-[#0CBBC7] m-auto flex font-semibold'>
                    Schedule a consultation
                </button>

                 </div>
                 
                </div>
                <div className='w-full aspect-4/3 max-w-100 bg-amber-300'>
                    <img src={h7main} alt="" className='object-center object-cover w-full h-full'/></div>
            </div>

        </div>
<Border/>

      <Hero8/>
          </>
    )
}

export default Hero7