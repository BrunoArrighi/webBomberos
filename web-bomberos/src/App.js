import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Noticias from './Components/Noticias/Noticias';
import Login from './Components/Login/Login';
import InicioBomberos from './Components/InicioBomberos/InicioBomberos';
import AdminInicio from './Components/Administrador/AdminInicio';
import NuevoSiniestro from './Components/InicioBomberos/NuevoSiniestro';
import VerFormularios from './Components/VerFormularios/VerFormularios';
import ModalSiniestro from './Components/VerFormularios/ModalSiniestro';
import RegistrarBombero from './Components/Administrador/RegistrarBombero/RegistrarBombero';
import Historia from './Components/Historia/Historia';

function App() {
  return (
    <Router>
    <div className="container">
      <Switch>
        <Route path="/" exact>
          <Noticias />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/inicio-bomberos" exact>
          <InicioBomberos />
        </Route>
        <Route path="/admin-inicio" exact>
          <AdminInicio />
        </Route>
        <Route path="/nuevoSiniestro" exact>
          <NuevoSiniestro />
        </Route>
        <Route path="/verSiniestros" exact>
          <VerFormularios />
        </Route>
        <Route path="/modalSiniestro" exact>
          <ModalSiniestro />
        </Route>
        <Route path="/agregarBombero" exact>
          <RegistrarBombero />
        </Route>
        <Route path="/historia" exact>
          <Historia />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
