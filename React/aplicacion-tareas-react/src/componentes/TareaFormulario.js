import React, { useState } from 'react';
import '../hojas-de-estilo/TareaFormulario.css';
import { v4 as uuidv4 } from 'uuid';

function TareaFormulario(props) {
  const [input, setInput] = useState('');

  const manejarCambio = (e) => {
    setInput(e.target.value);
  };

  const manejarEnvio = (e) => {
    e.preventDefault();

    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false,
    };

    props.onSubmit(tareaNueva);

    // Limpiar el input después de enviar la tarea
    setInput('');
  };

  const limpiarInput = () => {
    setInput('');
  };

  return (
    <form className='tarea-formulario' onSubmit={manejarEnvio}>
      <input
        className='tarea-input'
        type='text'
        placeholder='Escribe una Tarea'
        name='texto'
        value={input}
        onChange={manejarCambio}
        autoComplete='off'
      />
      <div className='botones-formulario'>
      <button className='tarea-boton' type='submit'>
          Agregar Tarea
        </button>
        <button className='tarea-boton-eliminar' onClick={limpiarInput}>
          Borrar texto
        </button>
      </div>
    </form>
  );
}

export default TareaFormulario;
