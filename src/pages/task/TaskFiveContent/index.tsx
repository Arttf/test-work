import { showcaseItems } from './data/showcaseItems';

export function TaskFiveContent() {
  return (
    <section className="rounded-[10px] border border-slate-200 bg-white py-2 shadow-sm">
      <div className="showcase-scrollbar overflow-x-auto overflow-y-hidden pb-5">
        <div className="flex min-w-max">
          {showcaseItems.map((item) => (
            <article
              key={item.id}
              className="w-[292px] shrink-0 border-r border-slate-200 bg-white px-6 pb-10 pt-5"
            >
              <div className="flex h-[230px] items-center justify-center overflow-hidden rounded-sm bg-white">
                <img
                  alt={item.title}
                  className="h-auto w-full object-contain"
                  draggable={false}
                  src={item.imageSrc}
                />
              </div>
              <p className="mt-7 max-w-[230px] text-[18px] leading-[1.38] text-[#3c4452]">
                {item.title}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
