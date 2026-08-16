import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { motion as Motion } from 'motion/react'
import { BsArrowRight, BsBarChart, BsFileEarmarkText, BsGraphUpArrow, BsMic, BsPerson, BsPlayCircle, BsRobot, BsStars, BsStopwatch, BsTrophy } from 'react-icons/bs'
import { HiSparkles } from 'react-icons/hi'
import AuthModel from '../components/AuthModel'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import frontLady from '../assets/frontLady.png'
import hrImg from '../assets/HR.png'
import techImg from '../assets/tech.png'
import confidenceImg from '../assets/confi.png'
import creditImg from '../assets/credit.png'

const features = [
  { icon: <BsPerson />, title: 'Role & Experience Selection', text: 'AI adapts questions based on your role and experience level.', tone: 'purple' },
  { icon: <BsMic />, title: 'Smart Voice Interview', text: 'Practice with voice or text responses for a more realistic experience.', tone: 'violet' },
  { icon: <BsStopwatch />, title: 'Timer Based Simulation', text: 'Real interview pressure with time tracking and auto next question.', tone: 'blue' },
  { icon: <BsRobot />, title: 'AI Answer Evaluation', text: 'Get instant, detailed feedback with accuracy, relevance and clarity score.', tone: 'green' },
  { icon: <BsFileEarmarkText />, title: 'Resume Based Interview', text: 'Upload your resume and get personalized interview questions.', tone: 'orange' },
  { icon: <BsBarChart />, title: 'Performance Analytics', text: 'Track your progress with insights and improvement suggestions.', tone: 'pink' },
]

const modes = [
  { image: hrImg, title: 'HR Interview Mode', text: 'Behavioral & communication based questions.', action: 'Start Now', tone: 'purple' },
  { image: techImg, title: 'Technical Mode', text: 'Subject & role specific technical questions.', action: 'Start Now', tone: 'green' },
  { image: confidenceImg, title: 'Confidence Detection', text: 'Analyze your tone, pace & confidence in real-time.', action: 'Start Now', tone: 'blue' },
  { image: creditImg, title: 'Credit System', text: 'Use credits per interview. Earn more by inviting friends.', action: 'Explore', tone: 'orange' },
]

const toneMap = {
  purple: 'bg-gradient-to-br from-[#963dff] to-[#412aa9] text-white',
  violet: 'bg-gradient-to-br from-[#d448ff] to-[#64209f] text-white',
  blue: 'bg-gradient-to-br from-[#3499ff] to-[#314bcb] text-white',
  green: 'bg-gradient-to-br from-[#21d88f] to-[#097050] text-white',
  orange: 'bg-gradient-to-br from-[#ffb120] to-[#d86000] text-white',
  pink: 'bg-gradient-to-br from-[#ff5fa4] to-[#8d1d6c] text-white',
}

const modeTextMap = {
  purple: 'text-[#c15bff]',
  green: 'text-[#1ee58f]',
  blue: 'text-[#4a9aff]',
  orange: 'text-[#ffae16]',
}

