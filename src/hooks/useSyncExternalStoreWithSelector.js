export let useSyncExternalStoreWithSelector;

export const initializeUseSyncExternalStoreWithSelector = fn => {
  useSyncExternalStoreWithSelector = fn;
};
