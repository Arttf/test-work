function TagLabel({ name }: { name: string }) {
  return (
    <span className="mr-2 inline-block rounded bg-slate-900 px-2 py-0.5 font-mono text-xs font-semibold text-white">
      {`<${name}>`}
    </span>
  );
}

export function TaskOneContent() {
  return (
    <article className="space-y-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div>
        <TagLabel name="article" />
      </div>

      <header className="space-y-4 border-b border-slate-200 pb-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-600">
          <TagLabel name="p" />
          Типографика
        </p>
        <div className="space-y-3">
          <div>
            <TagLabel name="div" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900">
            <TagLabel name="h1" />
            Город просыпается раньше будильников
          </h1>
          <p className="max-w-3xl text-base leading-7 text-slate-600">
            <TagLabel name="p" />
            Это демонстрационная статья для задания по верстке текста. Здесь
            намеренно собрано как можно больше разных HTML-элементов, чтобы
            страница выглядела не как заглушка, а как полноценный контентный
            макет.
          </p>
        </div>
      </header>

      <section className="space-y-4">
        <div>
          <TagLabel name="section" />
        </div>
        <h2 className="text-2xl font-semibold text-slate-900">
          <TagLabel name="h2" />
          Короткое вступление
        </h2>
        <p className="leading-7 text-slate-700">
          <TagLabel name="p" />
          Ранним утром улицы кажутся особенно честными: витрины еще не спорят за
          внимание, трамваи звучат чуть тише, а редкие прохожие двигаются так,
          будто у каждого есть собственный маршрут сквозь туман. В такие часы
          легко заметить детали, которые днем теряются в шуме. Например,
          <mark className="mx-1 rounded bg-amber-100 px-1 text-amber-900">
            <TagLabel name="mark" />
            первые лучи солнца на мокрой мостовой
          </mark>
          или запах кофе у маленькой пекарни на углу.
        </p>
        <p className="leading-7 text-slate-700">
          <TagLabel name="p" />
          Иногда одно предложение требует акцента:
          <strong className="mx-1">
            <TagLabel name="strong" />
            важно не только то, что мы читаем, но и то, как это подано
          </strong>
          . Поэтому в хорошей текстовой верстке работают и ритм отступов, и
          иерархия заголовков, и мелкие встроенные элементы вроде
          <em className="mx-1">
            <TagLabel name="em" />
            курсива
          </em>
          ,
          <code className="mx-1 rounded bg-slate-100 px-1.5 py-0.5 text-sm text-slate-800">
            <TagLabel name="code" />
            code
          </code>
          или
          <abbr
            title="HyperText Markup Language"
            className="mx-1 cursor-help underline decoration-dotted"
          >
            <TagLabel name="abbr" />
            HTML
          </abbr>
          .
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.4fr_0.9fr]">
        <div className="space-y-4">
          <div>
            <TagLabel name="section" />
            <TagLabel name="div" />
          </div>
          <h2 className="text-2xl font-semibold text-slate-900">
            <TagLabel name="h2" />
            Наблюдения по пути
          </h2>
          <ul className="list-disc space-y-2 pl-6 leading-7 text-slate-700 marker:text-teal-600">
            <li>
              <TagLabel name="li" />
              Почтальон всегда идет быстрее, чем кажется со стороны.
            </li>
            <li>
              <TagLabel name="li" />У киоска с газетами свет включают раньше,
              чем открывают окно.
            </li>
            <li>
              <TagLabel name="li" />
              На остановке кто-то обязательно нажимает на экран телефона ровно в
              тот момент, когда подъезжает нужный автобус.
            </li>
          </ul>

          <ol className="list-decimal space-y-2 pl-6 leading-7 text-slate-700 marker:font-semibold">
            <li>
              <TagLabel name="li" />
              Посмотреть на город без спешки.
            </li>
            <li>
              <TagLabel name="li" />
              Отметить детали, которые обычно ускользают.
            </li>
            <li>
              <TagLabel name="li" />
              Собрать их в связный текст.
            </li>
          </ol>
        </div>

        <aside className="rounded-2xl bg-slate-50 p-5">
          <div>
            <TagLabel name="aside" />
          </div>
          <h3 className="text-lg font-semibold text-slate-900">
            <TagLabel name="h3" />
            Небольшая памятка
          </h3>
          <dl className="mt-4 space-y-3">
            <div>
              <TagLabel name="div" />
              <dt className="text-sm font-medium text-slate-500">
                <TagLabel name="dt" />
                Время
              </dt>
              <dd className="text-slate-800">
                <TagLabel name="dd" />
                06:45 утра
              </dd>
            </div>
            <div>
              <TagLabel name="div" />
              <dt className="text-sm font-medium text-slate-500">
                <TagLabel name="dt" />
                Погода
              </dt>
              <dd className="text-slate-800">
                <TagLabel name="dd" />
                Свежо, без дождя
              </dd>
            </div>
            <div>
              <TagLabel name="div" />
              <dt className="text-sm font-medium text-slate-500">
                <TagLabel name="dt" />
                Темп
              </dt>
              <dd className="text-slate-800">
                <TagLabel name="dd" />
                Спокойный и размеренный
              </dd>
            </div>
          </dl>
        </aside>
      </section>

      <section className="space-y-4">
        <div>
          <TagLabel name="section" />
        </div>
        <h2 className="text-2xl font-semibold text-slate-900">
          <TagLabel name="h2" />
          Цитата и команда
        </h2>
        <blockquote className="rounded-r-2xl border-l-4 border-teal-500 bg-teal-50 px-5 py-4 text-slate-700">
          <TagLabel name="blockquote" />
          Хороший текст не кричит о себе. Он просто ведет читателя так, что тот
          не замечает лишних усилий.
        </blockquote>
        <p className="leading-7 text-slate-700">
          <TagLabel name="p" />
          Если бы это была инструкция для редактора, она могла бы выглядеть так:
          нажмите
          <kbd className="mx-1 rounded border border-slate-300 bg-slate-100 px-2 py-1 text-sm text-slate-800">
            <TagLabel name="kbd" />
            ctrl
          </kbd>
          +
          <kbd className="mx-1 rounded border border-slate-300 bg-slate-100 px-2 py-1 text-sm text-slate-800">
            <TagLabel name="kbd" />
            +
          </kbd>
          , затем проверьте выделения, интервалы и подписи перед публикацией.
        </p>
      </section>

      <section className="space-y-4">
        <div>
          <TagLabel name="section" />
        </div>
        <h2 className="text-2xl font-semibold text-slate-900">
          <TagLabel name="h2" />
          Небольшая таблица
        </h2>
        <div className="overflow-hidden rounded-2xl border border-slate-200">
          <TagLabel name="div" />
          <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
            <caption className="bg-slate-50 px-4 py-3 text-left text-sm text-slate-500">
              <TagLabel name="caption" />
              Сравнение ощущений от города в разное время суток
            </caption>
            <thead className="bg-slate-50 text-slate-700">
              <tr>
                <th className="px-4 py-3 font-semibold">
                  <TagLabel name="th" />
                  Время
                </th>
                <th className="px-4 py-3 font-semibold">
                  <TagLabel name="th" />
                  Звук
                </th>
                <th className="px-4 py-3 font-semibold">
                  <TagLabel name="th" />
                  Настроение
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white text-slate-700">
              <tr>
                <td className="px-4 py-3">
                  <TagLabel name="td" />
                  Утро
                </td>
                <td className="px-4 py-3">
                  <TagLabel name="td" />
                  Тихое, редкое
                </td>
                <td className="px-4 py-3">
                  <TagLabel name="td" />
                  Собранное
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3">
                  <TagLabel name="td" />
                  День
                </td>
                <td className="px-4 py-3">
                  <TagLabel name="td" />
                  Плотное, деловое
                </td>
                <td className="px-4 py-3">
                  <TagLabel name="td" />
                  Быстрое
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3">
                  <TagLabel name="td" />
                  Вечер
                </td>
                <td className="px-4 py-3">
                  <TagLabel name="td" />
                  Глубокое, многослойное
                </td>
                <td className="px-4 py-3">
                  <TagLabel name="td" />
                  Расслабленное
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <footer className="space-y-3 border-t border-slate-200 pt-6 text-sm text-slate-500">
        <div>
          <TagLabel name="footer" />
        </div>
        <p>
          <TagLabel name="p" />
          В тексте использованы заголовки, абзацы, списки, цитата, таблица,
          встроенные элементы и выделения.
        </p>
        <p>
          <TagLabel name="p" />
          Итоговая цель задания проста: показать, что даже произвольный текст
          можно сверстать аккуратно, разнообразно и читаемо.
        </p>
      </footer>
    </article>
  );
}
