import type { Update } from "../types";
import u20250401 from "./2025-04-01";
import u20251001 from "./2025-10-01";
import u20260101 from "./2026-01-01";
import u20260507 from "./2026-05-07";
import u20260719 from "./2026-07-19";
import u20261025 from "./2026-10-25";

// Add new updates here, order doesn't matter
export const updates: Update[] = [u20250401, u20251001, u20260101, u20260507, u20261025]
    .sort((a, b) => b.date.localeCompare(a.date));

export const latestUpdate = updates[0];

export const formatUpdateMonth = (date: string, month: "long" | "short" = "long") =>
    new Date(`${date}T00:00:00Z`).toLocaleDateString("en-US", { month, year: "numeric", timeZone: "UTC" });
