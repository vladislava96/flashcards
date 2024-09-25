import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { editCard } from '../cardsList/cardsListSlice';
import styles from './CardEditForm.module.css';
import { editForm, selectForm } from './cardEditFormSlice';


export function CardEditForm() {
  const cardData = useAppSelector(selectForm);
  const dispatch = useAppDispatch();

  return (
    <div>
      <p>Edit form</p>
      <form className={styles.cardEditForm} onSubmit={(e) => {
        e.preventDefault();
        dispatch(editCard({
          id: cardData.id,
          changes: {
            term: cardData.term,
            definition: cardData.definition
          }
        }))
      }}>
        <label>Term:
          <input
            type="text"
            value={cardData.term}
            onChange={(e) => dispatch(editForm({
              id: cardData.id,
              definition: cardData.definition,
              term: e.target.value,
            }))}
          />
        </label>
        <label>Description:
          <input
            type="text"
            value={cardData.definition}
            onChange={(e) => dispatch(editForm({
              id: cardData.id,
              definition: e.target.value,
              term: cardData.term,
            }))}
          />
        </label>
        <input type="submit" value="Update"></input>
      </form>
    </div>
  )
}