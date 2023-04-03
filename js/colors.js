const colorThemes = [
  {
    primary: "#333",
    secondary: "#f4f4f4",
    text: "#fff",
  },
  {
    primary: "#1e90ff",
    secondary: "#f4f4f4",
    text: "#fff",
  },
  {
    primary: "#28a745",
    secondary: "#f4f4f4",
    text: "#fff",
  },
];

let currentTheme = 0;

function changeColorScheme() {
  currentTheme = (currentTheme + 1) % colorThemes.length;
  const theme = colorThemes[currentTheme];
  document.documentElement.style.setProperty("--primary-color", theme.primary);
  document.documentElement.style.setProperty("--secondary-color", theme.secondary);
  document.documentElement.style.setProperty("--text-color", theme.text);
}

document.addEventListener("DOMContentLoaded", changeColorScheme);
