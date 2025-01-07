import React, { useEffect, useState, useRef } from 'react';
import { Links } from './components/Links';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Sidebar } from './components/Sidebar';
import '../dist/css/main.css'

function App() {
  const [links, setLinks] = useState();
  const [filteredLinks, setFilteredLinks] = useState();
  const [categories, setCategories] = useState([]);
  const input_reference = useRef()

  const [activeCategory, setActiveCategory] = useState(null);
  const [sidebarActive, setSidebarActive] = useState(false);
  const [theme, setTheme] = useState('dark')

  function toggleTheme() {
    theme == 'dark' ? setTheme('light') : setTheme('dark')
  }

  useEffect(() => {
    const html = document.documentElement
    html.dataset.theme = theme; // Switch theme in <html>
  }, [theme])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/src/links.json')
        const result = await response.json()
        setLinks(result)
        setFilteredLinks(result)
        setCategories(Object.keys(result).map((category) => category))
      } catch (error) {
        console.error('Error fetching JSON:', error);
      }
    };
    fetchData();
  }, []);

  if (!links) return <p>Loading...</p>;

  return (
    <>
      <Header
        links={links}
        setFilteredLinks={setFilteredLinks}
        input_reference={input_reference}
        theme={theme} toggleTheme={toggleTheme}
        sidebarActive={sidebarActive} setSidebarActive={setSidebarActive} />
      <main>
        <div className="main-content">
          <div className="resources">
            <Title />
            <Links
              filteredLinks={filteredLinks}
              input_reference={input_reference}
              activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
          </div>
          <Sidebar
            categories={categories}
            theme={theme} toggleTheme={toggleTheme}
            sidebarActive={sidebarActive} setSidebarActive={setSidebarActive}
            activeCategory={activeCategory} />
        </div>
      </main>

      <Footer />
    </>
  );
}

function Title() {
  return (
    <>
      <h1 className="resources-title">Japanese Learning Resources</h1>
      <p className="resources-desc">Dictionaries, grammar guides, vocabulary insights, and reading materials to enhance your Japanese learning journey.</p>
      <hr className="resources-hr"></hr>
    </>
  )
}

export default App;
