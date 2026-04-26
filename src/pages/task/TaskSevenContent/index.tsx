import { useState } from 'react';
import { BlueGlossButton } from '../../../ui/buttons/BlueGlossButton';
import { RedToggle } from '../../../ui/input/RedToggle';

export function TaskSevenContent() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <section className="flex min-h-[420px] items-center justify-center rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
      <div className="flex flex-col items-center gap-10">
        <BlueGlossButton label="Кнопка" />
        <RedToggle checked={isChecked} onChange={setIsChecked} />
      </div>
    </section>
  );
}
