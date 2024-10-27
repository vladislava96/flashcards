import { ChangeEvent, FormEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { editSet } from '../setsList/setsListSlice';
import styles from './SetEditForm.module.css';
import { activeEditForm, editForm, selectForm } from './setEditFormSlice';

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
      <label>Name:
        <input
          type="text"
          value={setData.name}
          onChange={onFormChange}
        />
      </label>
      <input type="submit" value="Update"></input>
    </form>
  )
}