import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { CardsList } from '../cardsList/CardsList';
import { SetsList } from '../setsList/SetsList';
import { openSet, selectBoard } from './boardSlice';
import styles from './Board.module.css';

export function Board() {
  const selectSet = useAppSelector(selectBoard);
  const dispatch = useAppDispatch();

  return (
    <div className={styles.board}>
      <ul className={styles.breadcrumbs}>
        <li onClick={() => dispatch(openSet(-1))}>Наборы</li>
        {selectSet !== -1 && <li>Карточки</li>}
      </ul>
      { selectSet !== -1 ? <CardsList /> : <SetsList /> }
      <div>{selectSet}</div>
    </div>
  )
}