import './App.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Accueil from './components/accueil';
import Work from './components/Work/work';



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Accueil />} />
        <Route path='/work' element={<Work />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
