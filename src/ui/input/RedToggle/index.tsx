import styles from './RedToggle.module.scss';

type RedToggleProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
};

export function RedToggle({ checked, onChange }: RedToggleProps) {
  return (
    <button
      aria-checked={checked}
      className={`${styles.toggle} ${checked ? styles.checked : ''}`}
      onClick={() => onChange(!checked)}
      role="switch"
      type="button"
    >
      <span className={styles.track}>
        <span className={styles.thumb} />
      </span>
    </button>
  );
}
