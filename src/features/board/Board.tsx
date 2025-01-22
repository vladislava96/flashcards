import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { CardsList } from '../cards-list/CardsList';
import { SetsList } from '../sets-list/SetsList';
import { openSet, selectBoard } from './boardSlice';
import styles from './Board.module.css';

export function Board() {
  const selectSet = useAppSelector(selectBoard);
  const dispatch = useAppDispatch();

  function onChangeBoard() {
    if (selectSet !== -1) {
      dispatch(openSet(-1))
    }
    return
  }

  return (
    <div className={styles.board}>
      <ul className={styles.breadcrumbs}>
        <li
          className={selectSet === -1 ? styles.activeList : ''} 
          onClick={onChangeBoard}>
            Sets
        </li>
        {selectSet !== -1 && <li><div className={styles.separator}></div></li>}
        {selectSet !== -1 && <li className={styles.activeList}>Cards</li>}
      </ul>
      { selectSet !== -1 ? <CardsList /> : <SetsList /> }
    </div>
  )
}