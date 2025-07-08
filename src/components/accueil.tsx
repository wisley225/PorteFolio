 import Navbar from './navbar';
 import Header from './header';
 import Project from './project';
 import Service from './service';
 import Time from './time';
 import Footer from './footer'; 


 

const Accueil = () => {
    return (
            <>
      <div className="  text-white bg-black">
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
