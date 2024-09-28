import styles from './Set.module.css';

import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { deleteSet, SetModel } from '../setsList/setsListSlice';
import { openSet } from '../board/boardSlice';
import { editForm } from '../set-edit-form/setEditFormSlice';
import { idCardsInSet, deleteCardsInSet } from '../cardsList/cardsListSlice';

export function Set({id, name, cards}: SetModel) {
  const dispatch = useAppDispatch();
  const idCardsDelete = useAppSelector(idCardsInSet(id));

  return (
    <div className={styles.set} onClick={(e) => {
      e.preventDefault();
      dispatch(openSet(id))
    }}>
      <p>{id}</p>
      <p>{name}</p>
      <button onClick = {(e) => {
        e.stopPropagation();
        dispatch(deleteSet(id))
        dispatch(deleteCardsInSet(idCardsDelete))
      }}>Delete</button>
      <button onClick = {(e) => {
        e.stopPropagation();
        dispatch(editForm({
          id,
          name
        }))
      }}>Edit</button>
    </div>
  )
}