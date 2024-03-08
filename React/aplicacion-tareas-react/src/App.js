import './App.css';
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className='aplicacion-tareas'>
      <div className='freecodecamp-logo-contenedor'>
        <h1>Recordatorio de tareas</h1>
      </div>
      <div className='tareas-lista-principal'>
        <h2>Mis Tareas</h2>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
