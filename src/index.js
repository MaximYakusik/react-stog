import { useSyncExternalStoreWithSelector } from 'use-sync-external-store/shim/with-selector';
import { initializeUseSyncExternalStoreWithSelector } from './hooks/useSyncExternalStoreWithSelector';

initializeUseSyncExternalStoreWithSelector(useSyncExternalStoreWithSelector);

export { default as useStore } from './hooks/useStore';
