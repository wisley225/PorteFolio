import { GoArrowUpRight } from "react-icons/go";
import Divproject from "./divproject";
import Description from "./description";
import { useRef, useEffect } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";
gsap.registerPlugin(ScrollTrigger)
import InfiniteScroll from "./InfinitScroll";

const Project = () => {

  const hrRef = useRef<HTMLHRElement>(null)
  const textRef = useRef<HTMLLIElement []>([])
  const textRef2 = useRef<HTMLParagraphElement[]>([])

const items = [
  { content: "Text Item 1" },
  { content:    <Divproject
             title='Fresh Pharma'
             genre=' site web'
             image='/imagerie.png'
             /> },
  { content: "Text Item 3" },
  { content: <p>Paragraph Item 4</p> },
  { content: "Text Item 5" },
  { content: <p>Paragraph Item 6</p> },
  { content: "Text Item 7" },
  { content: <p>Paragraph Item 8</p> },
  { content: "Text Item 9" },
  { content: <p>Paragraph Item 10</p> },
  { content: "Text Item 11" },
  { content: <p>Paragraph Item 12</p> },
  { content: "Text Item 13" },
  { content: <p>Paragraph Item 14</p> },
];

  useEffect(() => {
   

     const ctx = gsap.context(() => {

       if (hrRef.current ) {
     gsap.from(hrRef.current, {
          width: '0%',
          duration: 2,
          scrollTrigger: {
            trigger: hrRef.current,
            scrub: 1
          }

        })
    }
      if (textRef.current && textRef2.current) {
      const splitText = new SplitType(textRef.current, { types: 'chars' })
       


      gsap.from(splitText.chars, {
       opacity:0,
       filter:'blur(4px)',
       duration:0.1,
       stagger:0.05,
         scrollTrigger: {
            trigger: textRef.current,
          toggleActions: "play none reverse none ",

            
          }

        })
     
      

    }
      })

      return () => ctx.revert()

   
  

  }, [])




    return (
        <div className=" mx-10 mt-32  bg-black">
           <ul className="flex justify-between  ">
             <li
             ref={(el) => {
            if (el) textRef.current[0] = el;
          }} className="font-black text-3xl">
               Featured Projects</li> 
               <li
               
               ref={(el) => {
            if (el) textRef.current[1] = el;
          }}className=" text-2xl  cursor-pointer hover:text-gray-500 transition-all  flex justify-center items-end "> <span className=" "> see more</span> <GoArrowUpRight  className="  text-2xl"/> </li> </ul> 
           <hr ref={hrRef}  className=" border-1 border-gray-500 my-10" />
           <div className="relative h-[500px]">
            <InfiniteScroll
    items={items}
    isTilted={true}
    tiltDirection='left'
    autoplay={true}
    autoplaySpeed={0.1}
    autoplayDirection="down"
    pauseOnHover={true}
  />
           </div>
          
           <Description
           text1="Specialized in developing seamless web & mobile experiences"
           text2="Innovation web & Mobile Solutions"
           text3=" My project feacture Sleek, responsive designs with php, react, flutter,nextJs, nestjs and php engaging and 
              intuitive  user interface."
           text4="On back-end,i use NestjS to build robust, scalable solutions,
                  ensuring Seamless integration to innovation , delivering solutions
                   that are both functional and delightful."
           />
        </div>
    );
}

export default Project;
