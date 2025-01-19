const get_theme_from_storage = window.localStorage.getItem("theme");
let theme = !get_theme_from_storage ? "dark" : get_theme_from_storage;

function getTheme() {
    return theme;
}
 
function toggleTheme() {
    theme = theme == "dark" ? "light" : "dark";
    const html = document.documentElement;
    html.dataset.theme = theme; // Switch theme in <html>
    window.localStorage.setItem("theme", theme);
}

const html = document.documentElement;
html.dataset.theme = theme; // Apply initial theme

export {getTheme, toggleTheme} 