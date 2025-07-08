
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Description from "./description";


const Header = () => {

    return (
        <div className="  px-10 ">
         <div className="  flex flex-col h-screen justify-col  justify-end text-white ">
       <div className=" flex items-center justify-between  "> 
        <span  className="scale-y-[1.7] text-[170px] uppercase  font-bold   tracking-tighter  ">full</span > <span className=" border h-8 w-60  bg-white " ></span> <span className="  tracking-tighter scale-y-[1.7] text-[170px] uppercase font-bold ">stack</span>
        </div>

        <div className="  flex items-center justify-between  "> 
            <span className=" text-[11rem]  uppercase mr-10 font-bold tracking-tighter scale-y-[1.7]  "> developer</span> 
     
        <div className=" h-60 flex flex-col justify-between pt-6 "> 
        <p className=" text-start"> Bonjour , je m'appelle Guei Lewis et je suis un 
         Full Stack qui crée des  applications web  et mobil elegantes avec php, Reactjs nestjs ,nextJs,flutter</p>
       
        </div>
         
        </div>
    
         </div>
          
        <Description
        text1="Specialized in developing seamless web & mobile experiences"
        text2="Innovation web & Mobile Solutions"
        text3="  My project feacture Sleek, responsive designs with php, react, flutter,nextJs, nestjs and php engaging and 
              intuitive  user interface."
        text4=" On back-end,i use NestjS to build robust, scalable solutions,
                  ensuring Seamless integration to innovation , delivering solutions
                   that are both functional and delightful. "
       />
       </div>
   
  
  );
}

export default Header;
