export type Update = {
    // Publication day (YYYY-MM-DD): resources added since the previous update up to this day are listed under it
    date: string;
    emoji?: string;
    changes?: {
        type: string;
        description: string;
    }[];
    closingRemark?: string;
};
