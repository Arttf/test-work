import { Sidebar, SidebarItem, SidebarItemGroup, SidebarItems } from 'flowbite-react';
import {
  forwardRef,
  type AnchorHTMLAttributes,
  type PropsWithChildren,
  useState,
} from 'react';
import { HiOutlineClipboardList } from 'react-icons/hi';
import { NavLink, useLocation } from 'react-router-dom';
import { navigationItems } from '../../route/navigation';
import { SidebarToggle } from './SidebarToggle';

type SidebarLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

const SidebarLink = forwardRef<HTMLAnchorElement, SidebarLinkProps>(
  ({ href, ...props }, ref) => <NavLink ref={ref} to={href} {...props} />,
);

SidebarLink.displayName = 'SidebarLink';

export function SidebarLayout({ children }: PropsWithChildren) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  return (
    <div className="flex min-h-screen bg-slate-100 text-slate-900">
      <aside className="sticky top-0 z-20 h-screen shrink-0 overflow-visible border-r border-slate-200 bg-white transition-[width] duration-300 ease-in-out">
        <Sidebar
          aria-label="Основная навигация"
          className="h-full overflow-visible transition-[width] duration-300 ease-in-out"
          collapsed={isCollapsed}
          theme={{
            root: {
              base: 'h-full',
              collapsed: {
                off: 'w-64',
                on: 'w-16',
              },
              inner:
                'h-full overflow-y-auto overflow-x-visible rounded bg-gray-50 px-3 py-4',
            },
          }}
        >
          <SidebarItems>
            <div className="mb-4 flex justify-end">
              <SidebarToggle
                isCollapsed={isCollapsed}
                onToggle={() => setIsCollapsed((current) => !current)}
              />
            </div>
            <SidebarItemGroup>
              {navigationItems.map((item) => (
                <SidebarItem
                  key={item.path}
                  active={location.pathname === item.path}
                  as={SidebarLink}
                  href={item.path}
                  icon={HiOutlineClipboardList}
                >
                  {item.title}
                </SidebarItem>
              ))}
            </SidebarItemGroup>
          </SidebarItems>
        </Sidebar>
      </aside>

      <main className="flex-1 p-4 md:p-6">
        <div className="mx-auto w-full max-w-7xl">{children}</div>
      </main>
    </div>
  );
}
