import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import astro from '../assets/img/vector_002.png'
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Frontend Developer" ];
  const period = 500;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                 
               <h2>{`Hola! me llamo Santiago Montoya`}</h2>
              {/* <h3>{<span className="txt-rotate" dataPeriod="2000" data-rotate='[ "Desarrollador web", "Frontend" ]'><span className="wrap">{text}</span></span>}</h3>  */}

                <h4>Soy Desarrollador web</h4>

              <br/>
                  <p>Cuento con 2 años de experiencia en desarrollo web; conocimiento sólidos en HTML, CSS, JavaScript, React.js, Angular, Bootstrap, TailwindCSS, Git, Github, Json, MongoDB, SQL, Photoshop y Canvas</p>
                  <p>Tengo iniciativa para asumir retos y lograr objetivos planteados, excelentes relaciones interpersonales, creativo, autodidacta, dispuesto a aprender y a desaprender, enfocado al 110% en mi pasión por la programación y los sistemas informáticos.</p>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div >
                  <img   className="astronauta" src={astro} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
