
import './Arreglos.css';  // Ajusta la ruta según sea necesario
import Testimonios from './testimonios';  // Ajusta la ruta según sea necesario
import shawn from '../imagenes/imagen-shawn.png';
import emma from '../imagenes/imagen-emma.png';
import sara from '../imagenes/imagen-sara.png';

const testimoniosData = [
  {
    nombre: 'Shawn Wang',
    imagen: shawn,
    pais: 'Singapur',
    cargo: 'Ingeniero de Software',
    empresa: 'Amazon',
    descripcion: 'Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida.',
  },
  {
    nombre: 'Sara Chia',
    imagen: sara,
    pais: 'Singapur',
    cargo: 'Ingeniero de Software',
    empresa: 'Amazon',
    descripcion: 'Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida.',
  },
  {
    nombre: 'Emma',
    imagen: emma,
    pais: 'Singapur',
    cargo: 'Ingeniero de Software',
    empresa: 'Amazon',
    descripcion: 'Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida.',
  },
];

function Arreglos() {
  return (
    <div className="contenedor-principal">
      <h1>Esto es lo que dicen nuestros alumnos sobre FreeCodeCamp:</h1>
      
      {/* Mapea el array de testimonios y renderiza el componente Testimonios para cada uno */}
      {testimoniosData.map((testimonio, index) => (
        <Testimonios
          key={index}
          nombre={testimonio.nombre}
          imagen={testimonio.imagen}
          pais={testimonio.pais}
          cargo={testimonio.cargo}
          empresa={testimonio.empresa}
          descripcion={testimonio.descripcion}
        />
      ))}
    </div>
  );
}

export default Arreglos;
