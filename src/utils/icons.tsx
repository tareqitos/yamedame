import { faAndroid, faApple, faSpotify, faYoutube, IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { faBook, faBookmark, faBookOpen, faBrain, faFlagCheckered, faGamepad, faLanguage, faLaptop, faPhotoFilm, faSpellCheck, faTools } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Icons({resource}: any) {
    const category_icons: { [key: string]: IconDefinition } = {
        'beginner': faFlagCheckered,
        'dictionaries': faBook,
        'grammar': faSpellCheck,
        'vocabulary': faLanguage,
        'reading': faBookOpen,
        'miscellaneous': faBookmark,
        'youtube': faYoutube,
        'spotify': faSpotify,
        'flashcards': faBrain,
        'grammar-kana': faSpellCheck,
        'tools': faTools,
        'android': faAndroid,
        'apple': faApple,
        'desktop': faLaptop,

        'media': faPhotoFilm
    }

    return (
        <>
            <FontAwesomeIcon className="item-icons" icon={category_icons[resource]} height={20} />
        </>
    )
}