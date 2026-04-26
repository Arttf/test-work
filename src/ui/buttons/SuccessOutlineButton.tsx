import type { CSSProperties } from 'react';
import { BaseButton } from './base-button/BaseButton';
import type { ButtonProps } from './types';

const successOutlineVars: CSSProperties = {
  ['--button-bg' as string]: '#f7f7f7',
  ['--button-bg-hover' as string]: '#ffffff',
  ['--button-bg-active' as string]: '#e4e4e4',
  ['--button-bg-disabled' as string]: '#fbfbfb',
  ['--button-border' as string]: '#78a62c',
  ['--button-border-hover' as string]: '#78a62c',
  ['--button-border-active' as string]: '#78a62c',
  ['--button-border-disabled' as string]: '#dddddd',
  ['--button-text' as string]: '#3f3f3f',
  ['--button-text-disabled' as string]: '#c8c8c8',
};

export function SuccessOutlineButton({
  disabled = false,
  label = 'Просмотреть',
  visualState = 'default',
}: ButtonProps) {
  return (
    <BaseButton
      disabled={disabled}
      label={label}
      toneVars={successOutlineVars}
      visualState={visualState}
    />
  );
}
