import './App.css';
import Testimonios from './componentes/testimonios';
import shawn from './imagenes/imagen-shawn.png';  // Ajusta la ruta según sea necesario
import emma from './imagenes/imagen-emma.png';
import sara from './imagenes/imagen-sara.png';     // Ajusta la ruta según sea necesario
// Importa más imágenes según sea necesario

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Esto es lo que dicen nuestros alumnos sobre FreeCodeCamp:</h1>
        
        {/* Utiliza las imágenes importadas como props */}
        <Testimonios
          nombre='Shawn Wang'
          imagen={shawn}
          pais='Singapur'
          cargo='Ingeniero de Software'
          empresa="Amazon"
          descripcion='"Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida."'
        />

<Testimonios
          nombre='Sara'
          imagen={sara}
          pais='Nigeria'
          cargo='Ingeniera de Software'
          empresa=" ChatDesk"
          descripcion='"FreeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble."'
        />

        <Testimonios
          nombre='Emma'
          imagen={emma}
          pais='Suecia'
          cargo='Ingeniera de Software'
          empresa="Spotify"
          descripcion='"Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.".'
        />
      </div>
    </div>
  );
}

export default App;
