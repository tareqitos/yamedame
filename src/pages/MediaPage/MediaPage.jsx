import React, { useEffect, useState, useRef } from 'react';
import Links from '../../components/links';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Sidebar from '../../components/sidebar';
import ToTop from '../../components/toTop';
import Feedback from '../../components/feedback'
import styles from '../Page.module.scss';

function MediaPage() {
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
    const html = document.documentElement
    html.dataset.theme = theme; // Switch theme in <html>
    window.localStorage.setItem('theme', theme);
  }, [theme])

  useEffect(() => {
    const removeIndexHtmlAndAnchors = () => {
      if (window.location.pathname.endsWith('index.html')) {
        window.history.replaceState({}, '', window.location.pathname.replace('index.html', ''));
      }
      if (window.location.hash) {
        window.history.replaceState({}, '', window.location.pathname);
      }
    };

    removeIndexHtmlAndAnchors();
    window.addEventListener('hashchange', removeIndexHtmlAndAnchors);

    return () => {
      window.removeEventListener('hashchange', removeIndexHtmlAndAnchors);
    };
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    sidebarActive ? html.classList.add('stop-scrolling') : html.classList.remove('stop-scrolling')
  }, [sidebarActive])

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch('/api/media.json')
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

  if (!links) {
    return (
      <>
        <Header
          links={links}
          filteredLinks={filteredLinks}
          setFilteredLinks={setFilteredLinks}
          input_reference={input_reference}
          theme={theme} toggleTheme={toggleTheme}
          sidebarActive={sidebarActive} setSidebarActive={setSidebarActive}
        />
        <p className={styles['json-error-message']}>An error has occured. Try refresh the page or <a href='mailto:social@tareqitos.com'>contact me</a>!</p>
      </>
    )
  }

  return (
    <>
      <div onClick={() => setSidebarActive(false)}
        className={`${styles['sidebar-bg']} ${sidebarActive ? styles['fade-in'] : styles['fade-out']}`}>
      </div>
      <Header
        links={links}
        filteredLinks={filteredLinks}
        setFilteredLinks={setFilteredLinks}
        input_reference={input_reference}
        theme={theme} toggleTheme={toggleTheme}
        sidebarActive={sidebarActive} setSidebarActive={setSidebarActive} />
      <main>
        <div className={styles['main-wrapper']}>
          <div className={styles['main-content']}>
            <div className={styles.resources}>
              <Title title='Japanese Media Resources' description='Dictionaries, grammar guides, vocabulary insights, and reading materials to enhance your Japanese learning journey.'/>
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
        </div>
        <ToTop button_css_selector={styles['to-top-main']} />
      </main>
      <Footer />
    </>
  );
}

function Title({title, description}) {
  return (
    <>
      <h1 className={styles['resources-title']}>{title}</h1>
      <p className={styles['resources-desc']}>{description}</p>
      <Feedback />
      <hr className={styles['resources-hr']}></hr>
    </>
  )
}

export default MediaPage;