import React from 'react'
import { StickyScroll } from './ui/sticky-scroll-reveal'

const content=[
    {
        "title": "Expert Coaches",
        "description": "Our coaches are seasoned professionals with years of experience, dedicated to providing top-notch training and guidance to help you excel in your sport.Basically they help you enhance you in your fitness journey"
      },
      {
        "title": "State-of-the-Art Facilities",
        "description": "Train in cutting-edge facilities equipped with the latest tools and technology to enhance your performance and ensure your safety."
      },
      {
        "title": "Personalized Training Programs",
        "description": "We create customized training plans tailored to your individual strengths, goals, and aspirations, whether you’re a beginner or a competitive athlete.There are personalized training programs for every sports on the basis of your needs and requirements"
      },
      {
        "title": "Focus on Holistic Development",
        "description": "Our programs emphasize not just physical skills but also mental resilience, discipline, and teamwork, shaping you into a well-rounded athlete."
      },
      
]

function WhyChooseUs() {
  return (
    <div className='h-screen'>


        <h1 className=' flex p-6 items-center justify-center text-xl sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-purple-600 '>Why Choose Us?</h1>
        <StickyScroll content={content}/>





    </div>
  )
}

export default WhyChooseUs