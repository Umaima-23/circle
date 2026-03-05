import React from 'react'
import end from '../../assets/end.png'
import Border from '../Border'
import logos from '../../assets/logoss.png'
const Footer = () => {
  return (
    <>
    <div>
        <div className='w-full bg-[#232323]'>
  <div className=' grid md:grid-cols-4 sm:grid-cols-1 h-auto py-20 p-10 pe-40 ps-40'>
       
        <div className=' flex justify-center items-start pt-20 '><img src={end} alt="" />  </div>

        <div className=' flex flex-col p-10 gap-4 text-center'>
            <h3 className='text-white font-bold text-lg'>
        Products
    </h3>
            <ul className='text-[#7C7C7C] font-medium pb-10 space-y-4'>
                <li>Delta</li>
                <li>Sigma</li>
                <li>Zeta</li>
                <li>Alpha</li>
                <li>Acumen</li>
            </ul>
        </div>
        <div className=' flex flex-col p-10 gap-4 text-center'>
            <h3 className='text-white font-bold text-lg'>
        Resources
    </h3>
            <ul className='text-[#7C7C7C] font-medium pb-10 space-y-4'>
                <li>Help</li>
                <li>Training Videos</li>
                <li>Webinars</li>
                <li>Request a Demo</li>
                <li>Create Surveys</li>
                <li>Quiz Maker</li>

            </ul>
        </div>
        <div className=' flex flex-col p-10 gap-4 text-center'>
            <h3 className='text-white font-bold text-lg'>
        Company
    </h3>
            <ul className='text-[#7C7C7C] font-medium pb-10 space-y-4'>
                <li>About Us</li>
                <li>Careers</li>
                <li>Team</li>
                <li>Contact Us</li>
            </ul>
        </div>
        </div>
        <div className='border m-auto  w-[80%] border-gray-700'>
          
        </div>
          <div className='flex text-[#7C7C7C] text-sm p-10 justify-between'>
                <div>Copyright 2022 Circle. All rights reserved.</div>
                <div><img src={logos} alt="" /></div>
                <div>Privacy Policy     |     Data & Security     |     Terms of Service     |     Data & Security</div>
            </div>
    </div>
        
    </div>
  

        

          </>
  )
}

export default Footer