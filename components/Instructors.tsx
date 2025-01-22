import React from 'react'
import { AnimatedTooltip } from './ui/animated-tooltip';
import { WavyBackground } from './ui/wavy-background';
import { Vortex } from './ui/vortex';

function Instructors() {
  
  return (
    <div className="relative h-screen overflow-hidden flex justify-center items-center ">

    <WavyBackground className="max-w-4xl mx-auto pb-40">
        
        <div className='flex items-center justify-center mt-14 text-4xl sm:text-5xl  font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-emerald-700 antialiased'>Meet Our Instructors</div>
        <div className='flex items-center justify-center mt-10 p-4 text-neutral-300 font-light text-lg'>
          <p>Meet your Coaches for your respective sports!</p>
        </div>
        
        
          <div className='flex items-center justify-center mt-12 p-7'><AnimatedTooltip items={people}/></div>
    
    

    </WavyBackground>
    
        



    </div>

    
    
  )
}
const people = [
    {
      id: 1,
      name: "Umesh Gupta",
      designation: "Basketball Coach",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    },
    {
      id: 2,
      name: "Laxman Pant",
      designation: "Football Coach",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      name: "Paribesh Nepal",
      designation: "Tennis Coach",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 4,
      name: "Birat Roka",
      designation: "Long Marathon Coach",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 5,
      name: "Brihat Thapa",
      designation: "Body Building Coach",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    },
    {
      id: 6,
      name: "Bivek",
      designation: "Table Tennis Coach",
      image:
        "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
    },
  ];
  

export default Instructors