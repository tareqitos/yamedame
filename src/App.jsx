import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ResourcesPage from './pages/ResourcesPage';
import MediaPage from './pages/MediaPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ResourcesPage />} />
        <Route path="/media" element={<MediaPage />} />
      </Routes>
    </Router>
  );
}

export default App;