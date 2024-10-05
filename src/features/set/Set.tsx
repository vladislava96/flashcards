import styles from './Set.module.css';

import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { deleteSet, SetModel } from '../setsList/setsListSlice';
import { openSet } from '../board/boardSlice';
import { editForm } from '../set-edit-form/setEditFormSlice';
import { idCardsInSet, deleteCardsInSet } from '../cardsList/cardsListSlice';
import { MouseEvent } from 'react';

interface SetProperties {
  set: SetModel
}

export function Set({ set }: SetProperties) {
  const dispatch = useAppDispatch();
  const idCardsDelete = useAppSelector(idCardsInSet(set.id));

  function onClick(e: MouseEvent) {
    e.preventDefault();
    dispatch(openSet(set.id))
  }

  function onEditButtonClick(e: MouseEvent) {
    e.stopPropagation();
    dispatch(editForm(set))
  }

  function onDeleteButtonClick(e: MouseEvent) {
    e.stopPropagation();
    dispatch(deleteSet(set.id))
    dispatch(deleteCardsInSet(idCardsDelete))
  }

  return (
    <div className={styles.set} onClick={onClick}>
      <p>{set.id}</p>
      <p>{set.name}</p>
      <button onClick={onDeleteButtonClick}>Delete</button>
      <button onClick={onEditButtonClick}>Edit</button>
    </div>
  )
}