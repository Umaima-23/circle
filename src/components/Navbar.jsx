import React from 'react'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div className='flex w-6xl m-auto'>
        <ul className='w-full flex justify-between px-7 py-6 '>
            <li>Features</li>
            <li>Pricing</li>
            <li>Testimonals</li>
            <li>Resources</li>
            <li className='px-4  pe-24'><img src={logo} alt="" /></li>
            <li>Company</li>
            <li>Contact</li>
        </ul>
            <button className='border-[1.5px] border-[#0CBBC7] m-4 px-12 py-1.5 text-[#0CBBC7] font-medium'>Login</button>

    </div>
  )
}

export default Navbar