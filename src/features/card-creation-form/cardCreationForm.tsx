import { FormEvent, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { addCard } from '../cardsList/cardsListSlice';
import styles from './CardCreationForm.module.css';
import { selectBoard } from '../board/boardSlice';
import { activeCreationForm } from './cardCreationFormSlice';

export function CardCreationForm() {
  const [term, setTerm] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useAppDispatch();
  const openSetId = useAppSelector(selectBoard);

  function onSubmitForm(e: FormEvent) {
    e.preventDefault();
    dispatch(addCard({
      term: term,
      definition: description,
      id: -1,
      setId: openSetId
    }));
    setTerm("");
    setDescription("");
    dispatch(activeCreationForm(false))
  }
  return (
    <div>
      <p>Create form</p>
      <form className={styles.cardCreationForm} onSubmit={onSubmitForm}>
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
