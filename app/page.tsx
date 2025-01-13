import FeaturedCourses from '@/components/FeaturedCourses'
import Herosection from '@/components/Herosection'
import React from 'react'

function page() {
  return (
    <main className='min-h-screen bg-black/[0.96] antialiased text-neutral-300 '>
      
          <Herosection/>
          <FeaturedCourses/>


    </main>
  )
}

export default page