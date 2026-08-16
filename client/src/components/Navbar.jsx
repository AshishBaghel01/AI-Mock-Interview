import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { signOut } from 'firebase/auth'
import { BsCoin, BsRobot } from 'react-icons/bs'
import { HiOutlineLogout } from 'react-icons/hi'
import { FaUserAstronaut } from 'react-icons/fa'
import { ServerUrl } from '../App'
import { auth } from '../utils/firebase'
import { setUserData } from '../redux/userSlice'
import AuthModel from './AuthModel'

function Navbar() {
  const { userData } = useSelector((state) => state.user)
  const [showCreditPopup, setShowCreditPopup] = useState(false)
  const [showUserPopup, setShowUserPopup] = useState(false)
  const [showAuth, setShowAuth] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const requireLogin = (action) => (userData ? action() : setShowAuth(true))

  const handleLogout = async () => {
    try {
      await axios.get(`${ServerUrl}/api/auth/logout`, { withCredentials: true })
    } catch (error) {
      console.error('Server logout failed:', error)
    }

    try {
      await signOut(auth)
    } catch (error) {
      console.error('Firebase logout failed:', error)
    }

    dispatch(setUserData(null))
    setShowCreditPopup(false)
    setShowUserPopup(false)
    navigate('/')
  }

  return (
    <header className="relative z-50 px-4 pt-5 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-[1500px] items-center justify-between rounded-2xl border border-white/10 bg-[#0b1020]/80 px-4 py-2.5 shadow-[0_18px_32px_rgba(2,6,23,0.5)] backdrop-blur-sm">
        <button className="flex items-center gap-3 border-0 bg-transparent text-left text-white" onClick={() => navigate('/')}>
          <span className="text-[26px] text-[#a645ff]"><BsRobot /></span>
          <div>
            <b className="block text-[22px] leading-[22px] text-white">
              Prep<span className="bg-gradient-to-r from-[#ba42ff] to-[#407aff] bg-clip-text text-transparent">AI</span>
            </b>
            <small className="block text-[13px] text-[#b7b8c7]">AI Mock Interview</small>
          </div>
        </button>

        <nav className="hidden items-center gap-10 md:flex">
          <button className="border-0 bg-transparent p-0 text-[18px] text-[#c053ff] underline-offset-8 hover:underline" onClick={() => navigate('/')}>
            Home
          </button>
          <button className="border-0 bg-transparent p-0 text-[18px] text-[#e7e6ec]" onClick={() => requireLogin(() => navigate('/history'))}>
            History
          </button>
          <button className="border-0 bg-transparent p-0 text-[18px] text-[#e7e6ec]" onClick={() => navigate('/pricing')}>
            Price
          </button>
        </nav>

        <div className="flex items-center gap-4 sm:gap-7">
          <div className="relative">
            <button
              className="flex items-center gap-2 rounded-[13px] border border-[#2d3041] bg-[#0b0d1b] px-3.5 py-3 text-sm text-white sm:px-4"
              onClick={() => requireLogin(() => {
                setShowCreditPopup(!showCreditPopup)
                setShowUserPopup(false)
              })}
            >
              <i className="text-[#ffae00]"><BsCoin /></i>
              {userData?.credits ?? 0} Credits
            </button>

            {showCreditPopup && (
              <div className="absolute right-0 top-[calc(100%+10px)] z-20 w-[230px] rounded-xl border border-[#303347] bg-[#101426] p-4 text-left shadow-[0_18px_45px_rgba(0,0,0,0.6)]">
                <p className="mb-3 text-[13px] text-[#b6bbca]">Need more credits to continue interviews?</p>
                <button className="w-full rounded-lg bg-[#7730e9] px-3 py-2 text-center text-white" onClick={() => navigate('/pricing')}>
                  Buy more credits
                </button>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#a647ff] bg-[#141327] text-base font-bold text-white"
              aria-label="Account menu"
              onClick={() => requireLogin(() => {
                setShowUserPopup(!showUserPopup)
                setShowCreditPopup(false)
              })}
            >
              {userData ? userData.name?.slice(0, 1).toUpperCase() : <FaUserAstronaut />}
            </button>

            {showUserPopup && (
              <div className="absolute right-0 top-[calc(100%+10px)] z-20 w-[230px] rounded-xl border border-[#303347] bg-[#101426] p-4 text-left shadow-[0_18px_45px_rgba(0,0,0,0.6)]">
                <b className="block text-[#c968ff]">{userData?.name}</b>
                <span className="mt-1 block text-[13px] text-[#b6bbca]">{userData?.email}</span>
                <button className="mt-3 w-full border-0 bg-transparent p-0 text-left text-[#e9e8f0]" onClick={() => navigate('/history')}>
                  Interview History
                </button>
                <button className="mt-3 flex items-center gap-2 border-0 bg-transparent p-0 text-left text-[#ff7799]" onClick={handleLogout}>
                  <HiOutlineLogout /> Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {showAuth && <AuthModel onClose={() => setShowAuth(false)} />}
    </header>
  )
}

export default Navbar
