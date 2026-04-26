import type { CSSProperties, ReactNode } from 'react';
import { BaseButton } from '../base';

const neutralVars: CSSProperties = {
  ['--button-bg' as string]: '#f7f7f7',
  ['--button-bg-hover' as string]: '#ffffff',
  ['--button-bg-active' as string]: '#e4e4e4',
  ['--button-bg-disabled' as string]: '#fbfbfb',
  ['--button-border' as string]: '#c8c8c8',
  ['--button-border-hover' as string]: '#c2c2c2',
  ['--button-border-active' as string]: '#b8b8b8',
  ['--button-border-disabled' as string]: '#dddddd',
  ['--button-text' as string]: '#3f3f3f',
  ['--button-text-disabled' as string]: '#c8c8c8',
};

type IconActionButtonProps = {
  disabled?: boolean;
  icon: ReactNode;
  label: string;
};

export function IconActionButton({
  disabled = false,
  icon,
  label,
}: IconActionButtonProps) {
  return (
    <BaseButton
      disabled={disabled}
      icon={icon}
      label={label}
      toneVars={neutralVars}
    />
  );
}
