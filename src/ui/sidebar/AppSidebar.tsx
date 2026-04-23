import { Sidebar, SidebarItem, SidebarItemGroup, SidebarItems } from 'flowbite-react';
import { forwardRef, type AnchorHTMLAttributes } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { SidebarToggle } from '../../features/sidebar-toggle/ui/SidebarToggle';
import { navigationItems } from '../../service/navigation';
import { useSidebarStore } from '../../store/use-sidebar-store';

type SidebarLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

const SidebarLink = forwardRef<HTMLAnchorElement, SidebarLinkProps>(
  ({ href, ...props }, ref) => <NavLink ref={ref} to={href} {...props} />,
);

SidebarLink.displayName = 'SidebarLink';

export function AppSidebar() {
  const location = useLocation();
  const { isCollapsed } = useSidebarStore();

  return (
    <aside className="sticky top-0 h-screen shrink-0 overflow-hidden border-r border-slate-200 bg-white transition-[width] duration-300 ease-in-out">
      <Sidebar
        aria-label="Основная навигация"
        className="h-full overflow-hidden transition-[width] duration-300 ease-in-out"
        collapsed={isCollapsed}
      >
        <SidebarItems>
          <div className="mb-4 flex justify-end">
            <SidebarToggle />
          </div>
          <SidebarItemGroup>
            {navigationItems.map((item) => (
              <SidebarItem
                key={item.path}
                active={location.pathname === item.path}
                as={SidebarLink}
                href={item.path}
                icon={item.icon}
              >
                {item.title}
              </SidebarItem>
            ))}
          </SidebarItemGroup>
        </SidebarItems>
      </Sidebar>
    </aside>
  );
}
