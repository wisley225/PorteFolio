import Navbar from '../navbar';
import Divproject from '../divproject';
import Footer from '../footer';
import { IoIosArrowDown } from "react-icons/io";


const Work = () => {
    return (
        <div className='bg-black text-white '>

            <Navbar/>
     <div className='pt-52 px-10'>
 <h1 className='text-6xl font-black '>Work</h1>
            <hr className=' border-1 border-neutral-500 my-10' />

           <ul className='flex justify-between  items-start'>
            
            <li>
            <ul>
            <li className='text-2xl font-bold border-b flex items-end justify-between w-40'> <span className=''> All Project</span> <IoIosArrowDown/>  </li>
            <li className=''>
               <ul className='absolute z-10 leading-10 text-xl border p-3 bg-black w-52 mt-5 rounded-xl '>
                <li>all</li>
                <li>Web App</li>
                <li>Website</li>
                <li>E-commerce</li>
                <li>Mobile App</li>
            </ul>
            </li> 
            
           </ul>
            </li>
            <li className='border-b text-2xl font-bold'>10 Project  </li>
           </ul>

           
     </div>
          
            <div  className='blur-lg'>
            <Divproject
             title='Fresh Pharma'
             genre=' site web'
             image='/imagerie.png'
             />
            </div>
            
            <Footer/>
        </div>
    );
}

export default Work;
