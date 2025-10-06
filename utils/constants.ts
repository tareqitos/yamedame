
export const getCardData = () => {
  return [
    { title: 'Dictionaries', desc: 'Essential dictionaries and reference tools for Japanese learning.', path: 'dictionaries', icon: "" },
    { title: 'Vocabulary', desc: 'Resources to help you build and expand your Japanese vocabulary.', path: 'vocabulary', icon: "📝" },
    { title: 'Media', desc: 'Teaching videos, vlogs, podcasts, gaming and more!', path: 'media', icon: "💾" },
    { title: 'Games', desc: 'Find and play games to enhance to practice the language!', path: 'games', icon: "🎮" },
    { title: 'Software / Applications', desc: 'Useful software and applications to support your studies.', path: 'applications', icon: "💻" },
    { title: 'And more to come', desc: 'Stay tuned for more resources and updates!', path: "", icon: "✨" }
  ];
};

export const getCardByPath = (path: string) => {
  return getCardData().find(card => card.path === path);
};