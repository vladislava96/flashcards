import styles from "./CreateButton.module.css";
import add from "../../img/add.svg";

export function CreateButton({ onClick }: any) {
  return (
    <div className={styles.createButton} onClick={onClick}>
      <div className={styles.imageWrapper}>
        <img className={styles.buttonImage} src={add} alt="Add"/>
      </div>
    </div>
  )
}