import { useContext } from 'react';
import { SidebarStoreContext } from './sidebar-context';

export function useSidebarStore() {
  const context = useContext(SidebarStoreContext);

  if (!context) {
    throw new Error('useSidebarStore must be used within SidebarStoreProvider');
  }

  return context;
}
