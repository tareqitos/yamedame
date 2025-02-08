import { ResourcesTitle } from "@/app/components/resourcesTitle"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlagCheckered, faBook, faSpellCheck, faLanguage, faBookOpen, faBookmark, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import ScrollToHash from "@/utils/scrollToHash";
import '@/styles/resources.scss'
import Feedback from "@/app/components/feedback";


type Resource = {
    id: number,
    uuid: string,
    name: string,
    description: string,
    link: string
    category: string,
    slug: string,
    platform: string
}

export default async function Resources() {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    await new Promise(resolve => setTimeout(resolve, 500));
    const response = await fetch(`${API_URL}api/resources/resources`);
    const resources = await response.json();

    const category_icons: { [key: string]: IconDefinition } = {
        'beginner': faFlagCheckered,
        'dictionaries': faBook,
        'grammar': faSpellCheck,
        'vocabulary': faLanguage,
        'reading': faBookOpen,
        'miscellaneous': faBookmark
    }

    return (
        <div className="resources-container">
            <ScrollToHash />
            <ResourcesTitle title="Japanese Study Resources 📖" description="Dictionaries, grammar guides, vocabulary insights, and reading materials to enhance your Japanese learning journey." />
            <Feedback
                title="Share your favorite Japanese learning tool 📖"
                categories={Object.keys(resources)} />
            <hr className="resources-title-separator" />
            <div className="list-container">
                {Object.keys(resources).map((category, i) => (
                    <section key={i} className={`${resources[category][0].slug}-container`}>
                        <a id={`${resources[category][0].slug}-id`} className="anchor"></a>
                        <h2 className="category-title">{category}</h2>

                        <ul key={i} className="list-item-container">
                            {resources[category].map((item: Resource) => (
                                <li key={item.uuid} className={`item-container ${item.slug}`}>
                                    <FontAwesomeIcon className="item-icons" icon={category_icons[item.slug]} height={20} />
                                    <a href={item.link} className="item" target="_blank">{item.name}</a>
                                    {` - ${item.description}`}
                                </li>
                            ))}
                        </ul>
                    </section>
                ))}
            </div>
        </div>
    )
}