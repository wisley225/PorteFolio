import './App.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Accueil from './components/accueil';



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Accueil />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
