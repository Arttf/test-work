import styles from './BlueGlossButton.module.scss';
//дкманстрирую инкапсудяцию стиля

type BlueGlossButtonProps = {
  label: string;
};

export function BlueGlossButton({ label }: BlueGlossButtonProps) {
  return (
    <button className={styles.blueGlossButton} type="button">
      <span className={styles.gloss} />
      <span className={styles.innerBorder} />
      <span className={styles.label}>{label}</span>
    </button>
  );
}
