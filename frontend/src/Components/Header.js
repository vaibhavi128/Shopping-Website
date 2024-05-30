import React from 'react'
import Logo from './Logo'
import { BsSearch } from "react-icons/bs";
import { FaUser } from "react-icons/fa6";
import { BsCart4 } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='h-16 shadow-md bg-white'>
      <div className='h-full container mx-auto flex items-center justify-between'>
        <div className="">
          <Link to={"/"}>
            <Logo/>
          </Link>
        </div>

        <div className=' flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow'>
          
          <input type='  text' placeholder='Search Product Here ' className=' outline-none cursor-pointer pl-7'/>
          <div className='text-lg min-w-[50px] h-8 bg-orange-300 flex items-center justify-center rounded-r-full text-pink-950'>
            <BsSearch/>
          </div>
        </div>

        <div className=' flex items-center gap-7'>
        <div className=' text-3xl cursor-pointer relative'>
            {/* cart */}
            <span><BsCart4/></span>
            <div className=' bg-yellow-200 text-black rounded-full text-center flex items-center w-5 h-5 p-1 justify-center absolute -top-2 -right-3'>
              <p className=' text-sm'>0</p>
            </div>
          </div>
          <div>
            
          </div>
          <div className=' text-3xl cursor-pointer'>
            <FaUser/>
          </div>
          <div>
            <Link to={"/Login"} className=' px-3 py-1 rounded-full text-black bg-slate-50 hover:bg-rose-700 justify-around'>Login</Link>
          </div>


        </div>
      </div>
    </header>
  )
}

export default Header