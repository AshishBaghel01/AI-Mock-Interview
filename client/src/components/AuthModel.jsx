import React from 'react'
import { useEffect } from 'react'
import { motion as Motion } from 'motion/react'
import { useSelector } from 'react-redux'
import { FaTimes } from "react-icons/fa";
import Auth from '../pages/Auth';

function AuthModel({onClose}) {
    const {userData} = useSelector((state)=>state.user)

    useEffect(()=>{
        if(userData){
            onClose()
        }

    },[userData , onClose])

  return (
    <Motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className='fixed inset-0 z-999 flex items-center justify-center bg-black/10 backdrop-blur-sm px-4'>
        <Motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.45 }} className='relative w-full max-w-md'>
            <button onClick={onClose} className='absolute top-8 right-5 text-gray-800 hover:text-black text-xl'>
             <FaTimes size={18}/>
            </button>
            <Auth isModel={true}/>


        </Motion.div>

      
    </Motion.div>
  )
}

export default AuthModel
