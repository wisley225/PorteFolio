import { useRef,useEffect } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger";

type Description={
    text1:string,
    text2:string,
    text3:string,
    text4:string
}
const Description=({text1,text2,text3,text4}:Description)=>{

const hrRef=useRef<HTMLHRElement>(null)

useEffect(()=>{

  if (hrRef.current) {
    const ctx=gsap.context(()=>{
      gsap.from(hrRef.current, {
        width:'0%',
        duration:3,
        scrollTrigger:{
          trigger:hrRef.current,
          scrub:1
        }
        
      })
    })

    return ()=>ctx.revert()
  }


  
},[])


    return <>   
     <div className=" mb-32  ">
                  <hr ref={hrRef}  className="  border-1 border-gray-500 my-32" />
            <ul className="flex font-serif  gap-10 mt-32  ">
              <li className=" text-3xl"> 
                 <p> {text1} </p> 
              </li>
              <li className=" text-end text-md">
                <p> {text2}</p> 
              </li>
              <li className=" w-8/12 ">
              <p className="mb-5 text-md ">
            {text3}
               
              </p> 
                  <p className=" text-md">
                 {text4}
                   </p>
              </li>
            </ul>



           </div>
    
    </>
}

export default Description