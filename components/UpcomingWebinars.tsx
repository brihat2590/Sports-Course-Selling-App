import React from 'react'
import Link from 'next/link'
import { Button } from './ui/moving-border'
import { HoverEffect } from './ui/card-hover-effect'

function UpcomingWebinars() {
  return (
    <div className='p-12 bg-gray-900'>
        <div className='max-w-7xl mx-auto px-4 s,:px-6'>
            <div className='text-center'>
                <h2 className='tracking-wide font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-100 to-teal-400 sm:text-2xl'>Featured Course</h2>
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
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
  {
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
];
export default UpcomingWebinars