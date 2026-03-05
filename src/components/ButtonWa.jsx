import React from 'react'

const ButtonWa = ({text}) => {
  return (
      <div>
            <div className='flex justify-start mt-5'>
                <button className='bg-[#0CBBC7] px-8 py-3 cursor-pointer text-white  flex font-semibold'>
                    {text}
                </button>

            </div>
        </div>
  )
}

export default ButtonWa