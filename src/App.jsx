import React, { useEffect, useState, useRef } from 'react';
import { Links } from './Links';
import { Header } from './Header';
import { Footer } from './Footer';
import '../dist/css/main.css'

function App() {
  const [links, setLinks] = useState();
  const [filteredLinks, setFilteredLinks] = useState();
  const input_reference = useRef()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/src/links.json')
        const result = await response.json()
        setLinks(result)
        setFilteredLinks(result)
      } catch (error) {
        console.error('Error fetching JSON:', error);
      }
    };
    fetchData();
  }, []);

  if (!links) return <p>Loading...</p>;

  return (
    <>
      <Header links={links} setFilteredLinks={setFilteredLinks} input_reference={input_reference} />
      <main>
        <div className="main-content">
          <div className="resources">
            <Links filteredLinks={filteredLinks} input_reference={input_reference} />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
