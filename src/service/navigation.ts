import type { FC, SVGProps } from 'react';
import {
  HiChartPie,
  HiClipboardList,
  HiCog,
  HiCollection,
  HiPresentationChartLine,
  HiUsers,
} from 'react-icons/hi';
import { appPaths } from '../route/path';

export type NavigationItem = {
  description: string;
  icon: FC<SVGProps<SVGSVGElement>>;
  id: number;
  path: string;
  title: string;
};

export const navigationItems: NavigationItem[] = [
  {
    description: 'Карточка раздела и базовый маршрут для первого задания.',
    icon: HiChartPie,
    id: 1,
    path: appPaths.task(1),
    title: 'Задание 1',
  },
  {
    description: 'Готовая страница для дальнейшего наполнения бизнес-логикой.',
    icon: HiClipboardList,
    id: 2,
    path: appPaths.task(2),
    title: 'Задание 2',
  },
  {
    description: 'Единый шаблон страницы вместо набора разрозненных файлов.',
    icon: HiUsers,
    id: 3,
    path: appPaths.task(3),
    title: 'Задание 3',
  },
  {
    description: 'Навигация и лэйаут собираются из общих конфигураций.',
    icon: HiCollection,
    id: 4,
    path: appPaths.task(4),
    title: 'Задание 4',
  },
  {
    description: 'Sidebar управляется отдельным store и сворачивается по кнопке.',
    icon: HiCog,
    id: 5,
    path: appPaths.task(5),
    title: 'Задание 5',
  },
  {
    description: 'Flowbite-компоненты используются как базовый UI-слой проекта.',
    icon: HiPresentationChartLine,
    id: 6,
    path: appPaths.task(6),
    title: 'Задание 6',
  },
];
