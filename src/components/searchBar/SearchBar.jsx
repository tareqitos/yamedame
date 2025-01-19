import styles from './Searchbar.module.scss'
import components_styles from '../../styles/Components.module.scss'
import { useState, useRef } from 'react';

function SearchBar({ links, filteredLinks, setFilteredLinks, input_reference }) {

    if (!links) return;
    const categories = Object.keys(links);

    function filterLinksByQuery(event) {
        event.preventDefault();
        const query = input_reference.current.value.trim();

        // Use reduce to create a new object with filtered links for each category
        const filtered = categories.reduce((acc, category) => {
            // Filter links for the current category
            acc[category] = links[category].filter((link) => {
                return link.name.toLowerCase().includes(query) || link.description.toLowerCase().includes(query);
            });
            return acc; // Return the updated accumulator
        }, {}) // {} Initial value of the accumulator is an empty object

        setFilteredLinks(filtered);
    }

    const select_value_reference = useRef();
    function filterLinksByName(event) {

        const select_value = event.target.value;

        const filtered_by_name = categories.reduce((acc, category) => {
            acc[category] = filteredLinks[category].sort((link, next_link) => {
                return select_value == 'asc' ? link.name.localeCompare(next_link.name) : select_value == 'desc' ? next_link.name.localeCompare(link.name) : '';
            })
            return acc;
        }, {})

        setFilteredLinks(filtered_by_name)
    }

    return (
        <>
            <form onInput={filterLinksByQuery}>
                <input className={styles['search-input']} ref={input_reference} id="input-field" type="text" placeholder="&#xF002; Explore the world of Japanese resources!" autoComplete='off' style={{ fontFamily: 'Nunito Sans ,FontAwesome' }} />
                <select onChange={filterLinksByName} defaultValue='' className={`${styles['sort-input']} ${components_styles['select-input']}`}>
                    <option value="" disabled>Sort by</option>
                    <option ref={select_value_reference} value="asc">A-Z</option>
                    <option ref={select_value_reference} value="desc">Z-A</option>
                </select>
            </form>
        </>
    );
}

export default SearchBar;