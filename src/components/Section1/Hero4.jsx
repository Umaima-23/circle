import React from 'react'
import Subtitle from './Subtitle'
import Cardh from './Cardh'
import Border from '../Border'
import Hero5 from './Hero5'
import one from '../../assets/one.png'
import two from '../../assets/two.png'
import three from '../../assets/three.png'
import four from '../../assets/four.png'
import five from '../../assets/five.png'
import six from '../../assets/six.png'

const Hero4 = () => {
    return (
        <div className='h-screen '>
            <div className='mt-30 flex rounded-full justify-center'><Subtitle text='AWARDS' /></div>
            <div className='text-4xl mt-3 text-center'>An <span className='font-[700]'> award winning </span> platform, <span className='font-[700]'> loved by customers.</span> </div>
            <div className='grid grid-cols-1 gap-x-2 gap-y-10 m-20 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mx-auto max-w-4xl justify-items-center'>
            <Cardh img={one} text='Market leader across 18 categories'/>
            <Cardh img={two} text='Most loved SaaS tool in 2021'/>    
            <Cardh  img={three}  text='Category leader in 2022'/>    
            <Cardh  img={four} text='Most recommended tool in 2021'/>    
            <Cardh  img={five} text='Champion in survey tool 2022'/>    
            <Cardh  img={six} text='Top performer spring 2021'/>    
            </div>
<Border/>
   <Hero5/>
        </div>
    )
}

export default Hero4