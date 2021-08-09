import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import Jsx from './components/Jsx';
// import Lista from './components/Lista';
// import Formulario from './components/Formulario';
// import FormHook from './components/FormHook';
// import Saludo from './components/Saludo';
// import Comentario from './components/Comentario';
import Contacto from './components/Contacto';
import Nosotros from './components/Nosotros';
import Inicio from './components/Inicio';

function App() {
  return (
    <Router>
      <div className="container mt-5">
          <div className="btn-group">
            <Link to="/" className="btn btn-dark">
              Inicio
            </Link>
            <Link to="/contacto" className="btn btn-dark">
              Contactenos
            </Link>
            <Link to="/nosotros" className="btn btn-dark">
              Nosotros
            </Link>
          </div>
          <hr />
          <Switch>
            <Route path="/contacto">
              <Contacto />
            </Route>
            <Route path="/nosotros">
              <Nosotros />
            </Route>
            <Route path="/">
              <Inicio />
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;