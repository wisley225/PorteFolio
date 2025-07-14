import { Link } from "react-router-dom";
import gsap from "gsap";
import { useState,useRef,useEffect } from "react";


const Navbar = () => {

const animeBurger=useRef<HTMLDivElement []>([])
const [menuAction, SetMenuAction]=useState(false)
const clipathMenu=useRef<HTMLLIElement>(null)

useEffect(()=>{
  const ctx =gsap.context(()=>{


   if (menuAction && animeBurger.current ) {
   
     gsap.to(animeBurger.current[0],{
        rotate:45,
        duration:0.5,
          y:14,
     })
     gsap.to(animeBurger.current[1],{
        x:-10, 
        duration:0.5,
        opacity:0
     })
     gsap.to(animeBurger.current[2],{
      
         duration:0.5,
        rotate:-45,
          y:-10,
     })

 
    }

    if (menuAction && clipathMenu.current) {
        gsap.to(clipathMenu.current,{
            clipPath: 'polygon(0 0, 100% 0%, 100% 100%, 0 100%)',
            duration:0.5
        })
    }
  

    })

 return ()=>ctx.revert()
},[menuAction])

    


    return (
        <div className=" bg-black ">
            
         <nav ref={clipathMenu} className=' ulNavRef max-[980px]:flex-col   bg-black fixed z-20   w-full  py-5 flex items-center  justify-between px-5 text-white '>
            <ul
            className='  w-full     max-[980px]:flex-col max-[980px]:gap-5 flex  font-bold text-xl  w-4/12 justify-between '>      
           
        <li className=" flex  items-end justify-between ">
            <h1 className=' text-2xl font-black '><Link to='/'>Guei Lewis</Link></h1>
            
       <div onClick={()=>SetMenuAction(!menuAction)}  className=" min-[980px]:hidden cursor-pointer  flex flex-col gap-1">
        <div ref={(el)=>{if (el) {animeBurger.current[0] =el}}}  className=" w-10 h-2 rounded-sm bg-white  " />
        <div ref={(el)=>{if (el) {animeBurger.current[1]=el}}} className="  w-10 h-2 rounded-sm bg-white  " />
        <div ref={(el)=>{if (el) {animeBurger.current[2]=el }}} className="  w-10 h-2 rounded-sm bg-white  " />
       </div>
            {/* <IoMenu className=" text-white  border   cursor-pointer text-2xl"/> */}

        </li>

        <li  className="   w-1/2 max-[980px]:flex max-[980px]:flex-col max-[980px]:justify-center max-[980px]:w-full">
        <ul className=" flex  max-[980px]:flex-col max-[980px]:items-center    flex max-[980px]:justify-between  justify-between">
                <li className='hover:text-gray-400 cursor-pointer transition-all'> <Link to='/work'>Work</Link></li>
                <li className='hover:text-gray-400 cursor-pointer transition-all'> <Link to='/service'>Service</Link></li>
                <li className='hover:text-gray-400 cursor-pointer transition-all'> <Link to='/about'>About</Link></li>
                <li className='hover:text-gray-400 cursor-pointer transition-all'><Link to='/contact'>Contact</Link></li>
               
           
      </ul>
        </li> 
      

                
            </ul>
         </nav>
        </div>
    );
}

export default Navbar;
