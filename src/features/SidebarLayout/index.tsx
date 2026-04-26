import { Sidebar, SidebarItem, SidebarItemGroup, SidebarItems } from 'flowbite-react';
import {
  forwardRef,
  type AnchorHTMLAttributes,
  type PropsWithChildren,
  useEffect,
  useState,
} from 'react';
import {
  Bs1Circle,
  Bs2Circle,
  Bs3Circle,
  Bs4Circle,
  Bs5Circle,
  Bs6Circle,
  Bs7Circle,
} from 'react-icons/bs';
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

const taskIcons = {
  1: Bs1Circle,
  2: Bs2Circle,
  3: Bs3Circle,
  4: Bs4Circle,
  5: Bs5Circle,
  6: Bs6Circle,
  7: Bs7Circle,
} as const;

const SIDEBAR_STORAGE_KEY = 'sidebar:isCollapsed';

export function SidebarLayout({ children }: PropsWithChildren) {
  const [isCollapsed, setIsCollapsed] = useState(() => {
    if (typeof window === 'undefined') {
      return false;
    }

    return window.localStorage.getItem(SIDEBAR_STORAGE_KEY) === 'true';
  });
  const location = useLocation();

  useEffect(() => {
    window.localStorage.setItem(SIDEBAR_STORAGE_KEY, String(isCollapsed));
  }, [isCollapsed]);

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
                  icon={taskIcons[item.id as keyof typeof taskIcons]}
                >
                  {item.title}
                </SidebarItem>
              ))}
            </SidebarItemGroup>
          </SidebarItems>
        </Sidebar>
      </aside>

      <main className="min-w-0 flex-1 overflow-x-hidden p-4 md:p-6">
        <div className="mx-auto w-full max-w-7xl min-w-0">{children}</div>
      </main>
    </div>
  );
}
