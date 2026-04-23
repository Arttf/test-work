import { Button, Card } from 'flowbite-react';
import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center">
      <Card className="w-full max-w-2xl border-slate-200 bg-white text-center shadow-sm">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-600">
            404
          </p>
          <h1 className="text-3xl font-semibold text-slate-900">
            Такой страницы нет
          </h1>
          <p className="text-sm leading-6 text-slate-600">
            Проверь адрес или вернись на главную страницу приложения.
          </p>
          <div className="flex justify-center">
            <Button as={Link} color="dark" to="/">
              Вернуться на главную
            </Button>
          </div>
        </div>
      </Card>
    </section>
  );
}
