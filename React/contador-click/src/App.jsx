// App.js
import { useState, useEffect } from 'react';
import logo from './imagenes/galaxia-espiral.png';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [logoStyle, setLogoStyle] = useState('logo react');

  const handleIncrement = () => setCount((count) => count + 1);
  const handleDecrement = () => setCount((count) => count - 1);
  const handleReset = () => setCount(0);

  useEffect(() => {
    // Cambiar el estilo del logo cuando el contador pasa de 0
    if (count > 0) {
      setLogoStyle('logo react high-count');
    } else if (count < 0) {
      setLogoStyle('logo react low-count');
    } else {
      setLogoStyle('logo react');
    }
  }, [count]);

  const animationSpeed = Math.abs(count) + 1; // Ajusta según tus necesidades

  const logoAnimationStyle = {
    animation: `logo-spin infinite ${15 / animationSpeed}s linear`
  };

  return (
    <>
      <div className='container-logo'>
        <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
          {/* Contenido del primer enlace */}
        </a>
        <a href="#" rel="noopener noreferrer">
          <img src={logo} className={logoStyle} style={logoAnimationStyle} alt="React logo" />
        </a>
        <h1>CONTADOR</h1>
      </div>
      
      <div className={`card ${count > 0 ? 'high-count' : count < 0 ? 'low-count' : 'zero-count'}`}>
        <span>{count}</span>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleReset}>Ø</button>
      </div>
    </>
  );
}

export default App;
