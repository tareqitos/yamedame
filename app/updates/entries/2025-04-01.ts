import type { Update } from "../types";

export default {
    date: "2025-04-01",
    changes: [
        {
            type: "New Category",
            description: "Introduced a new game category page.",
        },
        {
            type: "Introduced a new section",
            description: "Created a dedicated kana section on the Resources page.",
        },
    ],
    closingRemark: "Stay tuned for more updates and happy learning!",
} satisfies Update;
