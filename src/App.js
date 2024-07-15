import './App.css';
import Lista from './components/Lista';
import Encabezado from './components/Encabezado';
import TablaPrecios from './components/TablaPrecios';
import Boton from './components/Boton';
import BotonContador from './components/BotonContador';
import { useState } from 'react';

const features =[
  ["100 sitios web", "Wordpress administrado", "100 GB de SSD", "Email gratis (10)"],
  ["100 sitios web", "Wordpress administrado", "200 GB de SSD", "Email gratis (50)"],
  ["300 sitios web", "Wordpress administrado", "200 GB de SSD", "Email gratis (ilimitado)"]
]

function App() {
  const [num, setNum] = useState(0);
  const incrementarClick = () => {
    setNum(num + 1);
  }

  const limpiarClick = () => {
    setNum(0);
  }

  return (
    <div>
      <Encabezado />
      {/* <Lista valor="Firefox">Selecciona el mejor navegador</Lista> */}
      <br></br>
      <BotonContador texto="Contador" cont={num}/>
      <Boton boton="inc" texto="Incrementar" listener={incrementarClick}/>
      <Boton boton="clean" texto="Limpiar" listener={limpiarClick}/>
      <br></br>
      <div className='container'>
        <div className='row gap-5 d-flex justify-content-center'>
          <TablaPrecios  header="Premium" price="$39.99" items={features[0]}/>
          <TablaPrecios  header="Bussiness" price="$59.99" items={features[1]}/>
          <TablaPrecios header="Cloud Startup" price="$133.99" items={features[2]}/>
        </div>

      </div>

    </div>
  );
}

export default App;
