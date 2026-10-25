import type { Update } from "../types";

export default {
    date: "2025-10-01",
    changes: [
        {
            type: "Visual & Performance",
            description: "I've rebuilt the site from the ground up with a fresh design and a better codebase. Enjoy a smoother and more pleasant browsing experience.",
        },
        {
            type: "Smarter Categories",
            description: "Finding what you need is now easier. I've tried to better sort all existing categories and added several new ones to improve resource discovery.",
        },
        {
            type: 'New "Beginner Essentials" Page',
            description: "A dedicated page has been added to guide newcomers. It's the perfect starting point for anyone looking to get acquainted with the essentials.",
        },
        {
            type: '"Surprise me" Button',
            description: "A simple randomizer button to discover a new site with a single click. Yay!",
        },
    ],
    closingRemark: "Thank you and happy learning!",
} satisfies Update;
