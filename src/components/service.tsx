import { GoArrowUpRight } from 'react-icons/go';
import DivService from './divService';
const Service = () => {
    return (
        <div className=" mx-10 mt-32 bg-black ">
           <ul className="flex justify-between  "> <li className="font-black text-3xl"> services</li> <li className=" text-2xl  cursor-pointer hover:text-gray-500 transition-all  flex justify-center items-end "> <span className=" "> see more</span> <GoArrowUpRight  className="  text-2xl"/> </li> </ul> 
           <hr  className=" border-1 border-gray-500 my-10" />
             
  <div className=' flex justify-around flex-wrap'>
    <DivService
     image="/vite.svg"
     title='web developer react & nest'
     text=" Skilled im building dynamic ,
      responsive web applications using ReactJS &  or Nextjs.
      Focused on delivering seamless user Experience With an emphasic on performance
      , maintainability and Scalability.
      "
    />

     <DivService
     image="/vite.svg"
     title='react & php '
     text=" Skilled im building dynamic ,
      responsive web applications using ReactJS &  or Nextjs.
      Focused on delivering seamless user Experience With an emphasic on performance
      , maintainability and Scalability.
      "
    />
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

          <hr className="  border-1 border-gray-500 my-32" />
             
           <div className="">          
           <ul className=" flex font-serif gap-10 mb-20">

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

export default Service;
