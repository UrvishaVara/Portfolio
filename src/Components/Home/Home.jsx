import React from 'react'
import profile_pic from '../../assets/uvprofile.png'

const Home = () => {

  return (
    <div className='flex justify-between items-start gap-12 text-white p-12 '>
      <div className='bg-gray-700 min-w-96 bg-opacity-25 p-6 rounded-3xl shadow-md shadow-white/30'>
        <img className='w-96 h-96 mx-auto rounded-full' src={profile_pic} alt="Urvisha Vara" />
        <h2 className="text-2xl font-semibold mt-4">Urvisha Vara</h2>
        <p className="text-gray-400">I am a Full-Stack devloper based in INDIA.</p>
      </div>
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
    </div>
  )
}

export default Home