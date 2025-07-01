import { GoArrowUpRight } from "react-icons/go";
import Divproject from "./divproject";


const Project = () => {
    return (
        <div className=" mx-10 mt-32">
           <ul className="flex justify-between  "> <li className="font-black text-3xl"> Featured Projects</li> <li className=" text-2xl  cursor-pointer hover:text-gray-500 transition-all  flex justify-center items-end "> <span className=" "> see more</span> <GoArrowUpRight  className="  text-2xl"/> </li> </ul> 
           <hr  className=" border-1 border-gray-500 my-10" />
           <div>
             <Divproject
             title='Fresh Pharma'
             genre=' site web'
             image='/imagerie.png'
             />
           </div>
          <hr className="  border-1 border-gray-500 my-32" />

           <div className="  ">
            <ul className=" flex font-serif gap-10  ">
              <li className=" text-3xl"> 
                 <p>Specialized in developing seamless web & mobile experiences</p> 
              </li>
              <li className=" text-end">
                <p>Innovation web & Mobile Solutions </p> 
              </li>
              <li className="  ">
              <p className="mb-5 text-md">
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

export default Project;
