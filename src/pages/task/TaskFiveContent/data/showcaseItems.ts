import deskSet1 from './img/desk-set-1.png';
import deskSet2 from './img/desk-set-2.png';
import deskSet3 from './img/desk-set-3.png';
import deskSet4 from './img/desk-set-4.png';

export type ShowcaseItem = {
  id: number;
  imageSrc: string;
  title: string;
};

const baseItems: Omit<ShowcaseItem, 'id'>[] = [
  {
    imageSrc: deskSet1,
    title:
      'Набор настольный BESTAR «Amenhotep» из дерева, 8 предметов, двойной лоток, светлая вишня',
  },
  {
    imageSrc: deskSet2,
    title:
      'Набор настольный BESTAR «Charon» из дерева, 7 предметов, двойной лоток, красное дерево',
  },
  {
    imageSrc: deskSet3,
    title:
      'Набор настольный BESTAR «Charon» из дерева, 7 предметов, двойной лоток, орех',
  },
  {
    imageSrc: deskSet4,
    title:
      'Набор настольный BESTAR «Hercules» из дерева, 5 предметов, двойной лоток, красное дерево',
  },
];

// задвоил для скрола
export const showcaseItems: ShowcaseItem[] = [...baseItems, ...baseItems].map(
  (item, index) => ({
    ...item,
    id: index + 1,
  }),
);
