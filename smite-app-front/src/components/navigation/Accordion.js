import React, { useState } from 'react';
// import { connect } from 'react-redux';



function Accordion(image, title, body) {
    const [isOpen, setIsOpen] = useState(false);
  // render() {
    
    return (
      <div  className="accordion">
          <br />
          <div  onClick={() => setIsOpen(!isOpen)}className="accordion-header">
            <h4> {title}</h4>
            <div className="accordion-indicator">
              {isOpen ? '-' : '+'}
            </div>
          </div>
          {isOpen && (
          <div className="accordion-body">
              {body}
              <img className="accordion-image" src={image} alt={""}/>
          </div>
          )};
      </div>
    );
  // }
};



export default Accordion;
