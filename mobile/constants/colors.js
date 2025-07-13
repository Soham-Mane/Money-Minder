const coffeeTheme = {
  primary: "#8B593E",
  primaryLight: "#A66B4F",
  background: "#FFF8F3",
  backgroundGradient: ["#FFF8F3", "#F5EDE4"],
  text: "#4A3428",
  textSecondary: "#6B4C3A",
  border: "#E5D3B7",
  white: "#FFFFFF",
  textLight: "#9A8478",
  expense: "#E74C3C",
  income: "#2ECC71",
  card: "#FFFFFF",
  shadow: "#000000",
  accent: "#D4A574",
  success: "#27AE60",
  overlay: "rgba(0,0,0,0.1)",
};

const forestTheme = {
  primary: "#2E7D32",
  primaryLight: "#4CAF50",
  background: "#E8F5E9",
  backgroundGradient: ["#E8F5E9", "#C8E6C9"],
  text: "#1B5E20",
  textSecondary: "#2E7D32",
  border: "#C8E6C9",
  white: "#FFFFFF",
  textLight: "#66BB6A",
  expense: "#C62828",
  income: "#388E3C",
  card: "#FFFFFF",
  shadow: "#000000",
  accent: "#81C784",
  success: "#2E7D32",
  overlay: "rgba(0,0,0,0.1)",
};

const purpleTheme = {
  primary: "#6A1B9A",
  primaryLight: "#8E24AA",
  background: "#F3E5F5",
  backgroundGradient: ["#F3E5F5", "#E1BEE7"],
  text: "#4A148C",
  textSecondary: "#6A1B9A",
  border: "#D1C4E9",
  white: "#FFFFFF",
  textLight: "#BA68C8",
  expense: "#D32F2F",
  income: "#388E3C",
  card: "#FFFFFF",
  shadow: "#000000",
  accent: "#CE93D8",
  success: "#7B1FA2",
  overlay: "rgba(0,0,0,0.1)",
};

const oceanTheme = {
  primary: "#0277BD",
  primaryLight: "#0288D1",
  background: "#E1F5FE",
  backgroundGradient: ["#E1F5FE", "#B3E5FC"],
  text: "#01579B",
  textSecondary: "#0277BD",
  border: "#B3E5FC",
  white: "#FFFFFF",
  textLight: "#4FC3F7",
  expense: "#EF5350",
  income: "#26A69A",
  card: "#FFFFFF",
  shadow: "#000000",
  accent: "#81D4FA",
  success: "#0277BD",
  overlay: "rgba(0,0,0,0.1)",
};

export const THEMES = {
  coffee: coffeeTheme,
  forest: forestTheme,
  purple: purpleTheme,
  ocean: oceanTheme,
};

// 👇 change this to switch theme
export const COLORS = THEMES.coffee;