function Home() {
  const { userData } = useSelector((state) => state.user)
  const navigate = useNavigate()
  const [showAuth, setShowAuth] = useState(false)
  const startInterview = () => (userData ? navigate('/interview') : setShowAuth(true))
  const openHistory = () => (userData ? navigate('/history') : setShowAuth(true))

  return (
    <div className="min-h-full overflow-hidden bg-[radial-gradient(circle_at_76%_20%,rgba(53,17,109,0.27),transparent_24%)] text-white">
      <Navbar />

      <main className="mx-auto max-w-[1550px] px-4 pb-5 pt-4 sm:px-6 lg:px-8">
        <section className="grid min-h-[495px] items-center gap-14 px-1 py-8 lg:grid-cols-[1fr_1.06fr]">
          <div className="max-w-[560px]">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#7722bb66] bg-[#791de91a] px-4 py-2 text-[13px] text-[#dda9ff]">
              <HiSparkles className="text-[#c74bff]" />
              AI-Powered Interview Platform
            </div>

            <Motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="mt-6 text-5xl font-semibold leading-[1.22] tracking-[-1.8px] text-white md:text-[70px]"
            >
              Practice Smarter.
              <br />
              Get <span className="bg-gradient-to-r from-[#ba42ff] to-[#407aff] bg-clip-text text-transparent">Hired Faster.</span>
            </Motion.h1>

            <p className="mt-4 max-w-[520px] text-[15px] leading-8 text-[#c5c7d4]">
              Realistic AI mock interviews with smart feedback, voice interaction and performance analytics to help you crack your dream job.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                className="inline-flex items-center gap-3 rounded-xl border-0 bg-gradient-to-r from-[#8c21ed] to-[#4a8aff] px-6 py-5 text-[17px] font-semibold text-white shadow-[0_10px_25px_rgba(86,36,168,0.29)]"
                onClick={startInterview}
              >
                Start Practice Now <BsArrowRight />
              </button>

            
            </div>

            <div className="mt-9 flex items-center gap-4">
              <div className="flex items-center">
                {[BsPerson, BsPerson, BsPerson, BsPerson].map((Icon, index) => (
                  <span
                    key={index}
                    className="mr-[-7px] grid h-9 w-9 place-items-center rounded-full border-2 border-[#111526] bg-[#dfd2c2] text-base text-[#111826] last:mr-0"
                  >
                    <Icon />
                  </span>
                ))}
                <b className="ml-1 grid h-9 w-9 place-items-center rounded-full border-2 border-[#111526] bg-[#20253a] text-[11px] font-bold text-white">
                  1K+
                </b>
              </div>

              <p className="text-[13px] leading-5 text-[#c5c7d4]">
                Join 1,000+ successful candidates
                <br />
                <small className="text-[#a6aaba] text-[12px] ">improving every day</small>
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative h-[465px] overflow-hidden rounded-[25px] border border-[#566074] bg-[#30303c]">
              <div className="absolute left-4 top-4 z-10 flex items-center gap-2 rounded-full border border-white/10 bg-[#20212ac7] px-3 py-2 text-sm font-semibold text-white backdrop-blur-md">
                <BsStars /> AI Interviewer
              </div>

              <img src={frontLady} alt="AI interviewer" className="h-full w-full object-cover object-center" />

              <div className="absolute inset-x-5 bottom-4 flex items-center justify-between rounded-[18px] border border-[#3c4054] bg-[#141729e8] px-5 py-4 backdrop-blur-md">
                <div>
                  <b className="block text-white">Great answer!</b>
                  <span className="mt-2 block text-sm text-[#d3d5df]">You covered the key points.</span>
                </div>
                <strong className="grid h-[65px] w-[65px] place-items-center rounded-full border-[5px] border-[#3add99] border-l-[#4e83ff] border-b-[#4e83ff] text-lg text-white">
                  87%
                </strong>
              </div>
            </div>

            <div className="absolute right-[-42px] top-[92px] flex items-center gap-3 rounded-[11px] border border-[#353850] bg-[#15192cde] px-4 py-3 text-sm text-white backdrop-blur-md">
              <BsGraphUpArrow /> <span>Real-time Feedback</span>
            </div>
            <div className="absolute right-[-42px] top-[156px] flex items-center gap-3 rounded-[11px] border border-[#353850] bg-[#15192cde] px-4 py-3 text-sm text-white backdrop-blur-md">
              <BsMic /> <span>Voice Interaction</span>
            </div>
            <div className="absolute right-[-42px] top-[224px] flex items-center gap-3 rounded-[11px] border border-[#353850] bg-[#15192cde] px-4 py-3 text-sm text-white backdrop-blur-md">
              <BsBarChart /> <span>Smart Analysis</span>
            </div>
          </div>
        </section>

        <section className="mt-7 grid gap-5 rounded-[20px] border border-[#292d41] bg-[#10162a]/80 p-6 sm:grid-cols-2 xl:grid-cols-4">
          {[
            { icon: <BsPerson />, label: '10K+', text: 'Interviews Conducted', style: 'bg-gradient-to-br from-[#963dff] to-[#412aa9]' },
            { icon: <BsTrophy />, label: '95%', text: 'Success Improvement', style: 'bg-gradient-to-br from-[#21d88f] to-[#097050]' },
            { icon: <BsBarChart />, label: '50+', text: 'Roles Covered', style: 'bg-gradient-to-br from-[#3499ff] to-[#314bcb]' },
            { icon: <BsStars />, label: '4.8/5', text: 'User Rating', style: 'bg-gradient-to-br from-[#ffb120] to-[#d86000]' },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-4 border-r-0 xl:border-r xl:border-[#2a2d41] xl:pr-5">
              <i className={`grid h-[62px] w-[62px] place-items-center rounded-[15px] text-[30px] text-white ${item.style}`}>
                {item.icon}
              </i>
              <p className="m-0">
                <b className="block text-[22px] font-semibold text-white">{item.label}</b>
                <span className="mt-1 block text-[12px] text-[#d3d5de]">{item.text}</span>
              </p>
            </div>
          ))}
        </section>

        <SectionTitle>
          Powerful <em className="not-italic bg-gradient-to-r from-[#ba42ff] to-[#407aff] bg-clip-text text-transparent">Features</em> to Ace Your Interview
        </SectionTitle>

        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6  ">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </section>

        <SectionTitle>
          Multiple <em className="not-italic bg-gradient-to-r from-[#ba42ff] to-[#407aff] bg-clip-text text-transparent">Interview Modes</em>
        </SectionTitle>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {modes.map((mode) => (
            <article key={mode.title} className="flex min-h-[240px] items-center gap-4 rounded-[15px] border border-[#292e45] bg-gradient-to-br from-[#11182c] to-[#0b1020] p-4">
              <img src={mode.image} alt="" className="h-[130px] w-[250px] object-contain" />
              <div>
                <h3 className="mb-2 text-[19px] font-semibold text-white">{mode.title}</h3>
                <p className="text-[14px] leading-6 text-[#bbc0cf]">{mode.text}</p>
                <button
                  className={`mt-4 inline-flex items-center gap-2 border-0 bg-transparent p-0 text-[13px] font-medium ${modeTextMap[mode.tone]}`}
                  onClick={mode.title === 'Credit System' ? () => navigate('/pricing') : startInterview}
                >
                  {mode.action} <BsArrowRight />
                </button>
              </div>
            </article>
          ))}
        </section>

        <section className="mt-8 flex flex-col gap-5 rounded-[16px] border border-[#292e45] bg-gradient-to-br from-[#11182c] to-[#0b1020] p-5 md:flex-row md:items-center md:p-6">
          <div className="text-5xl text-white"><BsStars /></div>
          <div>
            <h2 className="mb-2 text-[19px] font-semibold text-white">Ready to boost your interview skills?</h2>
            <p className="max-w-[460px] text-[14px] leading-6 text-[#bbc0cf]">
              Join thousands of candidates who are practicing smarter and getting hired faster with PrepAI.
            </p>
          </div>
          <button
            className="inline-flex items-center justify-center gap-3 rounded-xl border-0 bg-gradient-to-r from-[#8c21ed] to-[#4a8aff] px-5 py-4 text-sm font-semibold text-white md:ml-auto"
            onClick={startInterview}
          >
            Start Your First Interview <BsArrowRight />
          </button>
        </section>
      </main>

      {showAuth && <AuthModel onClose={() => setShowAuth(false)} />}
      <Footer />
    </div>
  )
}

function SectionTitle({ children }) {
  return <h2 className="mt-10 mb-6 text-center text-[23px] font-semibold tracking-[-0.04em] text-white">{children}</h2>
}

function FeatureCard({ icon, title, text, tone }) {
  return (
    <article className="rounded-[15px] border border-[#292e45] bg-gradient-to-br from-[#11182c] to-[#0b1020] p-5 text-center py-13 ">
      <i className={`grid h-14 w-14 place-items-center rounded-[15px] text-[40px] ${toneMap[tone]} mx-auto`}>{icon}</i>
      <h3 className="mt-4 text-[19px] font-semibold leading-6 text-white">{title}</h3>
      <p className="mt-2 text-[14px] leading-6 text-[#bbc0cf]">{text}</p>
    </article>
  )
}

export default Home
