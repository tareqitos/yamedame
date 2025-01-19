import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ResourcesPage from './pages/ResourcesPage';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ResourcesPage />} />
      </Routes>
    </Router>
  );
}

export default App;