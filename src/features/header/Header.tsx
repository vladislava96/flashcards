import styles from './Header.module.css';
import logo from '../../img/logo.svg';

export function Header() {
  return (
  <div className={styles.header}>
    <div className={styles.headerContainer}>
      <div className={styles.logo}>
        <img src={logo} alt="logo"></img>FlashCards</div>
    </div>
  </div>
  )
}