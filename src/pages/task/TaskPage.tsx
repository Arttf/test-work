import { Alert, Card } from 'flowbite-react';
import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { navigationItems } from '../../route/navigation';
import { TaskOneContent } from './TaskOneContent';
import { TaskThreeContent } from './TaskThreeContent';
import { TaskTwoContent } from './TaskTwoContent';

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
        <TaskOneContent />
      </section>
    );
  }

  if (task.id === 2) {
    return (
      <section className="space-y-6">
        <TaskTwoContent />
      </section>
    );
  }

  if (task.id === 3) {
    return (
      <section className="space-y-6">
        <TaskThreeContent />
      </section>
    );
  }

  return (
    <section className="space-y-6">
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
