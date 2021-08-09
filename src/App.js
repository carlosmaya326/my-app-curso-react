import React from 'react';
// import Jsx from './components/Jsx';
// import Lista from './components/Lista';
// import Formulario from './components/Formulario';
// import FormHook from './components/FormHook';
// import Saludo from './components/Saludo';
import Comentario from './components/Comentario';

function App() {
  const sujeto = {
    nombre: 'Juanito',
    urlImagen: 'https://via.placeholder.com/64',
    texto: 'Este es mi comentario'
  }
  return (
    <div className="container mt-5">
        <Comentario sujeto={sujeto} />
        <Comentario sujeto={sujeto} />
    </div>
  );
}

export default App;