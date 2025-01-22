import { ContactUs } from '@/components/ContactUs'
import React from 'react'

function page() {
  return (
    <div className='min-h-screen max-w-full bg-black flex flex-col justify-center items-center p-4 '>
        <div className='flex flex-col mt-40'>
            <div className=''>
                <h2 className='text-6xl flex justify-center items-center text-neutral-300 bg-gradient-to-br from-purple-400 to-purple-600 bg-clip-text text-transparent'>Contact Us</h2>
                <p className='text-neutral-300 font-light bg-gradient-to-r from-purple-300 to-purple-600 bg-clip-text text-transparent'>Contact us by filling the details below.</p>
                
                
                
            </div>
           


        </div>
        <div className='w-full'>
                  <ContactUs/>
            </div>
    </div>
  )
}

export default page