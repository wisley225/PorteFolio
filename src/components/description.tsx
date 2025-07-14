import { useRef, useEffect } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";
gsap.registerPlugin(ScrollTrigger)

type Description = {
  text1: string,
  text2: string,
  text3: string,
  text4: string
}
const Description = ({ text1, text2, text3, text4 }: Description) => {

  const hrRef = useRef<HTMLHRElement>(null)
  const textRef = useRef<HTMLParagraphElement[]>([])
  const textRef2 = useRef<HTMLParagraphElement[]>([]) 
  const textAnime=useRef<HTMLUListElement>(null)

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
      if (textAnime.current) {
      const splitText = new SplitType(textRef.current, { types: 'chars' })
       
      let tl=gsap.timeline()

      tl.from(splitText.chars, {
       opacity:0,
       filter:'blur(4px)',
       duration:1,
       stagger:0.05,
       scrollTrigger: {
       trigger: textAnime.current,
       start:' center top',
      toggleActions: "play none reverse none ",
            scrub: 1,
            pin:true
             
          }

        })
      .from(textRef2.current,{
      
      
        filter:'blur(10px)',
        duration:0.1,
         stagger:0.01,
         scrollTrigger: {
           trigger: textAnime.current,
      toggleActions: "play none reverse none ",
            scrub: 1,
         

          }
      })
      

    }
      })

      return () => ctx.revert()

   
  

  }, [])


  return <>
    <div className=" mb-32 ">
      <hr ref={hrRef} className="  border-1 border-gray-500 my-32" />
      <ul ref={textAnime} className="flex  font-serif  gap-10 mt-32  max-[1000px]:flex-col  max-[1000px]:items-center  ">
      
        <li className=" text-3xl max-[1000px]:text-center ">
          <p ref={(el) => {
            if (el) textRef.current[0] = el}}> {text1} </p>
        </li>

        <li className=" text-end text-md max-[1000px]:text-center ">
          <p ref={(el) => {
            if (el) textRef.current[1] = el}}> {text2}</p>
        </li>

        <li className=" w-8/12  max-[1000px]:text-center ">
          <p ref={(el) => { if (el) textRef2.current[0] = el; }} className="mb-5 text-md ">{text3}</p>
          <p ref={(el) => { if (el) textRef2.current[1] = el; }} className=" text-md">
            {text4}
          </p>
        </li>

      </ul>



    </div>

  </>
}

export default Description