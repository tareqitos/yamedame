import React, { useEffect, useState } from 'react';
import { Form } from './Form';
import { Links } from './Links';
import './App.css';

function App() {
  const [links, setLinks] = useState();
  const [filteredLinks, setFilteredLinks] = useState();

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
      <Form links={links} filteredLinks={filteredLinks} setFilteredLinks={setFilteredLinks}  />
      <Links filteredLinks={filteredLinks} />
    </>
  );
}

export default App;
