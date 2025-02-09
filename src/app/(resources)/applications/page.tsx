import { ResourcesTitle } from "@/app/components/resourcesTitle"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faSpellCheck, faBookOpen, faBrain, faTools, faLaptop, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { faApple, faAndroid } from "@fortawesome/free-brands-svg-icons";

import ScrollToHash from "@/utils/scrollToHash";
import '@/styles/resources.scss'
import Feedback from "@/app/components/feedback";

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
    
    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    const response = await fetch(`${API_URL}/api/resources/applications`);
    if (!response.ok) {
        // Log and throw an error if the response status is not OK.
        console.log(response)
        console.error("Failed to fetch resources:", response.status, response.statusText);
        throw new Error("Failed to fetch resources");
    }
    const apps = await response.json()

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
        <div className="resources-container">
            <ScrollToHash />
            <ResourcesTitle title="Japanese Applications 💻" description="Discover amazing software and applications to boost your Japanese learning journey!" />
            <Feedback
                title="Share your favorite applications / softwares!"
                categories={Object.keys(apps)} />
            <hr className="resources-title-separator" />

            <div className="list-container">
                {Object.keys(apps).map((category, i) => (

                    <section key={i} className={`${apps[category][0].slug}-container`}>
                        <a id={`${apps[category][0].slug}-id`} className="anchor"></a>
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
    )
}