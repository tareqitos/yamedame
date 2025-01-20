import React, { useEffect, useState, useRef } from 'react';
import { Link } from "react-router";

import Links from '../../components/links';
import Sidebar from '../../components/sidebar';
import Feedback from '../../components/feedback'

import styles from '../Page.module.scss';
import Searchbar from '../../components/searchbar';

function ResourcesPage({ theme, toggleTheme, sidebarActive, setSidebarActive, isLoading, setIsLoading, error, setError}) {
  const [links, setLinks] = useState();
  const [filteredLinks, setFilteredLinks] = useState();
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);

  const input_reference = useRef()


  useEffect(() => {
    const fetchData = async (api) => {
      setIsLoading(true)
      try {
        let response = await fetch(api)
        const result = await response.json()
        setLinks(result)
        setFilteredLinks(result)
        setCategories(Object.keys(result).map((category) => category))
      } catch (error) {
        setError(true);
        console.error('Error fetching JSON:', error);
      } finally {
        setTimeout(() => setIsLoading(false), 200);

        if (error) {
          return console.log('Error fetching JSON')
        }
      }
    };

    fetchData('https://api.tareqitos.me/api/resources');
  }, []);

  if (error) {
    return (
      <>
        <p className={styles['json-error-message']}>An error has occured. Try refresh the page or <a href='mailto:contact@yameda.me'>contact me</a>!<br /><br />ごめんなさい 🙇</p>
      </>
    )
  }

  return (
    <>
      {isLoading ? <p className={styles['loading-data']}>中</p> :

        <main>
          <div className={styles['main-wrapper']}>
            <div className={styles['main-content']}>
              <div className={styles.resources}>
                <Title title='Japanese Learning Resources' description='Dictionaries, grammar guides, vocabulary insights, and reading materials to enhance your Japanese learning journey.' />
                <Searchbar
                  links={links}
                  filteredLinks={filteredLinks}
                  setFilteredLinks={setFilteredLinks}
                  input_reference={input_reference} />

                <Links
                  filteredLinks={filteredLinks}
                  input_reference={input_reference} />
              </div>
              <Sidebar
                theme={theme}
                toggleTheme={toggleTheme}
                sidebarActive={sidebarActive}
                setSidebarActive={setSidebarActive}
                categories={categories}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory} />
            </div>
          </div>
        </main>
      }
    </>
  );
}

function Title({ title, description }) {
  return (
    <>
      <h1 className={styles['resources-title']}>{title}</h1>
      <p className={styles['resources-desc']}>{description}</p>
      <Feedback />
      <hr className={styles['resources-hr']}></hr>
    </>
  )
}

export default ResourcesPage;