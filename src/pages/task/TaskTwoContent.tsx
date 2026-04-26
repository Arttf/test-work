export function TaskTwoContent() {
  return (
    <section className="min-h-[640px] rounded-[28px] bg-[radial-gradient(circle_at_top,#f7f7fb_0%,#ececf3_45%,#e6e6ef_100%)] px-6 py-10 text-slate-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] md:px-10">
      <div className="mb-6 flex items-start justify-between gap-4">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-800">
          Заполните поля
        </h1>
        <p className="pt-2 text-2xl font-semibold text-slate-800">
          ну пожалуйста
        </p>
      </div>

      <form className="mx-auto max-w-[760px] rounded-sm border border-slate-300 bg-white shadow-[0_8px_0_rgba(15,23,42,0.08),0_20px_35px_rgba(15,23,42,0.08)]">
        <section className="px-8 pb-6 pt-5">
          <h2 className="mb-5 text-center text-[2rem] font-medium text-slate-800">
            Основное
          </h2>

          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <label className="justify-self-end text-right text-[1.45rem] text-slate-800">
                Имя
              </label>
              <input
                className="h-11 border border-slate-300 px-3 text-[1.3rem] text-slate-700 outline-none placeholder:text-slate-500 focus:border-slate-400"
                defaultValue="по паспорту"
                type="text"
              />
            </div>

            <div className="flex items-center gap-3 ">
              <label className="justify-self-end text-right text-[1.25rem] text-slate-800">
                Цвет вашего настроения
              </label>
              <input
                className="h-9 w-[52px] border border-slate-300 bg-white p-1"
                defaultValue="#1d11ff"
                type="color"
              />
            </div>
          </div>
        </section>

        <section className="border-y border-yellow-200 bg-[#fff3b8] px-8 py-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
          <h2 className="mb-5 text-center text-[2rem] font-medium text-slate-800">
            Дополнительное
          </h2>

          <div className="flex gap-3">
            <label className="justify-self-end pt-2 text-right text-[1.3rem] text-slate-800">
              Комментарий
            </label>
            <textarea
              className="min-h-[86px] resize-none border border-slate-300 px-3 py-2 text-[1.15rem] leading-7 text-slate-700 outline-none placeholder:text-slate-500 focus:border-slate-400"
              defaultValue={'Напишите хоть что-нибудь.\nЕсли хотите, конечно.'}
            />
          </div>
        </section>

        <section className="space-y-5 px-8 pb-8 pt-6">
          <label className="flex items-center gap-3 text-[1.25rem] text-slate-800">
            <input
              className="h-4 w-4 border-slate-300 text-slate-700 focus:ring-slate-400"
              name="simple-radio"
              type="radio"
            />
            <span>Ну а тут просто полежит радиобатон</span>
          </label>

          <label className="flex items-start gap-3 text-[1.25rem] leading-8 text-slate-800">
            <input
              className="mt-2 h-4 w-4 rounded border-yellow-300 text-yellow-400 focus:ring-yellow-300"
              defaultChecked
              type="checkbox"
            />
            <span className="max-w-[470px]">
              Соглашаюсь на всё, что бы вы не придумали и осознаю, что это может
              означать{' '}
              <a className="text-indigo-700 underline" href="#details">
                что угодно
              </a>
            </span>
          </label>

          <button
            className="inline-flex h-14 items-center rounded bg-[linear-gradient(180deg,#8c72ff_0%,#6c4dff_100%)] px-7 text-[1.2rem] font-extrabold text-white shadow-[0_6px_0_rgba(74,48,200,0.45),0_10px_20px_rgba(93,63,211,0.35)] transition hover:translate-y-[1px] hover:shadow-[0_5px_0_rgba(74,48,200,0.45),0_8px_16px_rgba(93,63,211,0.35)]"
            type="button"
          >
            Отправить все мои данные
          </button>
        </section>
      </form>
    </section>
  );
}
