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
        <div className='h-auto'>
            <div className='flex justify-center pt-10'>
                <Subtitle text='resources' />
            </div>
            <div className='text-center text-3xl mt-3'><span className='font-[700]'>Stay</span> in the <span className='font-[700]'></span>know</div>

 <div className='mt-10 relative grid md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-x-10 gap-y-2 h-auto mx-30'>
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

           
            <div className='w-full h-100 bg-[#EDFEFF]'></div>
            <Footer/>
        </div>
    )
}

export default Hero8