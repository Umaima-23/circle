import React from 'react'
import ButtonWa from '../ButtonWa'

const Card8h = (props) => {
    return (
        <div>
            <div className='h-auto bg-white p-5 pb-10'>
                <img src={props.img} alt="" />
               <div className='mt-3 font-[700]'>{props.text} </div>
               <div className='mt-3 text-[#676767] text-sm'>{props.text2} </div>
               <div className='mt-3 text-[#676767] text-sm'>{props.text3} </div>
                 <ButtonWa text='Read more'/>



            </div>
        </div>
    )
}

export default Card8h