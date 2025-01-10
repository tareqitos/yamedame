import React, { useEffect, useState, useRef } from 'react';
import Links from '../links';
import Header from '../header';
import Footer from '../footer';
import Sidebar from '../sidebar';
import styles from './App.module.scss';

function App() {
  const [links, setLinks] = useState();
  const [filteredLinks, setFilteredLinks] = useState();
  const [categories, setCategories] = useState([]);
  const input_reference = useRef()

  const [activeCategory, setActiveCategory] = useState(null);
  const [sidebarActive, setSidebarActive] = useState(false);

  const get_theme_from_storage = window.localStorage.getItem('theme')
  const [theme, setTheme] = useState(!get_theme_from_storage ? 'dark' : get_theme_from_storage)

  function toggleTheme() {
    theme == 'dark' ? setTheme('light') : setTheme('dark')
  }


  useEffect(() => {
    const html = document.documentElement;
    sidebarActive ? html.classList.add('stop-scrolling') : html.classList.remove('stop-scrolling')
  }, [sidebarActive])

  useEffect(() => {
    const html = document.documentElement
    html.dataset.theme = theme; // Switch theme in <html>
    window.localStorage.setItem('theme', theme); 
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
      <div onClick={() => setSidebarActive(false)}
        className={`${styles.sidebar_bg} ${sidebarActive ? styles.fade_in : styles.fade_out}`}>
      </div>
      <Header
        links={links}
        setFilteredLinks={setFilteredLinks}
        input_reference={input_reference}
        theme={theme} toggleTheme={toggleTheme}
        sidebarActive={sidebarActive} setSidebarActive={setSidebarActive} />
      <main>
        <div className={styles.main_wrapper}>
          <div className={styles.main_content}>
            <div className={styles.resources}>
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
          <Footer />
        </div>
      </main>
    </>
  );
}

function Title() {
  return (
    <>
      <h1 className={styles.resources_title}>Japanese Learning Resources</h1>
      <p className={styles.resources_desc}>Dictionaries, grammar guides, vocabulary insights, and reading materials to enhance your Japanese learning journey.</p>
      <hr className={styles.resources_hr}></hr>
    </>
  )
}

export default App;