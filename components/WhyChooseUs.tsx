import React from 'react'
import { StickyScroll } from './ui/sticky-scroll-reveal'

const content=[
    {
        "title": "Expert Coaches",
        "description": "Our coaches are seasoned professionals with years of experience, dedicated to providing top-notch training and guidance to help you excel in your sport."
      },
      {
        "title": "State-of-the-Art Facilities",
        "description": "Train in cutting-edge facilities equipped with the latest tools and technology to enhance your performance and ensure your safety."
      },
      {
        "title": "Personalized Training Programs",
        "description": "We create customized training plans tailored to your individual strengths, goals, and aspirations, whether you’re a beginner or a competitive athlete."
      },
      {
        "title": "Focus on Holistic Development",
        "description": "Our programs emphasize not just physical skills but also mental resilience, discipline, and teamwork, shaping you into a well-rounded athlete."
      },
      {
        "title": "Supportive Community",
        "description": "Be part of a vibrant community of like-minded athletes who inspire and motivate each other to achieve greatness both on and off the field."
      }
]

function WhyChooseUs() {
  return (
    <div>


        <h1 className=' flex p-6 items-center justify-center text-xl sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-purple-600'>Why Choose Us?</h1>
        <StickyScroll content={content}/>





    </div>
  )
}

export default WhyChooseUs