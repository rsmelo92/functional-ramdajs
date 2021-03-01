import React from 'react'
import './index.css'

function Chip({ children }) {
  return (
    <span className="chip">
      <span className="chip-icon">
        <img src={`${process.env.PUBLIC_URL}/link.png`} />
      </span>
      {children}
    </span>
  );
}

export default Chip
