import styles from './BlueGlossButton.module.scss';

type BlueGlossButtonProps = {
  label: string;
  onClick?: () => void;
};

export function BlueGlossButton({
  label,
  onClick,
}: BlueGlossButtonProps) {
  return (
    <button className={styles.blueGlossButton} onClick={onClick} type="button">
      <span className={styles.gloss} />
      <span className={styles.innerBorder} />
      <span className={styles.label}>{label}</span>
    </button>
  );
}
