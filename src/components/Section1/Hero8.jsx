import React from 'react'
import Subtitle from './Subtitle'
import Card8h from './Card8h'
import one from "../../assets/card8one.png";
import two from "../../assets/card8two.png";
import three from "../../assets/card8three.png";
import Button from '../Button';
import Footer from './Footer';


const Hero8 = () => {
    return (
        <div className='min-h-screen w-full flex flex-col m-auto '>
            <div className='flex flex-col items-center pt-12 md:pt-20 px-4 justify-center '>
                <Subtitle text='resources' />
                <h2 className='text-center text-2xl md:text-4xl lg:text-5xl mt-4 leading-tight'>
                    <span className='font-[700] text-gray-900'>Stay</span> in the <span className='font-bold text-gray-900'>know</span>
                </h2>
            </div>

 <div className='relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 mt-12 md:mt-16'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10'>
                <Card8h img={one} text='Excepteur sint occaecat cupidatat non proident'
                 text2='Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos ' 
                text3=' Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci veli'/>
                <Card8h img={two} text='Excepteur sint occaecat cupidatat non proident'
                 text2='Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos ' 
                text3=' Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci veli' />
                <Card8h img={three} text='Excepteur sint occaecat cupidatat non proident'
                 text2='Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos ' 
                text3=' Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci veli'/>
              

            </div>
</div>
           
            <div className='w-full  h-100 bg-[#EDFEFF]  -mt-32 md:-mt-48 pt-48 md:pt-64 pb-20 z-0'></div>
            <Footer/>
        </div>
    )
}

export default Hero8