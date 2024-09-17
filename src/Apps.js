import React from 'react';
import './Apps.css';

function Apps() {
  return (
    <div className="container">
      <div className="card card1">
        <h2>Work history</h2>
        <div className="plus-icon">+</div>
        <div className="content">
          <div className="work-history">
            <h3>MicroGenDX | Frontend Developer</h3>
            <p>January 2023 - December 2024</p>
          </div>
        </div>
      </div>
      <div className="card card2">
        <h2>Education</h2>
        <div className="plus-icon">+</div>
        <div className="content">
          <div className="education">
            <h3>HSC Board | CBSE</h3>
            <p>94%</p>
          </div>
        </div>
      </div>
      <div className="boxn">
      <button className="submit-btn">SUBMIT</button>
      </div>
    </div>
  );
}

export default Apps;