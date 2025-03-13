import React, { useState } from 'react'
import logo from '../../assets/urvi.svg'


const Header = () => {
    const [isOpen, setIsOpen] = useState(true)

    return (
        <div className='bg-black text-white flex items-center justify-between py-5 px-3'>
            <div>
                <img src={logo} alt="logo" />
            </div>
            {
                isOpen && (
                    <ul className='flex items-center justify-between gap-6 py-3 font-medium max-[600px]:grid
                     max-[600px]:absolute max-[600px]:top-24 left-0 max-[600px]:justify-center max-[600px]:w-full
                      max-[600px]:bg-slate-100 duration-150 transition-all'>
                        <a href="#" className="rounded-md py-2 font-medium text-white max-[600px]:text-black">Home</a>
                        <a href="#" className="rounded-md py-2 font-medium text-white max-[600px]:text-black">About Us</a>
                        <a href="#" className="rounded-md py-2 font-medium text-white max-[600px]:text-black">Projects</a>
                        <a href="#" className="rounded-md py-2 font-medium text-white max-[600px]:text-black">Skills</a>
                        <a href="#" className="rounded-md py-2 font-medium text-white max-[600px]:text-black">Contact</a>
                    </ul>
                )
            }
            <button onClick={() => { setIsOpen(!isOpen) }} className='max-[600px]:block hidden  text-white'>MENU</button>
            <button className='rounded-lg bg-orange-800 w-36 border border-x-white px-2 py-3 my-5'>Connect With Me</button>

        </div>
    )

}

export default Header
