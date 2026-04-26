import { Button } from 'flowbite-react';
import { HiMenuAlt2 } from 'react-icons/hi';

type SidebarToggleProps = {
  isCollapsed: boolean;
  onToggle: () => void;
};

export function SidebarToggle({
  isCollapsed,
  onToggle,
}: SidebarToggleProps) {
  const title = isCollapsed ? 'Развернуть меню' : 'Свернуть меню';

  return (
    <Button
      aria-label={title}
      className="!p-[5px]"
      color="light"
      onClick={onToggle}
      pill
      size="icon"
      title={title}
    >
      <HiMenuAlt2 className="h-5 w-5" />
    </Button>
  );
}
