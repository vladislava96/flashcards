import { useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { addSet } from '../setsList/setsListSlice';
import styles from './SetCreationForm.module.css';

export function SetCreationForm() {
  const [name, setName] = useState("");
  const [index, setIndex] = useState(0);
  const dispatch = useAppDispatch();

  return (
    <div>
      <p>Set Create form</p>
      <form className={styles.setCreationForm} onSubmit={(e) => {
        e.preventDefault();
        setIndex(index + 1);
        dispatch(addSet({
          id: index,
          name: name,
          cards: []
        }))
      }}>
        <label>name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <input type="submit" value="Add"></input>
      </form>
    </div>
  )
}
