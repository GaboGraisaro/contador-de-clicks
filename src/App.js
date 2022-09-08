
import './App.css';
import Boton from './componentes/Boton';
import freeCodeCampLogo from './imagenes/freecodecamplogo.png'
import Contador from './componentes/contador';
function App() {

  const manejarclick = () => { //funcion flecha
      console.log('Click');
  }

  const reiniciarContador = () => {
    console.log('reiniciar')
  }
  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='Logo de freecodecamp'
          />
       <div className='contenedor-principal'>
        <Contador numClicks='5' />
        <Boton
        texto='Click'
        esBotonDeClick={true}
        manejarclick={manejarclick} />
        <Boton
        texto='Reiniciar'
        esBotonDeClick={false}
        manejarclick={reiniciarContador} />
       </div>
      </div>
      
    </div>
  );
}

export default App;
