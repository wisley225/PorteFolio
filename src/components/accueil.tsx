 import Navbar from './navbar';
 import Header from './header';
 import Project from './project';
 import Service from './service';
 import Time from './time';
 import Footer from './footer'; 
import Loader from './loader';
import { useEffect, useState } from 'react';
 

const Accueil = () => {
const [loader,setLoader]=useState(true)


useEffect(()=>{
  setTimeout(() => {
    setLoader(false)
  }, 3000);
},[])




    return (
            <>
{
 loader ?
  <Loader/> :
  <div className='bg-black text-white'>
         <Navbar/>
        <Header/>
        <Project/>
        <Service/>
        <Time/>
        <Footer/> 
</div>


}
     
      
    </>
    );
}

export default Accueil;
