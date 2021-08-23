import create from 'zustand';
import todoStore from './todoStore';

const useStore = create((set, get) => ({
  ...todoStore(set, get),
}));

export { useStore };
