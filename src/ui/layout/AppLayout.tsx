import type { PropsWithChildren } from 'react';
import { AppSidebar } from '../sidebar/AppSidebar';
import { AppTopbar } from '../topbar/AppTopbar';

export function AppLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex min-h-screen bg-slate-100 text-slate-900">
      <AppSidebar />
      <div className="flex min-h-screen flex-1 flex-col">
        <AppTopbar />
        <main className="flex-1 p-4 md:p-6">
          <div className="mx-auto w-full max-w-7xl">{children}</div>
        </main>
      </div>
    </div>
  );
}
