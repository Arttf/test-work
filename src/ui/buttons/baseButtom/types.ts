export type ButtonVisualState = 'default' | 'hover' | 'active' | 'disabled';

export type ButtonProps = {
  disabled?: boolean;
  label?: string;
  visualState?: ButtonVisualState;
};

