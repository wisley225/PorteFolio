import './App.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Accueil from './components/accueil';
import Work from './components/Work/work';
import Service from './components/Service/service';
import About from './components/Apropos/About';
import Contact from './components/contact/contact';
import Particles from './components/Particles';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Accueil />} />
        <Route path='/work' element={<Work />} />
        <Route path='/service' element={<Service />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
