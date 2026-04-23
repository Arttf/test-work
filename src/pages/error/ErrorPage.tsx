import { Alert, Button, Card } from 'flowbite-react';
import { isRouteErrorResponse, Link, useRouteError } from 'react-router-dom';

function getErrorMessage(error: unknown) {
  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return {
        description: 'Страница не найдена или маршрут указан неверно.',
        title: '404 Not Found',
      };
    }

    return {
      description: error.statusText || 'Во время навигации произошла ошибка.',
      title: `${error.status} ${error.statusText}`,
    };
  }

  if (error instanceof Error) {
    return {
      description: error.message,
      title: 'Application Error',
    };
  }

  return {
    description: 'Произошла непредвиденная ошибка приложения.',
    title: 'Unexpected Error',
  };
}

export function ErrorPage() {
  const error = useRouteError();
  const message = getErrorMessage(error);

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 p-6">
      <Card className="w-full max-w-2xl border-slate-200 bg-white shadow-sm">
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-600">
              Error state
            </p>
            <h1 className="text-3xl font-semibold text-slate-900">
              {message.title}
            </h1>
            <p className="text-sm leading-6 text-slate-600">
              {message.description}
            </p>
          </div>

          <Alert color="failure">
            React Router больше не показывает системный экран ошибки. Для
            неизвестных путей и runtime-ошибок используется собственный UI.
          </Alert>

          <div className="flex flex-wrap gap-3">
            <Button as={Link} color="dark" to="/">
              На главную
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
