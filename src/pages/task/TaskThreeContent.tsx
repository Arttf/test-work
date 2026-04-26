import {
  DangerOutlineButton,
  DangerSolidButton,
  IconActionButton,
  NeutralArrowButton,
  NeutralButton,
  SuccessOutlineButton,
  SuccessSolidButton,
} from '../../ui/buttons';
import { iconActionPresets } from '../../ui/buttons/base/iconActionPresets';

const stateRows = [
  { key: 'default', visualState: 'default' },
  { key: 'hover', visualState: 'hover' },
  { key: 'active', visualState: 'active' },
  { key: 'disabled', visualState: 'disabled' },
] as const;

const buttonGroups = [
  { component: NeutralButton, title: 'Neutral' },
  { component: DangerOutlineButton, title: 'Danger Outline' },
  { component: DangerSolidButton, title: 'Danger Solid' },
  { component: NeutralArrowButton, title: 'Arrow' },
  { component: SuccessSolidButton, title: 'Success Solid' },
  { component: SuccessOutlineButton, title: 'Success Outline' },
] as const;

export function TaskThreeContent() {
  return (
    <section className="space-y-8 rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold text-slate-900">Варианты кнопок</h1>
        <p className="max-w-3xl text-sm leading-6 text-slate-600">
          Базовая кнопка вынесена отдельно, а остальные наборы собраны поверх нее
          через переиспользование общих стилей и переменных в `scss`.
        </p>
      </div>

      <div className="flex flex-wrap gap-8">
        {buttonGroups.map(({ component: Component, title }) => (
          <div key={title} className="w-full max-w-[220px] space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              {title}
            </p>
            <div className="space-y-4">
              {stateRows.map((state) => (
                <div key={state.key}>
                  <Component visualState={state.visualState} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-4 border-t border-slate-200 pt-8">
        {iconActionPresets.map((preset) => (
          <div key={preset.label}>
            <IconActionButton icon={preset.icon} label={preset.label} />
          </div>
        ))}
      </div>
    </section>
  );
}
