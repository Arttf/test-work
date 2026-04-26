import { appPaths } from './path';

export type NavigationItem = {
  description: string;
  id: number;
  path: string;
  title: string;
};

export const navigationItems: NavigationItem[] = [
  {
    description: 'Страница для первого задания.',
    id: 1,
    path: appPaths.task(1),
    title: 'Задание 1',
  },
  {
    description: 'Страница для второго задания.',
    id: 2,
    path: appPaths.task(2),
    title: 'Задание 2',
  },
  {
    description: 'Страница для третьего задания.',
    id: 3,
    path: appPaths.task(3),
    title: 'Задание 3',
  },
  {
    description: 'Страница для четвертого задания.',
    id: 4,
    path: appPaths.task(4),
    title: 'Задание 4',
  },
  {
    description: 'Страница для пятого задания.',
    id: 5,
    path: appPaths.task(5),
    title: 'Задание 5',
  },
  {
    description: 'Страница для шестого задания.',
    id: 6,
    path: appPaths.task(6),
    title: 'Задание 6',
  },
  {
    description: 'Страница для седьмого задания.',
    id: 7,
    path: appPaths.task(7),
    title: 'Задание 7',
  },
];
