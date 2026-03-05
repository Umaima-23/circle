import React from 'react'
import one from '../../assets/one.png'


const Cardh = (props) => {
  return (
    <div> 
          <div className='bg-[#FFF5F3] w-65.25 h-64.75 rounded-sm  flex justify-center items-center'>
                <div className='flex justify-center flex-col items-center'>
                    <div className='w-20 h-25  '>
                   <img src={props.img} alt="" /> 

                    </div>
                <div className='font-[700] text-[16px] text-center px-10'>{props.text}</div>

                </div>
                </div>
</div>
  )
}

export default Cardh