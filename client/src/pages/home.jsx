import React from 'react'
import Camera from '../components/shared/Camera.jsx'
function Home() {
  // Home page
  // Change tab title to 'Home'
  document.title = 'Home'
  return (
    <>
      <div className='h-screen  '>
      <div className='flex items-center justify-center h-4/6 pt-16'>
        <div className='w-1/2 flex flex-col justify-center items-start px-10 gap-5  h-4/5 '>
          <p className='border-2 text-2xl rounded-xl p-2 font-semibold text-[#ffd60a] bg-gray-700'>
            Track your daily Calorie int
          </p>
          <p className='text-7xl font-semibold text-gray-700'>
            Track your Daily <span className='text-[#ffd60a]'>Calorie intake</span> with MyHealth
          </p>
        </div>
        <div className='w-1/2 h-4/5 px-4'>
          <Camera />
        </div>
      </div>
      </div>
    </>
  )
}

export default Home