"use client"

import { useSyncExternalStore } from "react";

// Favorites are stored locally as a list of resource ids, nothing leaves the browser
const STORAGE_KEY = "favorites";
const EMPTY: string[] = [];

const listeners = new Set<() => void>();
let cache: string[] | null = null;

const read = (): string[] => {
    try {
        const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]");
        return Array.isArray(parsed) ? parsed.map(String) : EMPTY;
    } catch {
        return EMPTY;
    }
};

const getSnapshot = () => {
    if (cache === null) cache = read();
    return cache;
};

const getServerSnapshot = () => EMPTY;

const emit = () => listeners.forEach((listener) => listener());

const subscribe = (listener: () => void) => {
    listeners.add(listener);

    // Keep other tabs in sync
    const onStorage = (e: StorageEvent) => {
        if (e.key !== STORAGE_KEY) return;
        cache = null;
        emit();
    };
    window.addEventListener("storage", onStorage);

    return () => {
        listeners.delete(listener);
        window.removeEventListener("storage", onStorage);
    };
};

const write = (ids: string[]) => {
    cache = ids;
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
    } catch {
        // Storage unavailable (private mode, quota): keep favorites in memory for this session
    }
    emit();
};

export const toggleFavorite = (id: string | number) => {
    const key = String(id);
    const ids = getSnapshot();
    write(ids.includes(key) ? ids.filter((favorite) => favorite !== key) : [key, ...ids]);
};

// Merges imported ids with the current favorites, returns how many were new
export const addFavorites = (newIds: (string | number)[]) => {
    const ids = getSnapshot();
    const added = [...new Set(newIds.map(String))].filter((id) => !ids.includes(id));
    if (added.length > 0) write([...added, ...ids]);
    return added.length;
};

export const useFavorites = () => {
    const ids = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
    const isFavorite = (id: string | number) => ids.includes(String(id));

    return { ids, isFavorite, toggleFavorite };
};
