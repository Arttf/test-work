import { type PropsWithChildren, useEffect, useMemo, useState } from 'react';
import { SIDEBAR_STORAGE_KEY, SidebarStoreContext } from './sidebar-context';

function getInitialSidebarState() {
  if (typeof window === 'undefined') {
    return false;
  }

  return window.localStorage.getItem(SIDEBAR_STORAGE_KEY) === 'true';
}

export function SidebarStoreProvider({ children }: PropsWithChildren) {
  const [isCollapsed, setCollapsed] = useState(getInitialSidebarState);

  useEffect(() => {
    window.localStorage.setItem(SIDEBAR_STORAGE_KEY, String(isCollapsed));
  }, [isCollapsed]);

  const value = useMemo(
    () => ({
      isCollapsed,
      setCollapsed,
      toggleSidebar: () => setCollapsed((current) => !current),
    }),
    [isCollapsed],
  );

  return (
    <SidebarStoreContext.Provider value={value}>
      {children}
    </SidebarStoreContext.Provider>
  );
}
