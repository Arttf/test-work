import { AppRouter } from '../route/router';
import { SidebarStoreProvider } from '../store/sidebar-store';

export function App() {
  return (
    <SidebarStoreProvider>
      <AppRouter />
    </SidebarStoreProvider>
  );
}
