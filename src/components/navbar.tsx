import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="">
         <nav className=' fixed z-20 w-full  h-28 flex items-center  justify-between px-5 text-white bg-black'>
            <h1 className=' text-2xl font-black'><Link to='/'>Guei Lewis</Link></h1>
            <ul className=' flex  font-bold text-xl  w-4/12 justify-between '>   
      
             <li className='hover:text-gray-400 cursor-pointer transition-all'> <Link to='/work'>Work</Link></li>
                <li className='hover:text-gray-400 cursor-pointer transition-all'>Service</li>
                <li className='hover:text-gray-400 cursor-pointer transition-all'>About</li>
                <li className='hover:text-gray-400 cursor-pointer transition-all'>Contact</li>
            </ul>
         </nav>
        </div>
    );
}

export default Navbar;
