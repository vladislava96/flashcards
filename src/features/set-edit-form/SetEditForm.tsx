import { ChangeEvent, FormEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { editSet } from '../setsList/setsListSlice';
import styles from './SetEditForm.module.css';
import { activeEditForm, editForm, selectForm } from './setEditFormSlice';
import tickCircle from '../../img/tick-circle.svg';

export function SetEditForm() {
  const setData = useAppSelector(selectForm);
  const dispatch = useAppDispatch();

  function onFormSubmit(e: FormEvent) {
    e.preventDefault();
    e.stopPropagation();
    dispatch(editSet({
      id: setData.id,
      changes: {
        name: setData.name
      }
    }))
    dispatch(activeEditForm(false))
    dispatch(editForm({
      id: -1,
      name: ''
    }));
  }

  function onFormChange(e: ChangeEvent<HTMLInputElement>) {
      e.preventDefault();
      e.stopPropagation();
      dispatch(editForm({
        id: setData.id,
        name: e.target.value
      }))
  }

  return (
    <form className={styles.setEditForm} onSubmit={onFormSubmit}>
      <input
        type="text"
        value={setData.name}
        onChange={onFormChange}
      />
      <button className={styles.updateButton} type="submit" value="Update">
        <img src={tickCircle} alt="Submit"></img>
      </button>
    </form>
  )
}