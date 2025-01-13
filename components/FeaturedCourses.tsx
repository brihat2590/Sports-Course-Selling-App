"use client"
import { BackgroundGradient } from "./ui/background-gradient";
import Link from "next/link";
import { Button } from "./ui/moving-border";


type Course1={
    id:number,
    title:string,

    slug:string,
    description:string,
    price:number,
    instructor:string,
    isFeatured:boolean,
    images:string[]
}

const courseData:{ courses: Course1[] }={
    "courses":[
        {
            "id": 1,
            "title": "Beginner's Basketball Training",
            "slug": "beginners-basketball-training",
            "description": "Learn the fundamentals of basketball, including dribbling, shooting, and passing techniques.",
            "price": 49.99,
            "instructor": "John Doe",
            "isFeatured": true,
            "images": ["https://example.com/images/basketball1.jpg", "https://example.com/images/basketball2.jpg"]
          },
          {
            "id": 2,
            "title": "Advanced Soccer Skills",
            "slug": "advanced-soccer-skills",
            "description": "Enhance your soccer techniques with this advanced course covering dribbling, ball control, and tactics.",
            "price": 69.99,
            "instructor": "Jane Smith",
            "isFeatured": false,
            "images": ["https://example.com/images/soccer1.jpg", "https://example.com/images/soccer2.jpg"]
          },
          {
            "id": 3,
            "title": "Yoga for Athletes",
            "slug": "yoga-for-athletes",
            "description": "Improve your flexibility and focus with yoga routines tailored for athletes.",
            "price": 39.99,
            "instructor": "Emily Johnson",
            "isFeatured": true,
            "images": ["https://example.com/images/yoga1.jpg", "https://example.com/images/yoga2.jpg"]
          },
          {
            "id": 4,
            "title": "Tennis Masterclass",
            "slug": "tennis-masterclass",
            "description": "Master the art of tennis with this comprehensive guide to techniques and strategies.",
            "price": 89.99,
            "instructor": "Roger Blake",
            "isFeatured": false,
            "images": ["https://example.com/images/tennis1.jpg", "https://example.com/images/tennis2.jpg"]
          },
          {
            "id": 5,
            "title": "Marathon Training Program",
            "slug": "marathon-training-program",
            "description": "Prepare for your next marathon with this detailed training program designed for all levels.",
            "price": 99.99,
            "instructor": "Michael Scott",
            "isFeatured": true,
            "images": ["https://example.com/images/marathon1.jpg", "https://example.com/images/marathon2.jpg"]
          },
          
            {
              "id": 6,
              "title": "Beginner's Guide to Tennis",
              "slug": "beginners-guide-to-tennis",
              "description": "Learn the basics of tennis, including rules, techniques, and tips to get started.",
              "price": 49.99,
              "instructor": "John Doe",
              "isFeatured": false,
              "images": [
                "https://example.com/images/tennis-course1.jpg",
                "https://example.com/images/tennis-course2.jpg"
              ]
            },
            {
                "id": 7,
                "title": "Beginner's Guide to Golf",
                "slug": "beginners-guide-to-golf",
                "description": "Learn the basics of golf, including rules, techniques, and tips to get started.",
                "price": 49.99,
                "instructor": "Rajesh Gupta",
                "isFeatured": false,
                "images": [
                  "https://example.com/images/tennis-course1.jpg",
                  "https://example.com/images/tennis-course2.jpg"
                ]
              },
            
        ]
          
    
}

export default function FeaturedCourses(){
    const featuredCourses = (courseData.courses as Course1[]).filter(
        (course) => course.isFeatured
      );
      
    return(
        <div className="bg-gray-900 py-14">
            <div>
                <div className="text-center">
                    <h2 className=" tracking-wide font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-100 to-teal-400 sm:text-2xl">FEATURED COURSES</h2>
                    <p className=" mt-2 text-neutral-300 tracking-tight text-3xl font-bold">Learn with the best!</p>
                </div>
                <div className="mt-10">
                    <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-8 justify-center">

                        {featuredCourses.map((course:Course1)=>(
                            <div key={course.id}className="flex justify-center ">
                                <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900 overflow-hidden h-full ">
                                    <div className="p-4 sm:p-6 flex flex-col items-center flex-grow">
                                        <p>{course.title}</p>
                                        <p>{course.description}</p>
                                        <Link href={`/course/${course.slug}`}>
                                        <span className="mt-5">learn more!</span>
                                        </Link>
                                        

                                    </div>

                                </BackgroundGradient>
                                


                            </div>

                        ))}
                        
                    </div>
                    
                </div>
                
            </div>
        </div>

    )

}