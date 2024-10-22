import './App.css';
import HomePage from './page/homepage.js';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
</Router>
  );
}

export default App;
