import React from 'react'
import Arrow from '../components/Section1/Arrow'


const Button = ({text}) => {
    return (
        <div>
            <div className='flex justify-center mt-5'>
                <button className='bg-[#0CBBC7] px-5 py-3 cursor-pointer text-white m-auto flex font-medium tracking-wide'>
                    {text}<Arrow />
                </button>

            </div>
        </div>
    )
}

export default Button