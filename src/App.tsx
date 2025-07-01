 
import './App.css'
import Navbar from './accueil/navbar';
import Header from './accueil/header';
import Project from './accueil/project';
import Service from './accueil/service';

function App() {

  return (
    <>
      <div className=" bg-black text-white">
        <Navbar/>
        <Header/>
        <Project/>
        <Service/>
      </div>
    </>
  );
}

export default App
