import { Card } from 'flowbite-react';
import { Link } from 'react-router-dom';

type PageCardProps = {
  description: string;
  path: string;
  title: string;
};

export function PageCard({ description, path, title }: PageCardProps) {
  return (
    <Card className="border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="space-y-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">
            Раздел
          </p>
          <h2 className="mt-2 text-xl font-semibold text-slate-900">{title}</h2>
        </div>
        <p className="text-sm leading-6 text-slate-600">{description}</p>
        <Link
          className="inline-flex items-center text-sm font-medium text-teal-700 transition hover:text-teal-900"
          to={path}
        >
          Открыть страницу
        </Link>
      </div>
    </Card>
  );
}
