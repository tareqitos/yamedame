import { Item } from "@/types/types";
import { BookOpenTextIcon, GameControllerIcon, DesktopIcon, TranslateIcon, VideoCameraIcon, SparkleIcon, FlowerTulipIcon, DeviceMobileIcon, BrowserIcon, CardsThreeIcon, KanbanIcon, BooksIcon, ToolboxIcon, BowlSteamIcon, GlobeHemisphereEastIcon, GrainsIcon, TelevisionIcon, JoystickIcon, CassetteTapeIcon, YoutubeLogoIcon, SpotifyLogoIcon, BookIcon, StarIcon, HouseIcon, CatIcon, RabbitIcon, BirdIcon, BoneIcon, FishSimpleIcon, ButterflyIcon } from "@phosphor-icons/react/dist/ssr";

// Using Phosphor Icons
export const Icons = [
  { path: 'dictionaries', icon: BooksIcon, iconColor: "#23AE5B" },
  { path: 'vocabulary', icon: TranslateIcon, iconColor: "#426BFE" },
  { path: 'grammar', icon: BookOpenTextIcon, iconColor: "#bdc3c7" },
  { path: 'reading', icon: BookIcon, iconColor: "#67cdd1" },
  { path: 'media', icon: VideoCameraIcon, iconColor: "#D084D6" },
  { path: 'games', icon: GameControllerIcon, iconColor: "#e67e22" },
  { path: 'applications', icon: DesktopIcon, iconColor: "#de6878" },
  { path: 'animals', icon: CatIcon, iconColor: "#6876de" },
  { path: 'miscellaneous', icon: BowlSteamIcon, iconColor: "#67cdd1" },
  { path: 'beginners', icon: StarIcon, iconColor: "#fcbc32" },
  { path: 'home', icon: HouseIcon, iconColor: "#fc3c32" },
  { path: '', icon: SparkleIcon, iconColor: "#fcbc32" },
]

export const IconsCategory = [
  { category: 'dictionaries', icon: BooksIcon, iconColor: "#1a8e47" },
  { category: 'dictionaries-apps', icon: BooksIcon, iconColor: "#c44d5f" },
  { category: 'vocabulary-kanji', icon: TranslateIcon, iconColor: "#3654d1" },
  { category: 'grammar', icon: BookOpenTextIcon, iconColor: "#7d8891" },
  { category: 'reading', icon: BookIcon, iconColor: "#4ba6aa" },
  { category: 'apps', icon: BookIcon, iconColor: "#4ba6aa" },
  { category: 'kana', icon: FlowerTulipIcon, iconColor: "#b5316e" },
  { category: 'mobile', icon: DeviceMobileIcon, iconColor: "#c96519" },
  { category: 'web', icon: BrowserIcon, iconColor: "#c96519" },
  { category: 'flashcards', icon: CardsThreeIcon, iconColor: "#c44d5f" },
  { category: 'grammar-kana', icon: BookOpenTextIcon, iconColor: "#c44d5f" },
  { category: 'tools', icon: ToolboxIcon, iconColor: "#c44d5f" },
  { category: 'miscellaneous', icon: BowlSteamIcon, iconColor: "#4ba6aa" },
  { category: 'language-learning', icon: GlobeHemisphereEastIcon, iconColor: "#a866b5" },
  { category: 'culture', icon: GrainsIcon, iconColor: "#a866b5" },
  { category: 'entertainment', icon: TelevisionIcon, iconColor: "#a866b5" },
  { category: 'podcast', icon: CassetteTapeIcon, iconColor: "#a866b5" },
  { category: 'gaming', icon: JoystickIcon, iconColor: "#a866b5" },

  // Animals

  { category: 'general', icon: CatIcon, iconColor: "#e6739a" },
  { category: 'study-games', icon: GameControllerIcon, iconColor: "#5ba3e6" },
  { category: 'mammals', icon: RabbitIcon, iconColor: "#a673e6" },
  { category: 'birds', icon: BirdIcon, iconColor: "#e6a673" },
  { category: 'dinosaurs', icon: BoneIcon, iconColor: "#73e68b" },
  { category: 'sea-fish', icon: FishSimpleIcon, iconColor: "#73c8e6" },
  { category: 'insects-arachnids', icon: ButterflyIcon, iconColor: "#e6c873" },

]

export const IconsMedia = [
  { platform: 'youtube', icon: YoutubeLogoIcon, iconColor: "#FF6666" },
  { platform: 'spotify', icon: SpotifyLogoIcon, iconColor: "#1ED760" },
]

