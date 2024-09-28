import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { addCard } from '../cardsList/cardsListSlice';
import styles from './CardCreationForm.module.css';
import { selectBoard } from '../board/boardSlice';

export function CardCreationForm() {
  const [term, setTerm] = useState("");
  const [description, setDescription] = useState("");
  const [index, setIndex] = useState(0);
  const dispatch = useAppDispatch();
  const openSetId = useAppSelector(selectBoard);

  return (
    <div>
      <p>Create form</p>
      <form className={styles.cardCreationForm} onSubmit={(e) => {
        e.preventDefault();
        setIndex(index + 1);
        dispatch(addCard({
          term: term,
          definition: description,
          id: index,
          setId: openSetId
        }))
      }}>
        <label>Term:
          <input
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </label>
        <label>Description:
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <input type="submit" value="Add"></input>
      </form>
    </div>
  )
}
