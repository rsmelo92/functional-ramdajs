import React from 'react';
import './index.css'

function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

export default Card;
