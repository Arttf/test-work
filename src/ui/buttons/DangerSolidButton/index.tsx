import type { CSSProperties } from 'react';
import { BaseButton } from '../base';
import type { ButtonProps } from '../base/types';

const dangerSolidVars: CSSProperties = {
  ['--button-bg' as string]: '#e01206',
  ['--button-bg-hover' as string]: '#ff3022',
  ['--button-bg-active' as string]: '#be1107',
  ['--button-bg-disabled' as string]: '#f28b8b',
  ['--button-border' as string]: '#e01206',
  ['--button-border-hover' as string]: '#ff3022',
  ['--button-border-active' as string]: '#be1107',
  ['--button-border-disabled' as string]: '#f28b8b',
  ['--button-text' as string]: '#ffffff',
  ['--button-text-hover' as string]: '#ffffff',
  ['--button-text-active' as string]: '#ffffff',
  ['--button-text-disabled' as string]: '#ffeaea',
};

export function DangerSolidButton({
  disabled = false,
  label = 'Просмотреть',
  visualState = 'default',
}: ButtonProps) {
  return (
    <BaseButton
      disabled={disabled}
      label={label}
      toneVars={dangerSolidVars}
      visualState={visualState}
    />
  );
}
