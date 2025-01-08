import styles from './Set.module.css';

import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { deleteSet, SetModel } from '../sets-list/setsListSlice';
import { openSet } from '../board/boardSlice';
import { activeEditForm, editForm, selectForm } from '../set-edit-form/setEditFormSlice';
import { idCardsInSet, deleteCardsInSet } from '../cards-list/cardsListSlice';
import { MouseEvent } from 'react';
import { SetEditForm } from '../set-edit-form/SetEditForm';
import trash from '../../img/trash.svg';

interface SetProperties {
  set: SetModel
}

export function Set({ set }: SetProperties) {
  const dispatch = useAppDispatch();
  const idCardsDelete = useAppSelector(idCardsInSet(set.id));
  const { activityEditForm } = useAppSelector(selectForm);
  const setData = useAppSelector(selectForm);

  function onClick(e: MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    dispatch(openSet(set.id))
  }

  function onEditButtonClick(e: MouseEvent) {
    e.stopPropagation();
    dispatch(editForm(set));
    dispatch(activeEditForm(true));
  }

  function onDeleteButtonClick(e: MouseEvent) {
    e.stopPropagation();
    dispatch(deleteSet(set.id))
    dispatch(deleteCardsInSet(idCardsDelete))
  }

  return (
    <div className={styles.set}>
      {
        activityEditForm && (setData.id === set.id) ?
        <SetEditForm /> :
        <div className={styles.setView} onClick={onClick}>
          <div className={styles.words} onClick={onEditButtonClick}>{set.name}</div>
          <button className={styles.deleteButton} onClick={onDeleteButtonClick}>
            <img className={styles.svg} src = {trash} alt="Delete"></img></button>
        </div>
      }
    </div>
  )
}