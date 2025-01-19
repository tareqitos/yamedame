import styles from './SearchBar.module.scss'

function SearchBar({ links, filteredLinks, setFilteredLinks, input_reference}) {

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

    function filterLinksByName(event) {
        event.preventDefault();

        const filtered_by_name = categories.reduce((acc, category) => {
            acc[category] = filteredLinks[category].sort((link, next_link) => {
                return link.name.localeCompare(next_link.name);
            })
            return acc;
        }, {})

        console.log('sorted')
        console.log(filtered_by_name)

        setFilteredLinks(filtered_by_name)
    }

    return (
        <>
            <form onInput={filterLinksByQuery}>
                <button onClick={filterLinksByName}>Sort</button>
                <input className={styles['search-input']} ref={input_reference} id="input-field" type="text" placeholder="Explore the world of Japanese resources!" autoComplete='off' />
            </form>
        </>
    );
}

export default SearchBar;