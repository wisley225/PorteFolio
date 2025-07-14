 import Navbar from './navbar';
 import Header from './header';
 import Project from './project';
 import Service from './service';
 import Time from './time';
 import Footer from './footer'; 
import { useState } from 'react';

 

const Accueil = () => {




    return (
            <>
<div className='bg-black text-white'>
   <Navbar/>
        <Header/>
        <Project/>
        <Service/>
        <Time/>
        <Footer/> 
</div>
     
      
    </>
    );
}

export default Accueil;
