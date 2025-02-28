import { ResourcesTitle } from "@/app/components/resourcesTitle"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlagCheckered, faBook, faSpellCheck, faLanguage, faBookOpen, faBookmark, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import ScrollToHash from "@/utils/scrollToHash";
import '@/styles/resources.scss'
import Feedback from "@/app/components/feedback";
import Sidebar from "@/app/components/sidebar";
import Navbar from "@/app/components/navbar";
import { getFavorite, getResources } from "@/lib/resources-api";
import AddToFavorite from "@/app/components/addFavorite";
import { cookies } from "next/headers";


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
    let resources: { [key: string]: Resource[] } = {};
    let fav = [];

    try {
        const cookieStore = await cookies();
        console.log("All cookies:", cookieStore.getAll());

        const token = cookieStore.get('refreshToken')?.value || '';
        console.log(token)
        const { result } = await getFavorite(token)

        if (result.favorite.length > 0) {
            fav = result.favorite.map((item: { item_id: string }) => item.item_id);
        } else {
            fav = [result.favorite.item_id];
        }
        console.log(result.message)
        
    } catch (err) {
        console.log("Error loading favorite", err)
    }

    try {
        const { response, result } = await getResources(`/api/resources`)
        if (response.ok) {
            resources = await result
        }
    } catch (error) {
        console.error("Error fetching resources:", error);
        // Provide fallback data or UI
        resources = {}; // Fallback to empty data or provide some default data
    }

 


    const category_icons: { [key: string]: IconDefinition } = {
        'beginner': faFlagCheckered,
        'dictionaries': faBook,
        'grammar': faSpellCheck,
        'vocabulary': faLanguage,
        'reading': faBookOpen,
        'miscellaneous': faBookmark
    }

    return (
        <>
            <Navbar resources={resources} />
            <div className="resources-wrapper">
                <div className="resources-container">
                    <ScrollToHash />
                    <ResourcesTitle title="Study Resources 📖" description="Dictionaries, grammar guides, vocabulary insights, reading materials and other useful resources for studying!" />
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
                                            <div className="add-to-favorite" style={{ display: 'inline' }}>
                                                <AddToFavorite
                                                    id={item.uuid}
                                                    type={'resources'}
                                                    fav={fav}/>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        ))}
                    </div>
                </div>
                <Sidebar resources={resources} />
            </div>
        </>
    )
}