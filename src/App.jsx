import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import ResourcesPage from './pages/ResourcesPage';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/learning-resources" element={<ResourcesPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;