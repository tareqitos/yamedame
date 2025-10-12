import { BookOpenTextIcon, GameControllerIcon, DesktopIcon, TranslateIcon, VideoCameraIcon, SparkleIcon, FlowerTulipIcon, DeviceMobileIcon, BrowserIcon, CardsThreeIcon, KanbanIcon, BooksIcon, ToolboxIcon, BowlSteamIcon, GlobeHemisphereEastIcon, GrainsIcon, TelevisionIcon, JoystickIcon, CassetteTapeIcon, YoutubeLogoIcon, SpotifyLogoIcon, BookIcon } from "@phosphor-icons/react/dist/ssr";

// Using Phosphor Icons
export const Icons = [
  { path: 'dictionaries', icon: BooksIcon, iconColor: "#23AE5B" },
  { path: 'vocabulary', icon: TranslateIcon, iconColor: "#426BFE" },
  { path: 'grammar', icon: BookOpenTextIcon, iconColor: "#bdc3c7" },
  { path: 'reading', icon: BookIcon, iconColor: "#67cdd1" },
  { path: 'media', icon: VideoCameraIcon, iconColor: "#D084D6" },
  { path: 'games', icon: GameControllerIcon, iconColor: "#e67e22" },
  { path: 'applications', icon: DesktopIcon, iconColor: "#de6878" },
  { path: 'miscellaneous', icon: BowlSteamIcon, iconColor: "#67cdd1" },
  { path: '', icon: SparkleIcon, iconColor: "#fcbc32" },
]

export const IconsCategory = [
  { category: 'dictionaries', icon: BooksIcon, iconColor: "#23AE5B" },
  { category: 'dictionaries-apps', icon: BooksIcon, iconColor: "#de6878" },
  { category: 'vocabulary-kanji', icon: TranslateIcon, iconColor: "#426BFE" },
  { category: 'grammar', icon: BookOpenTextIcon, iconColor: "#bdc3c7" },
  { category: 'reading', icon: BookIcon, iconColor: "#67cdd1" },
  { category: 'kana', icon: FlowerTulipIcon, iconColor: "#d6408bff" },
  { category: 'mobile', icon: DeviceMobileIcon, iconColor: "#e67e22" },
  { category: 'web', icon: BrowserIcon, iconColor: "#e67e22" },
  { category: 'flashcards', icon: CardsThreeIcon, iconColor: "#de6878" },
  { category: 'grammar-kana', icon: BookOpenTextIcon, iconColor: "#de6878" },
  { category: 'tools', icon: ToolboxIcon, iconColor: "#de6878" },
  { category: 'miscellaneous', icon: BowlSteamIcon, iconColor: "#67cdd1" },
  { category: 'language-learning', icon: GlobeHemisphereEastIcon, iconColor: "#D084D6" },
  { category: 'culture', icon: GrainsIcon, iconColor: "#D084D6" },
  { category: 'entertainment', icon: TelevisionIcon, iconColor: "#D084D6" },
  { category: 'podcast', icon: CassetteTapeIcon, iconColor: "#D084D6" },
  { category: 'gaming', icon: JoystickIcon, iconColor: "#D084D6" },

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
    { title: 'Games', desc: 'Find and play games to enhance to practice the language!', path: 'games', icon: "🎮" },
    { title: 'Software / Applications', desc: 'Useful software and applications to support your studies.', path: 'applications', icon: "💻" },
    { title: 'Miscellaneous', desc: 'Various helpful resources and tools that don\'t fit into other categories.', path: 'miscellaneous', icon: "🐱" },
    { title: 'And more to come', desc: 'Stay tuned for more resources and updates!', path: "", icon: "✨" }
  ];
};

export const getCardByPath = (path: string) => {
  return getCardData().find(card => card.path === path);
};