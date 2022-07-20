import refEquality from '../utils/refEquality';
import { useSyncExternalStoreWithSelector } from './useSyncExternalStoreWithSelector';

export default function useStore(store, selector, equalityFn = refEquality) {
  return useSyncExternalStoreWithSelector(store.subscribe, store.getState, store.getState, selector, equalityFn);
}
