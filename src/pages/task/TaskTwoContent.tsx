import { useState } from 'react';
import { CheckboxYellow } from '../../ui/input/CheckboxYellow';

export function TaskTwoContent() {
  const [isAccepted, setIsAccepted] = useState(true);
  const submitLabel = 'Отправить все мои данные';

  return (
    <section className="min-h-[640px] rounded-[28px] bg-[radial-gradient(circle_at_top,#f7f7fb_0%,#ececf3_45%,#e6e6ef_100%)] px-6 py-10 text-slate-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] md:px-10">
      <div className="mb-6 flex items-start justify-between gap-4">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-800">
          Заполните поля
        </h1>
        <p className="pt-2 text-2xl font-semibold text-slate-800">ну пожалуйста</p>
      </div>

      <form className="mx-auto rounded-sm border border-slate-300 bg-white">
        <section className="px-8 pb-6 pt-5">
          <h2 className="mb-5 text-center text-[2rem] font-medium text-slate-800">
            Основное
          </h2>

          <div className="space-y-5">
            <div className="grid gap-3 lg:grid-cols-[2fr_3fr_1fr] lg:items-center">
              <label className="text-[1.45rem] text-slate-800 lg:justify-self-end lg:text-right">
                Имя
              </label>
              <input
                className="h-11 w-full border border-slate-300 px-3 text-[1.3rem] text-slate-700 outline-none placeholder:text-slate-500 focus:border-slate-400"
                defaultValue="по паспорту"
                type="text"
              />
              <div className="hidden lg:block" />
            </div>

            <div className="grid gap-3 lg:grid-cols-[2fr_3fr_1fr] lg:items-center">
              <label className="text-[1.25rem] text-slate-800 lg:justify-self-end lg:text-right">
                Цвет вашего настроения
              </label>
              <input
                className="h-9 w-[52px] border border-slate-300 bg-white p-1"
                defaultValue="#1d11ff"
                type="color"
              />
              <div className="hidden lg:block" />
            </div>
          </div>
        </section>

        <section className="border-y border-yellow-200 bg-[#fff3b8] px-8 py-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
          <h2 className="mb-5 text-center text-[2rem] font-medium text-slate-800">
            Дополнительное
          </h2>

          <div className="grid gap-3 lg:grid-cols-[2fr_3fr_1fr]">
            <label className="text-[1.3rem] text-slate-800 lg:justify-self-end lg:pt-2 lg:text-right">
              Комментарий
            </label>
            <textarea
              className="min-h-[86px] min-w-0 w-full max-w-full max-h-[300px] resize-y border border-slate-300 px-3 py-2 text-[1.15rem] leading-7 text-slate-700 outline-none placeholder:text-slate-500 focus:border-slate-400"
              defaultValue={'Напишите хоть что-нибудь.\nЕсли хотите, конечно.'}
            />
            <div className="hidden lg:block" />
          </div>
        </section>

        <section className="space-y-5 px-8 pb-8 pt-6">
          <div className="grid gap-3 lg:grid-cols-[2fr_3fr_1fr] lg:items-start">
            <div className="hidden lg:block" />
            <label className="flex items-center gap-3 text-[1.25rem] text-slate-800">
              <input
                className="h-4 w-4 border-slate-300 text-slate-700 focus:ring-slate-400"
                name="simple-radio"
                type="radio"
              />
              <span>Ну а тут просто полежит радиобатон</span>
            </label>
            <div className="hidden lg:block" />
          </div>

          <div className="grid gap-3 lg:grid-cols-[2fr_3fr_1fr] lg:items-start">
            <div className="hidden lg:block" />
            <label className="flex cursor-pointer items-start gap-3 text-[1.25rem] leading-8 text-slate-800">
              <CheckboxYellow checked={isAccepted} onChange={setIsAccepted} />
              <span>
                Соглашаюсь на всё, что бы вы не придумали и осознаю, что это может
                означать{' '}
                <a className="text-indigo-700 underline" href="#details">
                  что угодно
                </a>
              </span>
            </label>
            <div className="hidden lg:block" />
          </div>

          <div className="grid gap-3 lg:grid-cols-[2fr_3fr_1fr] lg:items-start">
            <div className="hidden lg:block" />
            <button
              className="inline-flex h-12 w-full min-w-0 max-w-full items-center justify-center overflow-hidden rounded bg-[linear-gradient(180deg,#8f79ff_0%,#7455f4_58%,#5839c9_100%)] px-7 text-[1.4rem] font-bold text-white shadow-[0_10px_22px_rgba(40,26,108,0.3)] transition hover:translate-y-[1px] hover:shadow-[0_8px_18px_rgba(40,26,108,0.28)]"
              title={submitLabel}
              type="button"
            >
              <span className="block min-w-0 w-full truncate">{submitLabel}</span>
            </button>
            <div className="hidden lg:block" />
          </div>
        </section>
      </form>
    </section>
  );
}
