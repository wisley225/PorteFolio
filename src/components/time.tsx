import { GoArrowUpRight } from "react-icons/go";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Time = () => {

const [currentTime,setCurrentTime]=useState('')

useEffect(()=>{
    const miseAjour=()=>{
       const actuellement=new Date();
       let heures=actuellement.getHours();
       const minutes=actuellement.getMinutes();
       const secondes=actuellement.getSeconds()
       const pad = (n: number) => n.toString().padStart(2, "0");
       setCurrentTime(`${pad(heures)}:${pad(minutes)}:${pad(secondes)} `);

    }

    miseAjour()
    const interval = setInterval(miseAjour,1000)
    return ()=>clearInterval(interval)
}, [])

    return (
        <div className="mx-4 sm:mx-6 md:mx-10">
            <ul className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
                <li className="text-base sm:text-lg md:text-xl w-full sm:w-40 text-center sm:text-left"> 
                    Time To Level Up Your Business 
                </li>
                <li className="text-base sm:text-lg md:text-xl cursor-pointer transition-all flex justify-center items-center w-full sm:w-48 h-10 border px-4"> 
                   <Link to='/contact' >Let's Talk</Link> 
                    <GoArrowUpRight className="text-xl sm:text-2xl ml-2"/> 
                </li>
            </ul>
            <div className="flex justify-center mt-4 sm:mt-6"> 
               <p className="font-black text-center w-full text-[3rem] max-[320px]:text-2xl sm:text-[4rem] md:text-[6rem] lg:text-[8rem] xl:text-[10rem] 2xl:text-[12rem] tracking-widest flex justify-center items-center">  
                   <span>{currentTime}</span>  
                   <span className="ml-2 sm:ml-4">PM</span>
               </p> 
            </div>
        </div>
    );
}

export default Time;
