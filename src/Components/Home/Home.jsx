import React from 'react'
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import MarqueeComponent from '../Marquee/MarqueeComponent ';
import Button from '../common/Button/Button';
import Heading from '../common/Heading/Heading';
import BgLayout from '../common/BgLayout/BgLayout';
import Card from '../common/card/card';

const Home = () => {

  const skills = ['HTML', 'CSS', "JAVASCRIPT", "ReactJS", "BOOTSTRAP", "TAILWIND"]

  return (
    <div className='space-y-10'>
      {/* First Main Div */}
      <div className='grid grid-cols-2 max-[1050px]:grid-cols-1 justify-between items-start gap-12 text-white'>
        <BgLayout>
          <img className='w-96 h-96 mx-auto rounded-full' src='./assets/uvprofile.png' alt="Urvisha Vara" />
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
        </BgLayout>
        <div className='gap-7 flex flex-col justify-between h-full'>
          <BgLayout>
            <div className='text-gray-400'>Hello There!</div>
            <h2 className='font-normal text-5xl my-5'>

            </h2>
            <Heading text=" I'm a passionate Full-Stack Developer with experience in building dynamic and scalable web layout" />

            <div className='flex items-center gap-2'>
              <div className='w-3 h-3 rounded-full bg-green-600 p-1'>
              </div>
              <div className='text-gray-400'>
                Available for Freelancing
              </div>
            </div>
            <a href="#"> <Button buttonName="Download CV" onClick={() => { console.log("VC") }} /> </a>
          </BgLayout>
          <BgLayout>
            <Heading classNames="text-xl" text="Skills" />
            <MarqueeComponent classNames="max-w-[920px]" skills={skills} />
          </BgLayout>
        </div>
      </div>
      {/* second main div */}
      <div>
        <BgLayout>
          <Heading classNames="text-center" text="Works & Projects" />
          <Heading classNames="text-center text-xl" text="Check out some of my design projects, meticulously crafted with love and dedication,
           each one reflecting the passion and soul I poured into every detail. " />
          <div className='grid grid-cols-3 max-[700px]:grid-cols-1 space-x-4'>
            <BgLayout>
              <div className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 ...'>
                <a href=""><img src="./assets/furniro.JPG" alt="Furniro" /></a>
                <Heading classNames="text-center text-xl" text="Furniro Project" />
              </div>
            </BgLayout>
            <BgLayout>
              <div className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...'>
                <a href=""><img src="./assets/food.JPG" alt="Food" /></a>
                <Heading classNames="text-center text-xl" text="Food Project" />
              </div>
            </BgLayout>
            <BgLayout>
              <div className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...'>
                <a href=""><img src="./assets/calculator.JPG" alt="Furniro" /></a>
                <Heading classNames="text-center text-xl" text="Calc Task" />
              </div>
            </BgLayout>
          </div>
        </BgLayout>
      </div>
      {/* Third Main Layout */}
      <div>
        <BgLayout>
          <Heading classNames="text-center text-2xl max-w-" text="Are You Ready to kickstart your project with a touch of magic?" />
          <Heading classNames="text-center text-xl max-w-96" text="Reach out and let's make it happen ✨. 
          I'm also available for full-time or Part-time opportunities to push the boundaries of design and deliver exceptional work." />
        </BgLayout>
      </div>
    </div>
  )
}

export default Home