import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("Teachmate-theme") || "forest",
  setTheme: (theme) => {
    localStorage.setItem("Teachmate-theme", theme);
    set({ theme });
  },
}));
