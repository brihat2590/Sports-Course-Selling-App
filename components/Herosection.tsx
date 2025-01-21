import Link from "next/link";
import { Button } from "./ui/moving-border";
import { Spotlight } from "./ui/Spotlight";
export default function Herosection(){
    return(
        <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col  justify-center items-center relative overflow-hidden mx-auto py-10 md:py-0 ">
            <Spotlight className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"/>

                <div className="p-4 relative z-10 w-full text-center">
                    <h1 className="mt-23 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 ">Master the Fundamental of Sports</h1>
                    <span className=" text-neutral-300 text-base mt-6">"Unlock Your Athletic Potential with <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-200 to-neutral-600 font-bold">Expert-Led</span> Sports Courses"</span>
                    <p className="text-neutral-300 mt-6  text-base">Take your skills to the next level with our expert-led sports courses. From beginners to advanced athletes,<br/> we offer tailored programs for all ages, covering basketball, Football, yoga, and more. Join us today and unlock your full athletic potential!</p>
                    <div className="mt-8 ">

                        <Link href={"/courses"}><Button className="bg-gray-950">Explore courses</Button></Link>
                    </div>




                </div>
           
            


            
        </div>
    )
}