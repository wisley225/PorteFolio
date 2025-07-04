
import { GoArrowUpRight } from "react-icons/go";
const Header = () => {
    return (
        <div className="   px-10 ">
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
          
          <hr className="  border-1 border-gray-500 my-32" />
         <div className=" ">
            <ul className="flex font-serif gap-10  ">
              <li className=" text-3xl"> 
                 <p>Specialized in developing seamless web & mobile experiences</p> 
              </li>
              <li className=" text-end text-md">
                <p>Innovation web & Mobile Solutions </p> 
              </li>
              <li className="   w-full">
              <p className="mb-5 text-md ">
              My project feacture Sleek, responsive designs with php, react, flutter,nextJs, nestjs and php engaging and 
              intuitive  user interface.
               
              </p> 
                  <p className=" text-md">
                  On back-end,i use NestjS to build robust, scalable solutions,
                  ensuring Seamless integration to innovation , delivering solutions
                   that are both functional and delightful. 
                   </p>
              </li>
            </ul>
           </div>
       </div>
   
  
  );
}

export default Header;
