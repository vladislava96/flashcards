import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { CardsList } from '../cardsList/CardsList';
import { SetsList } from '../setsList/SetsList';
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
        <li onClick={onChangeBoard}>Sets</li>
        {selectSet !== -1 && <li>Cards</li>}
      </ul>
      { selectSet !== -1 ? <CardsList /> : <SetsList /> }
    </div>
  )
}