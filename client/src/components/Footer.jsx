import React from 'react'
import { motion as Motion } from 'motion/react'
import { BsRobot } from 'react-icons/bs'
import { FiHeadphones, FiLock, FiSmartphone } from 'react-icons/fi'

function Footer() {
  const highlights = [
    {
      title: 'Secure & Private',
      description: 'Your data is safe\nand encrypted.',
      icon: FiLock,
      iconClass: 'border-pink-500/25 bg-pink-500/10 text-pink-400',
    },
    {
      title: 'Powered by AI',
      description: 'Advanced AI models for\nrealistic interviews.',
      icon: BsRobot,
      iconClass: 'border-violet-500/25 bg-violet-500/10 text-violet-400',
    },
    {
      title: 'Accessible Anywhere',
      description: 'Practice on web,\nanytime, anywhere.',
      icon: FiSmartphone,
      iconClass: 'border-cyan-500/25 bg-cyan-500/10 text-cyan-400',
    },
    {
      title: '24/7 Support',
      description: "We're here to help\nyou succeed.",
      icon: FiHeadphones,
      iconClass: 'border-amber-500/25 bg-amber-500/10 text-amber-400',
    },
  ]

  return (
    <Motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className='px-4 pb-4 pt-10 sm:px-6 lg:px-10'
    >
      <div className='mx-auto grid max-w-[1500px] overflow-hidden rounded-2xl border border-white/20 bg-white/[0.08] px-4 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.25)] backdrop-blur-2xl backdrop-blur-sm sm:grid-cols-2 sm:px-7 lg:grid-cols-4 lg:py-5'>
        {highlights.map(({ title, description, icon: Icon, iconClass }, index) => (
          <div
            key={title}
            className={`flex items-center gap-3 py-3 lg:px-5 lg:py-0 ${index !== 0 ? 'lg:border-l lg:border-slate-800' : ''}`}
          >
            <div className={`grid h-11 w-11 shrink-0 place-items-center rounded-full border ${iconClass}`}>
              <Icon size={21} strokeWidth={2} />
            </div>
            <div>
              <h2 className='text-sm font-semibold tracking-tight text-slate-100'>{title}</h2>
              <p className='mt-1 whitespace-pre-line text-sm leading-5 text-slate-400'>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </Motion.footer>
  )
}

export default Footer
