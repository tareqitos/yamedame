import { ResourcesTitle } from "@/app/components/resourcesTitle"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faSpellCheck, faBookOpen, faBrain, faTools, faLaptop, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { faApple, faAndroid } from "@fortawesome/free-brands-svg-icons";

import ScrollToHash from "@/utils/scrollToHash";
import '@/styles/resources.scss'
import Feedback from "@/app/components/feedback";
import Sidebar from "@/app/components/sidebar";
import Navbar from "@/app/components/navbar";
import getResources from "@/lib/resources-api";


type Applications = {
    id: number,
    uuid: string,
    name: string,
    description: string,
    link: string
    category: string,
    slug: string,
    platforms: string[]
}

export default async function Applications() {

    let apps: { [key: string]: Applications[] } = {};

    try {
        const {response, result} = await getResources('/api/applications')
        if (response.ok) {
            apps = await result
        }

    } catch (error) {
        console.error("Error fetching applications:", error);
        // Provide fallback data or UI
        apps = {}; // Fallback to empty data or provide some default data
    }


    const category_icons: { [key: string]: IconDefinition } = {
        'dictionaries': faBook,
        'flashcards': faBrain,
        'grammar-kana': faSpellCheck,
        'tools': faTools,
        'reading': faBookOpen,
        'android': faAndroid,
        'apple': faApple,
        'desktop': faLaptop
    }

    return (
        <>
            <Navbar resources={apps}/>
            <div className="resources-wrapper">
                <div className="resources-container">
                    <ScrollToHash />
                    <ResourcesTitle title="Software & Applications 💻" description="Useful software and applications to support your studies." />
                    <Feedback
                        title="Share your favorite applications / softwares!"
                        categories={Object.keys(apps)} />
                    <hr className="resources-title-separator" />
                    <div className="list-container">
                        {Object.keys(apps).map((category, i) => (
                            <section key={i} className={`${apps[category][0].slug}-container`}>
                                <div id={`${apps[category][0].slug}-id`} className="anchor"></div>
                                <h2 className="category-title">{category}</h2>
                                <ul className="list-item-container">
                                    {apps[category].map((item: Applications) => (
                                        <li key={item.uuid} className={`item-container ${item.slug}`}>
                                            <FontAwesomeIcon className="item-icons" icon={category_icons[item.slug]} height={20} />
                                            <a href={item.link} className="item" target="_blank">{item.name}</a>
                                            {` - ${item.description}  / `}
                                            {item.platforms.map((platform) => (
                                                <FontAwesomeIcon key={platform} className="item-icons" icon={category_icons[platform]} height={20} />
                                            ))}
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        ))}
                    </div>
                </div>
                <Sidebar resources={apps} />
            </div>
        </>
    )
}