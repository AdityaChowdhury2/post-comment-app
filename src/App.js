import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import PostDetail from './Components/PostDetail/PostDetail';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/postDetails/:id" element={<PostDetail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
