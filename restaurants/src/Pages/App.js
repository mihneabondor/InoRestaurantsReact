import WelcomePage from './Welcome/Welcome.js';
import HomePage from './Home/Home.js';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' Component={WelcomePage} />
        <Route path='/home' Component={HomePage}/>
      </Routes>
    </Router>
  );
}

export default App;
