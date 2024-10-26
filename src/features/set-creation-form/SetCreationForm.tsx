import { FormEvent, useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { addSet } from '../setsList/setsListSlice';
import styles from './SetCreationForm.module.css';

export function SetCreationForm() {
  const [name, setName] = useState("");
  const dispatch = useAppDispatch();

  function onFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(addSet({
      id: -1,
      name: name,
      cards: []
    }))
  };

  return (
    <form className={styles.setCreationForm} onSubmit={onFormSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      <input type="submit" value="Add"></input>
    </form>
  )
}
