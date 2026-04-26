import type { CSSProperties } from 'react';
import { BaseButton } from '../base';
import type { ButtonProps } from '../base/types';

const dangerOutlineVars: CSSProperties = {
  ['--button-bg' as string]: '#f7f7f7',
  ['--button-bg-hover' as string]: '#ffffff',
  ['--button-bg-active' as string]: '#e4e4e4',
  ['--button-bg-disabled' as string]: '#fbfbfb',
  ['--button-border' as string]: '#e93125',
  ['--button-border-hover' as string]: '#e93125',
  ['--button-border-active' as string]: '#e93125',
  ['--button-border-disabled' as string]: '#dddddd',
  ['--button-text' as string]: '#3f3f3f',
  ['--button-text-disabled' as string]: '#c8c8c8',
};

export function DangerOutlineButton({
  disabled = false,
  label = 'Просмотреть',
  visualState = 'default',
}: ButtonProps) {
  return (
    <BaseButton
      disabled={disabled}
      label={label}
      toneVars={dangerOutlineVars}
      visualState={visualState}
    />
  );
}
