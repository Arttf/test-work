import { Button } from 'flowbite-react';
import { HiMenuAlt2 } from 'react-icons/hi';
import { useSidebarStore } from '../../../store/use-sidebar-store';

export function SidebarToggle() {
  const { isCollapsed, toggleSidebar } = useSidebarStore();
  const title = isCollapsed ? 'Развернуть меню' : 'Свернуть меню';

  return (
    <Button
      aria-label={title}
      color="light"
      onClick={toggleSidebar}
      pill
      size="icon"
      title={title}
    >
      <HiMenuAlt2 className="h-5 w-5" />
    </Button>
  );
}
