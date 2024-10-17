import './App.css';
import HomePage from './page/homepage.js';
import ChatPage from './page/chatpage.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/chat" element={<ChatPage />} />
    </Routes>
</Router>
  );
}

export default App;
