import { faAndroid, faApple, faSpotify, faYoutube, IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { faBook, faBookmark, faBookOpen, faBrain, faFlagCheckered, faLanguage, faLaptop, faPhotoFilm, faSpellCheck, faTools, faMobileScreenButton, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IconsProps {
    resource: string;
}

export default function Icons({ resource }: IconsProps) {
    // Group icons by category
    const category_icons: { [key: string]: IconDefinition } = {
        // Learning levels
        'beginner': faFlagCheckered,

        // Study materials
        'dictionaries': faBook,
        'grammar': faSpellCheck,
        'vocabulary': faLanguage,
        'kana': faLanguage,
        'reading': faBookOpen,
        'flashcards': faBrain,
        'grammar-kana': faSpellCheck,

        // Content platforms
        'youtube': faYoutube,
        'spotify': faSpotify,
        'media': faPhotoFilm,

        // Platforms/Devices
        'android': faAndroid,
        'apple': faApple,
        'desktop': faLaptop,

        // Other
        'miscellaneous': faBookmark,
        'tools': faTools,
        'mobile': faMobileScreenButton,
        'web': faGlobe
    }

    return (
        <>
            <FontAwesomeIcon className="item-icons" icon={category_icons[resource]} height={20} />
        </>
    )
}