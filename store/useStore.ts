'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface User {
  name: string;
  username: string;
  email: string;
  mobile: string;
}

interface AppState {
  user: User | null;
  categories: string[];

  setUser: (user: User) => void;
  setCategories: (categories: string[]) => void;
}

export const useStore = create<AppState>()(
  persist(
    (set) => ({
      user: null,
      categories: [],

      setUser: (user) => set({ user }),

      setCategories: (categories) =>
        set({
          categories,
        }),
    }),
    {
      name: 'super-app-storage',
    }
  )
);