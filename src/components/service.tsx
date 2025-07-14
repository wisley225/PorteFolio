import { GoArrowUpRight } from 'react-icons/go';
import DivService from './divService';
import Description from './description';
import { useRef, useEffect } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)
const Service = () => {
const divRef=useRef<HTMLDivElement []>([])

 useEffect(() => {
   

     const ctx = gsap.context(() => {

 
      if (divRef.current ) {
   


      gsap.from(divRef.current, {
       opacity:0,
       duration:1,
       stagger:0.2,
       
     scrollTrigger: {
            trigger: divRef.current,
            scrub:1
          }
        })
     
      

    }
      })

      return () => ctx.revert()

   
  

  }, [])

    return (
        <div className="mx-4 sm:mx-6 md:mx-10 mt-16 sm:mt-24 md:mt-32 bg-black">
           <ul className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0"> 
             <li className="font-black text-2xl sm:text-3xl text-center sm:text-left">services</li> 
             <li className="text-lg sm:text-xl md:text-2xl cursor-pointer hover:text-gray-500 transition-all flex justify-center items-center gap-2"> 
               <span>see more</span> 
               <GoArrowUpRight className="text-xl sm:text-2xl"/> 
             </li> 
           </ul> 
           <hr className="border-1 border-gray-500 my-6 sm:my-8 md:my-10" />
             
  <div className='flex flex-col lg:flex-row justify-center gap-6 sm:gap-8 lg:gap-5 flex-wrap'>
    <div ref={(el) => {
            if (el) divRef.current[0] = el;
          }} className="w-full lg:w-auto">
   <DivService
     image="/vite.svg"
     title='web developer react & nest'
     text=" Skilled im building dynamic ,
      responsive web applications using ReactJS &  or Nextjs.
      Focused on delivering seamless user Experience With an emphasic on performance
      , maintainability and Scalability.
      "
     
    />
    </div>
 
<div
ref={(el) => {
            if (el) divRef.current[1] = el;
          }} className="w-full lg:w-auto"
>
    <DivService
     image="/vite.svg"
     title='react & php '
     text=" Skilled im building dynamic ,
      responsive web applications using ReactJS &  or Nextjs.
      Focused on delivering seamless user Experience With an emphasic on performance
      , maintainability and Scalability.
      "
    />
</div>
 
 <div
 ref={(el) => {
            if (el) divRef.current[2] = el;
          }} className="w-full lg:w-auto"
 >
   <DivService
     image="/vite.svg"
     title='app mobile Flutter &  nestjs'
     text=" Skilled im building dynamic ,
      responsive web applications using ReactJS &  or Nextjs.
      Focused on delivering seamless user Experience With an emphasic on performance
      , maintainability and Scalability.
      "
    />
 </div>
  
  </div>


          <Description
          text1='Specialized in developing seamless web & mobile experiences'
          text2='Innovation web & Mobile Solutions'
          text3=' My project feacture Sleek, responsive designs with php, react, flutter,nextJs, nestjs and php engaging and 
              intuitive  user interface.'
          text4=' On back-end,i use NestjS to build robust, scalable solutions,
                  ensuring Seamless integration to innovation , delivering solutions
                   that are both functional and delightful.'
          />
        </div>
    );
}

export default Service;
