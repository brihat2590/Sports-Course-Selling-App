import React from 'react'
import Link from 'next/link'

function UpcomingWebinars() {
  return (
    <div className='p-12 bg-gray-900'>
        <div className='max-w-7xl mx-auto px-4 s,:px-6'>
            <div className='text-center'>
                <h2 className='tracking-wide font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-100 to-teal-400 sm:text-2xl'>Featured Course</h2>
                <p className='p-4 m-2 text-2xl font-extrabold tracking-tight leading-8'>Enhance your physical fitness!</p>
            </div>
            <div className='mt-10'>2</div>
            <div className='mt-10 text-center'>
                <Link href="/" >view all webinars</Link>
            </div>

        </div>
    </div>
  )
}

export default UpcomingWebinars