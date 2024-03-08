// SkillMeter.js
import React, { useState } from 'react';
import { Button, Collapse } from 'react-bootstrap';
import '../stylesCss/skills.css';

const SkillMeter = ({ cardName, cardParagraph }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div className="skill-meter">
      <h2>{cardName}</h2>
      <p>
        <Button
        className='btn-project'
          variant="secondary"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          aria-controls="collapseExample"
          aria-expanded={isOpen}
          block
        >
          {isOpen ? 'Ver más' : 'Ver más'}
        </Button>
      </p>
      <Collapse in={isOpen}>
        <div id="collapseExample">
          <div className="card card-body">
            {cardParagraph}
          </div>
        </div>
      </Collapse>
    </div>
  );
};

export default SkillMeter;
