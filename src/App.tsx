import './App.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Accueil from './components/accueil';
import Work from './components/Work/work';
import Service from './components/Service/service';
import About from './components/Apropos/About';
import Contact from './components/contact/contact';
import WorkDetails from './components/workDetails';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Accueil />} />
        <Route path='/work' element={<Work />} />
        <Route path='/service' element={<Service />} />
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />} />
        <Route path='/work/details' element={<WorkDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
