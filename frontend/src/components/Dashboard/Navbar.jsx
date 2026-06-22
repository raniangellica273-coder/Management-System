import React from 'react'
import { useAuth } from '../../context/authContext'
import { FaBell } from "react-icons/fa";

const Navbar = () => {
    const {user} = useAuth()

    return (
    <div className="
        h-20
        bg-white
        shadow-[0_2px_10px_rgba(0,0,0,0.05)]
        px-8
        flex
        justify-between
        items-center
        ">
      <div> 
        <h2 className='font-bold text-xl text-slate-800'>
          Welcome back, {user.name}
        </h2>
      <p className='text-sm text-gray-500'>
        Manage your oragnization efficiently
      </p>
      </div>

      <div className='flex items-center gap-5'>
        <FaBell className='text-xl text-gray-600 cursor-pointer hover:text-indigo-600' />
      <button className='bg-indigo-600 hover:bg-indigo-700 transition px-5 py-2 rounded-lg text-white font-medium shadow'>
        Logout
        </button>
    </div>
    </div>
  );
};

export default Navbar
