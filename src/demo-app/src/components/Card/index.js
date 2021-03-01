import React from 'react';
import './index.css'

function Card({ children, className, depth = 1 }) {
  return (
    <div className={`card ${className} depth-${depth}`}>
      {children}
    </div>
  );
}

export default Card;
