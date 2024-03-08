import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status])

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email
      })
  }

  const clearFields = () => {
    setEmail('');
  }

  return (
    <Col xs={12} lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col xs={12} lg={6} xl={5}>
            <h3>Suscríbete para recibir nuevo contenido</h3>
            {status === 'sending' && <Alert>Enviando...</Alert>}
            {status === 'error' && <Alert variant="danger">{message}</Alert>}
            {status === 'success' && <Alert variant="success">{message}</Alert>}
          </Col>
          <Col xs={12} lg={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <input
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Correo"
                />
                <button type="submit">Enviar</button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
