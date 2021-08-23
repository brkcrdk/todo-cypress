import create from 'zustand';
import { persist } from 'zustand/middleware';

import todoStore from './todoStore';

const useStore = create(
  persist(
    (set, get) => ({
      ...todoStore(set, get),
    }),
    {
      name: 'todo-storage',
    }
  )
);

export { useStore };
