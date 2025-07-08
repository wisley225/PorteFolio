import { GoArrowUpRight } from "react-icons/go";
import { useEffect, useState } from "react";

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
})



    return (
        <div className=" mx-10">
            <ul className="  flex justify-between items-center">
                <li className=" text-xl w-40"> Time To Level Up Your Business</li>
                <li className=" text-xl  cursor-pointer transition-all  flex justify-center items-center  w-48 h-10 border"> <span className=" "> Let's Talk</span> <GoArrowUpRight  className="  text-2xl"/> </li>
                 
            </ul>
            <div className="flex  "> 
               <p className=" font-black  text-center  w-full  text-[170px]   tracking-widest flex justify-between">  <span>{currentTime}</span>  <span>PM</span></p> 
                </div>
        </div>
    );
}

export default Time;
