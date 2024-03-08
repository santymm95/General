import {Container, Row, Col, Tab,} from 'react-bootstrap';
import {ProjectCard} from './ProjectCard';
import projImg1 from '../assets/img/Proyectos/project-img1.webp';
import projImg2 from '../assets/img/Proyectos/project-img2.webp';
import projImg3 from '../assets/img/Proyectos/project-img3.webp';
import projImg4 from '../assets/img/Proyectos/project-img4.webp';
 import projImg5 from '../assets/img/Proyectos/project-img5.webp';
import projImg6 from '../assets/img/Proyectos/project-img6.webp';
import projImg7 from '../assets/img/Proyectos/divomark.webp';
import projImg8 from '../assets/img/Proyectos/project-img8.webp';
import projImg9 from '../assets/img/Proyectos/project-img9.webp';
 
import Button from '../components/Button';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: 'Pragma',
      description: 'Desarrollo de la página.',
      tecnology:'HTML-CSS-JAVASCRIPT',
      imgUrl: projImg1,
    
    },
    {
      title: 'Fruticom',
      tecnology:'HTML-CSS-JAVASCRIPT-PHP',
      description: 'Desarrollo de la página',
      imgUrl: projImg2,
    },
    {
      title: 'Restaurante ',
      tecnology:'HTML-CSS-JAVASCRIPT-PHP-SQL',
      description: 'Aplicación de reservas y ventas',
      imgUrl: projImg3,
    },
    {
      title: 'Divomark',
      description: 'Desarrollo de la página web',
      tecnology:'REACT.JS',
      imgUrl: projImg7,
    },
    {
      title: 'Neumomed IPS',
      description: 'Desarrollo de la página web',
      tecnology:'WORDPRESS',
      imgUrl: projImg4,
    },
    {
      title: 'Carrito de compras',
      description: 'Diseño y desarrollo',
      tecnology:'REACT.JS',
      imgUrl: projImg5,
    },
    {
      title: 'Ecommerce',
      description: 'Diseño y desarrollo',
      tecnology:'REACT.JS',
      imgUrl: projImg6,
    },
    {
      title: 'Formulario con BD',
      description: 'Aplicación de fútbol',
      tecnology:'REACT.JS - PHP - SQL',
      imgUrl: projImg8,
    },
    {
      title: 'App de clima ',
      description: 'Utilizando API-REST',
      tecnology:'REACT.JS - API-REST',
      imgUrl: projImg9, 
    },
    
   
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({isVisible}) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__fadeIn' : ''
                  }
                >
                  <h2>Proyectos</h2>
                  <p >
                    Durante este tiempo, he participado desarrollando varios proyectos, algunos más complejos que otros, con diferentes tecnologías de desarrollo y diseño web. En varios procesos trabajando con un grupo de personas, en donde todos aprendemos y desaprendemos, sacamos el lado humano ayudando a quien lo necesite compartiendo el conocimiento.
                  </p>
                   
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">

                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? 'animate__animated animate__slideInUp' : ''
                      }
                    >
                    
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map ((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                            
                          })}
                          
                          <p className='manssage'>Los proyectos mencionados en mi portafolio profesional no representan el total de mi experiencia laboral. Por razones legales relacionadas con las licencias de algunos productos, no puedo incluir todos los proyectos en los que he participado.</p>
                          
                          <Button/>
                        
                        
                        </Row>
                       
                      </Tab.Pane>

                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
        
      </Container>
 
    </section>
  );
};
