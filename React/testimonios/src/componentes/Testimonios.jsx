// Importa las imágenes
import shawn from '../imagenes/imagen-shawn.png';
import emma from '../imagenes/imagen-emma.png';
import sara from '../imagenes/imagen-sara.png';
import "./hojas-de-estilo/testimonios.css";

function Testimonios(props) {
  // Mapeo de nombres a imágenes
  const imagenes = {
    shawn,
    emma,
    sara,
    // Agrega más nombres e imágenes según sea necesario
  };

  // Obtener la imagen correspondiente al nombre
  const testimonioImagen = imagenes[props.nombre.toLowerCase()] || shawn;

  return (
    <div className="contenedor-testimonios">
      <img className='img-testimonio' src={testimonioImagen} alt={`foto ${props.nombre}`} />
      <div className="textos-testimonios">
      <p className="nombre"><strong>{props.nombre}</strong> en <strong> {props.pais}</strong></p>

        <p className="trabajo">{props.cargo} en <strong>{props.empresa}</strong></p>
        <p className="opinion">
          {props.descripcion}
        </p>
      </div>
    </div>
  );
}

export default Testimonios;
