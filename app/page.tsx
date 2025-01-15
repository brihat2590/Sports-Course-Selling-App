import FeaturedCourses from '@/components/FeaturedCourses'
import Herosection from '@/components/Herosection'
import Instructors from '@/components/Instructors'
import { InfiniteMovingCardsDemo } from '@/components/TestimonialsSection'
import UpcomingWebinars from '@/components/UpcomingWebinars'
import WhyChooseUs from '@/components/WhyChooseUs'
import React from 'react'

function page() {
  return (
    <main className='min-h-screen bg-black/[0.96] antialiased text-neutral-300 '>
      
          <Herosection/>
          <FeaturedCourses/>
          <WhyChooseUs/>
          <InfiniteMovingCardsDemo/>
          <UpcomingWebinars/>
          <Instructors/>
          


    </main>
  )
}

export default page