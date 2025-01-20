import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ResourcesPage from './pages/ResourcesPage';
import Header from './components/header';
import Footer from './components/footer';
import ToTop from './components/toTop';

import styles from './pages/Page.module.scss'

function App() {
  const [sidebarActive, setSidebarActive] = useState(false);
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)


  // -------- THEME -------- //
  const get_theme_from_storage = window.localStorage.getItem("theme");
  const [theme, setTheme] = useState(!get_theme_from_storage ? "dark" : get_theme_from_storage);

  useEffect(() => {
    document.documentElement.dataset.theme = theme; // Apply initial theme
    window.localStorage.setItem("theme", theme);
  }, [theme])

  function toggleTheme() {
    setTheme(theme == "dark" ? "light" : "dark")
    document.documentElement.dataset.theme = theme; // Switch theme in <html>
    window.localStorage.setItem("theme", theme);
  }

  // --------- ANCHOR --------- //

  useEffect(() => {
    const removeAnchorsFromURL = () => {
      if (window.location.hash) {
        window.history.replaceState({}, '', window.location.pathname);
      }
    };

    removeAnchorsFromURL();
    window.addEventListener('hashchange', removeAnchorsFromURL);

    return () => {
      window.removeEventListener('hashchange', removeAnchorsFromURL);
    };
  }, []);

  return (
    <>

      <Header
        theme={theme}
        setTheme={setTheme}
        toggleTheme={toggleTheme}
        sidebarActive={sidebarActive}
        setSidebarActive={setSidebarActive} />
      <Router>
        <Routes>
          <Route
            path="/"
            element={<ResourcesPage
              error={error}
              setError={setError}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              theme={theme}
              setTheme={setTheme}
              toggleTheme={toggleTheme}
              sidebarActive={sidebarActive}
              setSidebarActive={setSidebarActive} />} />
        </Routes>
      </Router>
      <ToTop button_css_selector={styles['to-top-main']} />
      {!isLoading && !error  ? <Footer /> : null}
    </>
  );
}

export default App;