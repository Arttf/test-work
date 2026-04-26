import type { CSSProperties } from 'react';
import { BaseButton } from './base-button/BaseButton';
import type { ButtonProps } from './types';

const successSolidVars: CSSProperties = {
  ['--button-bg' as string]: '#78a62c',
  ['--button-bg-hover' as string]: '#8cbd3d',
  ['--button-bg-active' as string]: '#5f8822',
  ['--button-bg-disabled' as string]: '#a6c67c',
  ['--button-border' as string]: '#78a62c',
  ['--button-border-hover' as string]: '#8cbd3d',
  ['--button-border-active' as string]: '#5f8822',
  ['--button-border-disabled' as string]: '#a6c67c',
  ['--button-text' as string]: '#ffffff',
  ['--button-text-hover' as string]: '#ffffff',
  ['--button-text-active' as string]: '#ffffff',
  ['--button-text-disabled' as string]: '#f3f9ec',
};

export function SuccessSolidButton({
  disabled = false,
  label = 'Просмотреть',
  visualState = 'default',
}: ButtonProps) {
  return (
    <BaseButton
      disabled={disabled}
      label={label}
      toneVars={successSolidVars}
      visualState={visualState}
    />
  );
}
