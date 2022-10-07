import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

export default function Navbar({ setAuthState }) {
  return (
    <div className='z-10 bg-black mix-blend-overlay pb-2 sticky'>
      <div className='flex justify-between items-center'>
        <div className='p-5 flex text-4xl font-semibold  text-white py-1 ml-2 mt-2 rounded-full'>
          <img className="w-10" src={logo} alt="logo" />
          <span className="pl-3">weGuide</span>
        </div>
        <div className='space-x-5 text-2xl cursor-pointer font-semibold '>
          <a href="#home" className=' text-white text-2xl mt-7 py-1 px-4 rounded-full '>Home</a>
          <a href="#learn" className=' text-white text-2xl mt-7 py-1 px-4 rounded-full '>Learn</a>
          <a href="#About Us" className=' text-white text-2xl mt-7 py-1 px-4 rounded-full '>About Us</a>
        </div>
        <div className='space-x-4 text-2xl cursor-pointer font-semibold mr-12 '>
          <Link to="/login"><button className='bg-gray-500 text-white text-2xl py-1 px-4 rounded-2xl'>Login</button></Link>
          <Link to="/auth"><button onClick = { () => setAuthState('signup') } className='text-white text-2xl  py-1 px-4 rounded-2xl hover:bg-gray-500 hover:text-white mt-4'>Sign Up</button></Link>
          {/* <Link to="/register"><button onClick = { () => setAuthState('signup') } className='text-white text-2xl  py-1 px-4 rounded-2xl hover:bg-gray-500 hover:text-white mt-4'>Sign Up</button></Link> */}
          {/* <Link to="/login"><button className='bg-gray-500 text-white text-2xl py-1 px-4 rounded-md mt-2'>Sign In</button></Link> */}
        </div>
      </div>

    </div>
  )
}
