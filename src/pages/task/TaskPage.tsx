import { Alert, Badge, Card } from 'flowbite-react';
import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { navigationItems } from '../../service/navigation';

export function TaskPage() {
  const { taskId } = useParams();

  const task = useMemo(
    () => navigationItems.find((item) => item.id === Number(taskId)),
    [taskId],
  );

  if (!task) {
    return (
      <Alert color="failure">
        Страница задания не найдена. Проверь маршрут в адресной строке.
      </Alert>
    );
  }

  return (
    <section className="space-y-6">
      <div className="flex flex-wrap items-center gap-3">
        <Badge color="info" size="sm">
          Задание {task.id}
        </Badge>
        <span className="text-sm text-slate-500">Маршрут: {task.path}</span>
      </div>

      <Card className="border-slate-200 bg-white shadow-sm">
        <div className="space-y-4">
          <div>
            <h1 className="text-3xl font-semibold text-slate-900">
              {task.title}
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
              {task.description}
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Layer
              </p>
              <p className="mt-2 text-base font-medium text-slate-900">pages</p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                UI
              </p>
              <p className="mt-2 text-base font-medium text-slate-900">
                Flowbite components
              </p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Status
              </p>
              <p className="mt-2 text-base font-medium text-slate-900">
                Готово к наполнению логикой
              </p>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
}
