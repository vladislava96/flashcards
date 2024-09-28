import styles from './Set.module.css';

import { useAppDispatch } from '../../app/hooks'
import { SetModel } from '../setsList/setsListSlice';
import { openSet } from '../board/boardSlice';
import { editForm } from '../set-edit-form/setEditFormSlice';

export function Set({id, name, cards}: SetModel) {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.set} onClick={(e) => {
      e.preventDefault();
      dispatch(openSet(id))
    }}>
      <p>{id}</p>
      <p>{name}</p>
      <button>Delete</button>
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