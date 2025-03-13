import React from 'react'
import profile_pic from '../../assets/uvprofile.png'
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Home = () => {

  return (
    <div className='flex justify-between items-start gap-12 text-white p-12 '>
      <div className='bg-gray-700 min-w-96 bg-opacity-25 p-6 rounded-3xl shadow-md shadow-white/30'>
        <img className='w-96 h-96 mx-auto rounded-full' src={profile_pic} alt="Urvisha Vara" />
        <div className='flex flex-col gap-4'>
          <div className="text-5xl text-center font-semibold mt-4">Urvisha Vara</div>
          <div className="text-gray-400 text-center">I am a Full-Stack devloper based in INDIA.</div>
          <div className="flex justify-center gap-4 mt-1 py-2 items-center">
            <a href="https://www.facebook.com/" target='_blank' className="text-gray-400 hover:text-blue-500 text-3xl">
              <FaFacebook />
            </a>
            <a href="https://www.twitter.com/" target='_blank' className="text-gray-400 hover:text-sky-400 text-3xl">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com/" target='_blank' className="text-gray-400 hover:text-blue-600 text-3xl">
              <FaLinkedin />
            </a>
            <a href="https://www.github.com/" target='_blank' className="text-gray-400 hover:text-white text-3xl">
              <FaGithub />
            </a>
          </div>
        </div>

      </div>
      <div className='flex flex-col gap-7'>
        <div className='bg-gray-700 bg-opacity-25 p-6 rounded-3xl shadow-md shadow-white/30'>
          <div className='text-gray-400'>Hello There!</div>
          <h2 className='font-normal text-5xl my-5'>
            I'm a passionate Full-Stack Developer  <br /> with experience in building dynamic and scalable web layout. <br />
          </h2>
          <div className='flex items-center gap-2'>
            <div className='w-3 h-3 rounded-full bg-green-600 p-1'>
            </div>
            <div className='text-gray-400'>
              Available for Freelancing
            </div>
          </div>
          <a href="#"><button className='rounded-md bg-orange-800 w-36 border border-x-white p-3 my-5'>Download CV</button></a>
        </div>
        <div className='flex gap-8 justify-center items-center bg-gray-700 bg-opacity-25 p-10 min-h-48 rounded-3xl shadow-md shadow-white/30'>
          <div>HTML</div>
          <div>CSS</div>
          <div>BOOTSTRAP</div>
          <div>JAVASCRIPT</div>
          <div>REACT JS</div>
        </div>
      </div>
    </div>
  )
}

export default Home