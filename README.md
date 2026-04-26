# Тестовое задание

Проект выполнен на `React + TypeScript + Vite`.

Используется:
- `react-router-dom` для маршрутов
- `flowbite-react` для sidebar и части базового UI
- `tailwindcss` для прикладной верстки
- `scss modules` для изолированных компонентов
- `storybook` для изолированного просмотра UI-компонентов
- `vitest` + `testing-library` для тестов компонентов

## Запуск

```bash
npm install
npm run dev
```

Проверка проекта:

```bash
npm run build
npm run lint
```

## Storybook

Storybook подключен для всех компонентов из `src/ui`.

Запуск:

```bash
npm run storybook
```

Сборка статической версии:

```bash
npm run build-storybook
```

Что используется в проекте:
- stories лежат рядом с компонентами
- можно отдельно смотреть состояния кнопок, toggle, checkbox и других UI-элементов
- удобно проверять внешний вид компонентов без перехода на страницы заданий

## Vitest

Vitest используется для unit- и interaction-тестов UI-компонентов.

Запуск тестов:

```bash
npm run test
```

Режим наблюдения:

```bash
npm run test:watch
```

Что используется в проекте:
- `vitest`
- `@testing-library/react`
- `@testing-library/user-event`
- `jsdom`

Тесты сейчас добавлены для:
- `BlueGlossButton`
- `RedToggle`

## Структура

Основные папки:
- `src/route` — маршруты и конфиг навигации
- `src/features/SidebarLayout` — layout и левое меню
- `src/pages/task` — страницы заданий
- `src/ui/buttons` — кнопки
- `src/ui/input` — input-компоненты

## Выполненные задания

### Задание 1
Сверстана страница с большим количеством HTML-элементов.

Что сделано:
- показаны разные текстовые и структурные теги
- добавлен `TagLabel`, который подписывает используемые элементы

### Задание 2
Сверстана форма по макету.

Что сделано:
- блоки `Основное` и `Дополнительное`
- текстовые поля, `textarea`, `radio`, кастомный `checkbox`
- кнопка отправки с градиентом
- адаптация ширины элементов внутри формы

Кастомные элементы:
- `src/ui/input/CheckboxYellow`

### Задание 3
Сделан набор кнопок в разных состояниях.

Что сделано:
- выделена базовая кнопка
- отдельные типы кнопок разнесены по папкам
- цвета вынесены в `scss`
- есть состояния `default / hover / active / disabled`

### Задание 4
Сделана схема на `React Flow`.

Что сделано:
- кастомная нода вынесена отдельно
- схема собрана через массивы `nodes` и `edges`
- sidebar и страница не зависят от ручного `svg`

Файлы:
- `src/pages/task/TaskFourContent/index.tsx`
- `src/pages/task/TaskFourContent/PersonNode.tsx`

### Задание 5
Сделана горизонтальная витрина с нижней полосой прокрутки.

Что сделано:
- карточки товаров прокручиваются по горизонтали
- подготовлены изображения одинакового размера
- данные вынесены отдельно

Файлы:
- `src/pages/task/TaskFiveContent/index.tsx`
- `src/pages/task/TaskFiveContent/data/showcaseItems.ts`
- `src/pages/task/TaskFiveContent/data/img`

### Задание 6
Сделана промо-страница по мотивам исходного `index.html`.

Что сделано:
- полноэкранный фон
- центральный hero-блок с `Pineapplepen`
- нижний слоган
- сжат тяжелый `bmp` и подключен `jpg`
- добавлена задержка появления фона

Файлы:
- `src/pages/task/TaskSixContent/index.tsx`
- `src/pages/task/TaskSixContent/data/index.html`

### Задание 7
Добавлены отдельные UI-элементы.

Что сделано:
- глянцевая синяя кнопка
- кастомный toggle-switch
- анимация движения и переворота шарика
- изолированные scoped-стили через `scss modules`

Файлы:
- `src/ui/buttons/BlueGlossButton`
- `src/ui/input/RedToggle`

## Дополнительно

В проекте также сделано:
- сохранение состояния свернутого sidebar в `localStorage`
- пользовательские страницы ошибок и `404`
- архитектура проекта
- stories рядом с UI-компонентами
- тесты для интерактивных UI-элементов
