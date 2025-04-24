// src/store/useThemeStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ThemeState {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      isDarkMode: false,
      toggleTheme: () =>
        set((state) => ({ isDarkMode: !state.isDarkMode })),
    }),
    {
      name: 'theme-storage', // localStorage key
    }
  )
);

export default useThemeStore;
