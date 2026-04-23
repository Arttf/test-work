import { PageCard } from '../../components/page-card/PageCard';
import { navigationItems } from '../../service/navigation';

export function HomePage() {
  return (
    <section className="space-y-8">
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal-600">
          Dashboard
        </p>
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold text-slate-900">
            Проект приведен к аккуратной структуре
          </h1>
          <p className="max-w-3xl text-sm leading-6 text-slate-600">
            Навигация вынесена в отдельный сервис, роуты изолированы, sidebar
            построен на Flowbite и умеет сворачиваться без самописного списка.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {navigationItems.map((item) => (
          <PageCard
            key={item.path}
            description={item.description}
            path={item.path}
            title={item.title}
          />
        ))}
      </div>
    </section>
  );
}
