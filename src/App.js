import logoerick from './imagenes/Erick Acosta (1).png'
import './App.css';
import Boton from './components/boton';
import Contador from './components/contador';

function App() {

  const manejarClic = () => {

  }

  const reiniciarContador = () =>{

  }


  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img
          className='logo-inicial'
          src={logoerick}
          alt='logo principal'          />
        
      </div>
      <div className='contenedor-principal'>

          <Contador/>
          <Boton
            texto='Clic'
            esBotonDeClic={true}
            manejarClic={manejarClic}          />
          <Boton
            texto='Reiniciar'
            esBotonDeClic={false}
            manejarClic={reiniciarContador}
          />

      </div>

    </div>
  );
}

export default App;
