import type { ButtonHTMLAttributes, CSSProperties, ReactNode } from 'react';
import './BaseButton.scss';

type BaseButtonProps = {
  arrow?: boolean;
  className?: string;
  icon?: ReactNode;
  label: string;
  toneVars?: CSSProperties;
  visualState?: 'default' | 'hover' | 'active' | 'disabled';
} & ButtonHTMLAttributes<HTMLButtonElement>;

function joinClasses(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}

export function BaseButton({
  arrow = false,
  className,
  icon,
  label,
  toneVars,
  type = 'button',
  visualState = 'default',
  ...props
}: BaseButtonProps) {
  return (
    <button
      {...props}
      className={joinClasses(
        'buttonBase',
        icon !== undefined && icon !== null && 'compact',
        visualState === 'hover' && 'isHover',
        visualState === 'active' && 'isActive',
        className,
      )}
      disabled={visualState === 'disabled' ? true : props.disabled}
      style={toneVars}
      type={type}
    >
      {icon ? <span className="icon">{icon}</span> : null}
      <span>{label}</span>
      {arrow ? <span aria-hidden="true" className="arrow" /> : null}
    </button>
  );
}
