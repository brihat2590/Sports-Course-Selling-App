import React from 'react'
import Link from 'next/link'
import { Button } from './ui/moving-border'
import { HoverEffect } from './ui/card-hover-effect'

function UpcomingWebinars() {
  return (
    <div className='p-12 bg-gray-900'>
        <div className='max-w-7xl mx-auto px-4 s,:px-6'>
            <div className='text-center'>
                <h2 className='tracking-wide font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-100 to-teal-400 sm:text-2xl'>Upcoming Courses</h2>
                <p className='p-4 m-2 text-2xl font-extrabold tracking-tight leading-8'>Enhance your physical fitness!</p>
            </div>
            <div className="max-w-5xl mx-auto px-8">
              <HoverEffect items={projects}/>
                  
            </div>
            <div className='mt-10 text-center'>
                <Button><Link href="/" > upcoming course</Link></Button>
            </div>

        </div>
    </div>
  )
}
export const projects = [
  {
    "title": "Introduction to Sports Management",
    "description": "Learn the basics of managing sports organizations, including event planning, marketing, and team management.",
    "link": "https://example.com/courses/sports-management"
  },
  {
    "title": "Sports Nutrition and Performance",
    "description": "Understand the role of nutrition in athletic performance and how to create diet plans for athletes.",
    "link": "https://example.com/courses/sports-nutrition"
  },
  {
    "title": "Advanced Coaching Techniques",
    "description": "Develop effective coaching strategies for different sports and levels of competition.",
    "link": "https://example.com/courses/advanced-coaching"
  },
  {
    "title": "Sports Psychology and Mental Training",
    "description": "Explore the psychological factors affecting athlete performance and how to improve mental toughness.",
    "link": "https://example.com/courses/sports-psychology"
  },
  {
    "title": "Sports Analytics and Data Science",
    "description": "Learn how to leverage data and analytics to improve team performance and decision-making in sports.",
    "link": "https://example.com/courses/sports-analytics"
  },
  {
    "title": "Fitness Training and Conditioning",
    "description": "Master the principles of fitness training and conditioning to enhance athletic performance.",
    "link": "https://example.com/courses/fitness-training"
  },
  
];
export default UpcomingWebinars