export const getCardData = () => {
  return [
    { title: 'Dictionaries', desc: 'Essential dictionaries and reference tools for Japanese learning.', path: 'dictionaries', icon: "📚" },
    { title: 'Vocabulary', desc: 'Resources to help you build and expand your Japanese vocabulary.', path: 'vocabulary', icon: "📝" },
    { title: 'Grammar', desc: 'Master Japanese grammar rules, patterns, and sentence structures.', path: 'grammar', icon: "📖" },
    { title: 'Reading', desc: 'Practice reading skills with various texts, articles, and stories.', path: 'reading', icon: "📚" },
    { title: 'Media', desc: 'Teaching videos, vlogs, podcasts, gaming and more!', path: 'media', icon: "💾" },
    { title: 'Games', desc: 'Find and play games to enhance and practice the language!', path: 'games', icon: "🎮" },
    { title: 'Software / Applications', desc: 'Useful software and applications to support your studies.', path: 'applications', icon: "💻" },
    { title: 'Animals', desc: 'Discover Japanese wildlife and learn animal-related vocabulary.', path: 'animals', icon: "🐱" },
    { title: 'Miscellaneous', desc: 'Various helpful resources and tools that don\'t fit into other categories.', path: 'miscellaneous', icon: "📦" },
    { title: 'More Coming Soon', desc: 'Stay tuned for additional resources and updates!', path: "", icon: "✨" }
  ];
};

export const getCardByPath = (path: string) => {
  return getCardData().find(card => card.path === path);
};

export const dict: Item[] = [
  {
    id: "1",
    name: "Jisho",
    link: "https://jisho.org/",
    description: "Powerful dictionary with detailed explanations.",
    slug: "dictionaries",
    category: ""
  },
  {
    id: "2",
    name: "Jotoba",
    link: "https://jotoba.de/",
    description: "Multilingual dictionary with context.",
    slug: "dictionaries",
    category: ""
  },
  {
    id: "3",
    name: "Yomitan",
    link: "https://github.com/themoeway/yomitan",
    description: "Translate text on webpages easily.",
    slug: "dictionaries",
    category: ""
  },
]

export const vocabulary: Item[] = [
  {
    id: "1",
    name: "Kana Dojo",
    link: "https://kanadojo.com/",
    description: "KanaDojo is a fun, minimalist, aesthetic platform for learning and practicing Japanese online.",
    slug: "vocabulary-kanji",
    category: ""
  },
  {
    id: "2",
    name: "Katakana Chart",
    link: "https://www.tofugu.com/japanese/learn-katakana/",
    description: "Comprehensive guide to learning Katakana.",
    slug: "vocabulary-kanji",
    category: ""
  },
  {
    id: "3",
    name: "DJT Kana",
    link: "https://djtguide.neocities.org/kana/",
    description: "Interactive kana learning tool.",
    slug: "vocabulary-kanji",
    category: ""
  },
]

export const grammar: Item[] = [
  {
    id: "1",
    name: "Imabi",
    link: "https://imabi.org/",
    description: "Extensive Japanese grammar resource.",
    slug: "grammar",
    category: ""
  },
  {
    id: "2",
    name: "Tae Kim's Guide",
    link: "https://guidetojapanese.org/learn/",
    description: "Your go-to guide for grammar and basics.",
    slug: "grammar",
    category: ""
  },
  {
    id: "3",
    name: "All About Particles",
    link: "https://tatsumoto-ren.github.io/blog/all-about-particles.html",
    description: "A organized book containing detailed explanations of Japanese particles.",
    slug: "grammar",
    category: ""
  },
]

export const anki: Item[] = [
  {
    id: "1",
    name: "Japanese course",
    link: "https://ankiweb.net/shared/info/911122782",
    description: "Self-contained Japanese course using sample sentences from anime.",
    slug: "kana",
    category: ""
  },
  {
    id: "2",
    name: "Core 2.3k V3",
    link: "https://anacreondjt.gitlab.io/docs/coredeck/",
    description: "High quality cards for the most common Japanese words.",
    slug: "kana",
    category: ""
  },
  {
    id: "3",
    name: "Kaishi 1.5k",
    link: "https://ankiweb.net/shared/info/1196762551",
    description: "A modern Japanese deck in the spirit of Core 2k with additional useful features.",
    slug: "kana",
    category: ""
  },
]