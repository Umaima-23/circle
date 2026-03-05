import React from 'react'
import Subtitle from './Subtitle'
import Cardh from './Cardh'
import Border from '../Border'
import Hero5 from './Hero5'
const Hero4 = () => {
    return (
        <div className='h-screen '>
            <div className='mt-30 flex rounded-full justify-center'><Subtitle text='AWARDS' /></div>
            <div className='text-4xl mt-3 text-center'>An <span className='font-[700]'> award winning </span> platform, <span className='font-[700]'> loved by customers.</span> </div>
            <div className='grid grid-cols-6 gap-10 m-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center'>
            <Cardh/>
            <Cardh/>    
            <Cardh/>    
            <Cardh/>    
            <Cardh/>    
            <Cardh/>    
            </div>
<Border/>
   <Hero5/>
        </div>
    )
}

export default Hero4