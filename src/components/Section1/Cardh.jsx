import React from 'react'
import one from '../../assets/one.png'


const Cardh = () => {
  return (
    <div> 
          <div className='bg-[#FFF5F3] w-65.25 h-64.75 rounded-sm  flex justify-center items-center'>
                <div className='flex justify-center flex-col items-center'>
                <img className='w-22.25 h-25 '  src={one} alt="" />
                <div className='font-[700] text-[16px] text-center'>Market leader across 18 categories</div>

                </div>
                </div>
</div>
  )
}

export default Cardh