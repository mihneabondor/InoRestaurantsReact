import './Welcome.css'
import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../Assets/Images/Ino/Ino_Normal.png'

function Welcome() {
    const navigate = useNavigate() // Usenavigate to redirect to the page

    useEffect(() => {
        setTimeout(() => {
          navigate('/Home');
        }, 3000)
    }, [])

    return (
    <div className="App">
      <div className="App-header">
          <img className="logo" src={logo} alt={logo}/>
        Welcome to Ino
      </div>
    </div>
  );
}

export default Welcome