// Skills.js
import React from 'react';
import SkillMeter from '../components/SkillMeter';
import '../stylesCss/skills.css';

export const Skills = () => {
  const skillsData = [
    {title: 'HTML', paragraph: 'Domino las estructuras básicas de HTML.'},
    {
      title: 'CSS',
      paragraph: 'Creación de estilos de cascada para mejorar el diseño de las páginas web.',
    },
    {
      title: 'BOOTSTRAP',
      paragraph: 'Utilización del framework Bootstrap para el desarrollo rápido y responsivo de sitios web.',
    },
    {
      title: 'JAVASCRIPT',
      paragraph: 'Experiencia en el uso de JavaScript para la interactividad y dinamismo en las aplicaciones web.',
    },
    {
      title: 'REACT JS',
      paragraph: 'Desarrollo de aplicaciones modernas y reactivas utilizando React.',
    },
    {
      title: 'MONGO DB',
      paragraph: 'Uso de MongoDB para almacenar y gestionar bases de datos NoSQL.',
    },

    {
      title: 'SQL',
      paragraph: 'Interacción con base de datos relacionales, comandos,cláusulas y funciones agregadas',
    },

    {
      title: 'NODE JS',
      paragraph: 'Habilidades en el uso de Node.js para el backend',
    },
    {
      title: 'PHP',
      paragraph: 'Lenguaje de programación web que integra HTML, variables, estructuras de control, funciones y manejo de bases de datos.',
    },
    {
      title: 'API REST',
      paragraph: 'Interfaz programable para servicios web que permite comunicación y manipulación de datos mediante solicitudes HTTP con endpoints específicos.',
    },
    {
      title: 'PHOTOSHOP',
      paragraph: 'Habilidades en el uso de Photoshop para el diseño gráfico y la edición de imágenes.',
    },
    {
      title: 'CANVAS',
      paragraph: ' Habilidades en el uso de Canvas para el dibujo, animación e integracion en html',
    },
    // Agrega más habilidades según sea necesario
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2 className="titulo-habilidades">Habilidades</h2>
              <p>
                Día a día se estudian y se aprenden cosas nuevas, lenguajes, metodologías y habilidades que contribuyen a un trabajo profesional y actualizado.
                <br />
                Estas son algunas de las tecnologías con las que he trabajado y tengo experiencia.
              </p>
              <div className="skill-grid">
                {skillsData.map ((skill, index) => (
                  <SkillMeter
                    key={index}
                    cardName={skill.title}
                    cardParagraph={skill.paragraph}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
