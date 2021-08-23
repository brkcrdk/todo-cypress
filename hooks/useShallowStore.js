import shallow from 'zustand/shallow';
import { useStore } from 'store';

export default function useShallowStore(selector, equalityFn = shallow) {
  return useStore(selector, equalityFn);
}
