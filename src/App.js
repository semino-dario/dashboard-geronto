import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sesion from './components/sesion/usuario/Sesion';
import RegistroUsuario from './components/sesion/usuario/RegristroUsuario'
import ResetPassword from './components/sesion/usuario/ResetPassword'
import Escritorio from './components/sesion/escritorio/Escritorio'
import PublicarCanasta from './components/sesion/escritorio/PublicarCanasta';
import CanastasPublicadas from './components/sesion/escritorio/CanastasPublicadas';
import ArticulosPublicados from './components/sesion/escritorio/ArticulosPublicados';
import UsuarioInfo from './components/sesion/escritorio/UsuarioInfo';
import Publicar from './components/sesion/escritorio/Publicar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>DASHBOARD</h1>
      <BrowserRouter>
        <Routes>
          <Route index element={<Sesion />} />
          <Route path="/sesion" element={<Sesion />} />
          <Route path='/:registrarse' element={<RegistroUsuario />} />
          <Route path='/:nueva-contraseña' element={<ResetPassword />} />
          <Route path='/:escritorio/:token' element={<Escritorio />} />
          <Route path="/articulos/publicar/:token" element={<Publicar />} />
          <Route path="/articulos/publicados/:token" element={<ArticulosPublicados />} />
          <Route path="/usuario-info/:token" element={<UsuarioInfo />} />
          <Route path="/canasta/publicar/:token" element={<PublicarCanasta />} />
          <Route path="/canastas/publicadas/:token" element={<CanastasPublicadas />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
