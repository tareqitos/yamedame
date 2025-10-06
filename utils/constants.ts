import { BookOpenTextIcon, GameControllerIcon, DesktopIcon, TranslateIcon, VideoCameraIcon, SparkleIcon, FlowerTulipIcon, DeviceMobileIcon, BrowserIcon, CardsThreeIcon, KanbanIcon, BooksIcon, ToolboxIcon, BowlSteamIcon } from "@phosphor-icons/react/dist/ssr";

// Using Phosphor Icons
export const Icons = [
  { path: 'dictionaries', icon: BooksIcon, iconColor: "#23AE5B" },
  { path: 'vocabulary', icon: TranslateIcon, iconColor: "#426BFE" },
  { path: 'grammar', icon: BookOpenTextIcon, iconColor: "#bdc3c7" },
  { path: 'media', icon: VideoCameraIcon, iconColor: "#D084D6" },
  { path: 'games', icon: GameControllerIcon, iconColor: "#E09E3B" },
  { path: 'applications', icon: DesktopIcon, iconColor: "#e5475c" },
  { path: 'miscellaneous', icon: BowlSteamIcon, iconColor: "#67cdd1" },
  { path: '', icon: SparkleIcon, iconColor: "#fcbc32" },
]

export const IconsCategory = [
  { category: 'dictionaries', icon: BooksIcon, iconColor: "#23AE5B" },
  { category: 'vocabulary', icon: TranslateIcon, iconColor: "#426BFE" },
  { category: 'grammar', icon: BookOpenTextIcon, iconColor: "#bdc3c7" },
  { category: 'kana', icon: FlowerTulipIcon, iconColor: "#d6408bff" },
  { category: 'mobile', icon: DeviceMobileIcon, iconColor: "#f1c40f" },
  { category: 'web', icon: BrowserIcon, iconColor: "#e67e22" },
  { category: 'flashcards', icon: CardsThreeIcon, iconColor: "#a0c4ff" },
  { category: 'grammar-kana', icon: BookOpenTextIcon, iconColor: "#bdc3c7" },
  { category: 'tools', icon: ToolboxIcon, iconColor: "#e5475c" },
  { category: 'miscellaneous', icon: BowlSteamIcon, iconColor: "#67cdd1" },

]

export const getCardData = () => {
  return [
    { title: 'Dictionaries', desc: 'Essential dictionaries and reference tools for Japanese learning.', path: 'dictionaries', icon: "📚" },
    { title: 'Vocabulary', desc: 'Resources to help you build and expand your Japanese vocabulary.', path: 'vocabulary', icon: "📝" },
    { title: 'Grammar', desc: 'Master Japanese grammar rules, patterns, and sentence structures.', path: 'grammar', icon: "📖" },
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