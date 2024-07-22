import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaPrincipal from './Componentes/PrincipalPage/PrincipalPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          
          <Route path='/AboutMe-Branco' element={<PaginaPrincipal />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
