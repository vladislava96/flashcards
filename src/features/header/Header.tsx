import styles from './Header.module.css';

export function Header() {
  return (
  <div className={styles.header}>
    <div className={styles.headerWrapper}>
      <div className={styles.logo}>FlashCards-En</div>
    </div>
  </div>
  )
}