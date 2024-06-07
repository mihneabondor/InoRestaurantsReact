import './Welcome.css'
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../Assets/Images/Ino/Ino_Normal.png'

function Welcome() {
  const navigate = useNavigate() // Usenavigate to redirect to the page

  useEffect(() => {
    setTimeout(() => {
      navigate('/Home');
    }, 4000)
  }, [])

  return (
    <div className="App">
      <div className="Background-gradient">
        <div className="App-header">
          <img className="Logo" src={logo} alt={logo} />
          <div className="Welcome-Text">
            Welcome to Ino
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome