import { useState } from 'react';
import './App.css';

function App() {
  const [count] = useState();
  const initialColors = ['#FFFFFF', '#FFFFFF', '#FFFFFF'];
  const [backgroundColors, setBackgroundColors] = useState(initialColors);

  const handleColorClick = (index, color) => {
    const newColors = [...initialColors];
    newColors[index] = color;
    setBackgroundColors(newColors);
  };

  return (
    <div className="container">
    <div className='cards'>

      {backgroundColors.map((backgroundColor, index) => (
        <div key={index} className="card" style={{ backgroundColor }}>
          {count}
        </div>
      ))}
    </div>

      <div className="buttons-container">
        <button onMouseEnter={() => handleColorClick(0, '#FFFF00')}>Enter Cursor</button>
        <button onMouseEnter ={() => handleColorClick(1, '#0000FF')}>Enter Cursor</button>
        <button onMouseEnter={() => handleColorClick(2, '#FF0000')}>Enter Cursor</button>
        
        
      </div>
    </div>
  );
}

export default App;
