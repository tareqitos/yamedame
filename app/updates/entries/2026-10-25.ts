import type { Update } from "../types";

export default {
    date: "2026-10-25",
    emoji: "🌸",
    changes: [
        {
            type: "Update",
            description: "Update the beginners guide to include a list of the first steps needed to learn the basics of the Japanese language.",
        },
        {
            type: "Favorites",
            description: "You can now save resources by clicking the star next to them. Find them all on the new Favorites page, sorted by category. Favorites stay in your browser, nothing is sent anywhere.",
        },
        {
            type: "Import & Export",
            description: "Switching devices? Export your favorites as a JSON file from the Favorites page and import it on the other one.",
        },
        {
            type: "Mobile",
            description: "The menu, home, favorites and \"On this page\" buttons are now stacked as icons in the bottom right corner of the screen.",
        },
        {
            type: "Animations",
            description: "Pages, cards, search and menus now move a little more smoothly. If you've turned on reduced motion on your device, the animations are turned off.",
        },
    ]
} satisfies Update;
