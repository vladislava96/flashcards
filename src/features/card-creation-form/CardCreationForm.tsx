import { FormEvent, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { addCard } from '../cards-list/cardsListSlice';
import styles from './CardCreationForm.module.css';
import { selectBoard } from '../board/boardSlice';
import { activeCreationForm } from './cardCreationFormSlice';
import add from '../../img/add.svg';

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
    <form className={styles.cardCreationForm} onSubmit={onSubmitForm}>
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button className={styles.addButton} type="submit" value="Update">
        <img src={add} alt="Add"></img>
      </button>
    </form>
  )
}