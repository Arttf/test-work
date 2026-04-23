import { Avatar } from 'flowbite-react';

export function AppTopbar() {
  return (
    <header className="border-b border-slate-200 bg-white/80 px-4 py-3 backdrop-blur md:px-6">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4">
        <div className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            OfficeMag Test
          </p>
          <h1 className="text-lg font-semibold text-slate-900">
            FSD-структура и единая навигация
          </h1>
        </div>

        <Avatar
          alt="Project avatar"
          className="shrink-0"
          placeholderInitials="OM"
          rounded
        />
      </div>
    </header>
  );
}
