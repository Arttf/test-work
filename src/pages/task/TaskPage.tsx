import { Alert, Badge, Card } from 'flowbite-react';
import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { navigationItems } from '../../route/navigation';
import { TaskOneContent } from './TaskOneContent';

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

  if (task.id === 1) {
    return (
      <section className="space-y-6">
        <Badge color="info" size="sm">
          Задание {task.id}
        </Badge>

        <TaskOneContent />
      </section>
    );
  }

  return (
    <section className="space-y-6">
      <Badge color="info" size="sm">
        Задание {task.id}
      </Badge>

      <Card className="border-slate-200 bg-white shadow-sm">
        <div className="space-y-4">
          <h1 className="text-3xl font-semibold text-slate-900">{task.title}</h1>
          <p className="max-w-2xl text-sm leading-6 text-slate-600">
            {task.description}
          </p>
        </div>
      </Card>
    </section>
  );
}
