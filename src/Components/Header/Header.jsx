import React, { useState } from 'react'
import Button from '../common/Button/Button'


const Header = () => {
    const [isOpen, setIsOpen] = useState(true)

    return (
        <div className='bg-black text-white flex items-center justify-between py-5 px-3'>
            <div>
                <img src='assets/urvi.svg' alt="logo" />
            </div>
            {
                isOpen && (
                    <ul className='flex items-center justify-between gap-10 py-3 font-medium  max-[600px]:grid
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
            <Button buttonName="Connect with me" onClick={() => {console.log("header")}} />

        </div>
    )

}

export default Header
