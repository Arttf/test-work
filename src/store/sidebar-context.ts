import { createContext } from 'react';

export type SidebarStoreValue = {
  isCollapsed: boolean;
  setCollapsed: (value: boolean) => void;
  toggleSidebar: () => void;
};

export const SidebarStoreContext = createContext<SidebarStoreValue | null>(null);

export const SIDEBAR_STORAGE_KEY = 'app-sidebar-collapsed';
