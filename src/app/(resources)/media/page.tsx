import { ResourcesTitle } from "@/app/components/resourcesTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faSpotify, IconDefinition } from "@fortawesome/free-brands-svg-icons";
import ScrollToHash from "@/utils/scrollToHash";
import '@/styles/resources.scss'
import Feedback from "@/app/components/feedback";
import Image from "next/image";
import Sidebar from "@/app/components/sidebar";
import Navbar from "@/app/components/navbar";
import {getResources} from "@/lib/resources-api";

type Media = {
    id: number,
    uuid: string,
    name: string,
    description: string,
    link: string
    category: string,
    platform: string
    image: string,
    slug: string,
}

export default async function Media() {

    let media: { [key: string]: Media[] } = {};

    try {
        const {response, result} = await getResources('/api/media')
        if (response.ok) {
            media = await result
        }
    } catch (error) {
        console.error("Error fetching media:", error);
        // Provide fallback data or UI
        media = {}; // Fallback to empty data or provide some default data
    }

    const platforms_icons: { [key: string]: IconDefinition } = {
        'youtube': faYoutube,
        'spotify': faSpotify
    }

    return (
        <>
            <Navbar resources={media} />
            <div className="resources-wrapper">
                <div className="resources-container">
                    <ScrollToHash />
                    <ResourcesTitle title="Media Library 💾" description="Teaching videos, vlogs, podcasts, gaming and more!" />
                    <Feedback
                        title="Share your favorite Youtube channel or podcast 📀"
                        categories={Object.keys(media)} />
                    <hr className="resources-title-separator" />
                    <div className="list-container media">
                        {Object.keys(media).map((category, i) => (
                            <section key={i} className={`${media[category][0].slug}-container`}>
                                <a id={`${media[category][0].slug}-id`} className="anchor"></a>
                                <h2 className="category-title">{category}</h2>
                                <ul key={i} className="list-item-container media">
                                    {media[category].map((item: Media) => (
                                        <li key={item.uuid} className={`item-container ${item.slug} media`}>
                                            <Image src={item.image} alt={item.name} width={60} height={60} className="item-picture media" />
                                            <div className="item-infos">
                                                <a href={item.link} className="item media" target="_blank">{item.name} <FontAwesomeIcon className="icon" icon={platforms_icons[item.platform]} width={20} /></a>
                                                {item.description}
                                            </div>
                                            <Image src={item.image} alt={item.name} width={100} height={100} className="item-picture-bg" />
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        ))}
                    </div>
                </div>
                <Sidebar resources={media} />
            </div>
        </>
    )
}