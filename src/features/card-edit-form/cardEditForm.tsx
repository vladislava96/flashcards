import { ChangeEvent, FormEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { editCard } from '../cardsList/cardsListSlice';
import styles from './CardEditForm.module.css';
import { activeCreationForm, editForm, selectForm } from './cardEditFormSlice';
import tickCircle from '../../img/tick-circle.svg';


export function CardEditForm() {
  const cardData = useAppSelector(selectForm);
  const dispatch = useAppDispatch();

  function onFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(editCard({
      id: cardData.id,
      changes: {
        term: cardData.term,
        definition: cardData.definition
      }
    }));
    dispatch(activeCreationForm(false))
  }

  function onTermChange(e: ChangeEvent<HTMLInputElement>) {
    dispatch(editForm({
      id: cardData.id,
      definition: cardData.definition,
      term: e.target.value,
      setId: cardData.setId
    }))
  }

  function onDefinitionChange(e: ChangeEvent<HTMLInputElement>) {
    dispatch(editForm({
      id: cardData.id,
      definition: e.target.value,
      term: cardData.term,
      setId: cardData.setId
    }))
  }

  return (
    <form className={styles.cardEditForm} onSubmit={onFormSubmit}>
      <input
        type="text"
        value={cardData.term}
        onChange={onTermChange}
      />
      <input
        type="text"
        value={cardData.definition}
        onChange={onDefinitionChange}
      />
      <button className={styles.updateButton} type="submit" value="Update">
        <img src={tickCircle} alt="Submit"></img>
      </button>
    </form>
  )
}