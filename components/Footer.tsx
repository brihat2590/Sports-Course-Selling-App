import React from 'react'

function Footer() {
  return (
    <footer className='bg-black py-12 text-gray-300'>
        <div className='grid grid-cols-1 sm:grid-cols-2 max-w-6xl mx-auto lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8 '>
            <div>
                <h2 className='text-3xl font-semibold'>About Us</h2>
                <p className='font-light'>the sports school is a premier institution that teaches all the sports activities and has world renouned infrastructure where  students can learn and enjoy various sports </p>

            </div>
            <div>
                <h2 className='text-3xl font-semibold'>Quick Links</h2>
                <div className='flex flex-col'>
                    <a href='/'>home</a>
                    <a href='#'>about</a>
                    <a href="#">courses</a>
                    <a href="#">contact</a>
            

                </div>
                
                
            </div>
            <div>
                <h2 className='text-3xl font-semibold'>Follow us</h2>
                <div className='flex flex-col '>
                    <a href='#'>Facebook</a>
                    <a href='#'>Twitter</a>
                    <a href='#'>Instagram</a>
                    <a href='#'>Discord</a>
                </div>
                
                
            </div>
            <div>
                <h2 className='text-3xl font-semibold'>
                    Contact Us

                </h2>
                <div className='flex flex-col'>
                    <a>Tokha Road</a>
                    <a>Kathmandu, Nepal</a>
                    <a>sportssclktm@gmail.com</a>
                    <a>+977 9841235679</a>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer