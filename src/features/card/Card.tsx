import styles from './Card.module.css';

import { useAppDispatch } from '../../app/hooks'
import { useState } from 'react';
import { deleteCard } from '../cardsList/cardsListSlice';
import { CardModel } from '../cardsList/cardsListSlice';
import { editForm } from '../card-edit-form/cardEditFormSlice';

export function Card({ term, definition, id }: CardModel) {
  const dispatch = useAppDispatch();
  const [inverted, setSide] = useState(false);
  return (
    <div className={styles.card} onClick={() => setSide(!inverted)}>
      {inverted ? definition : term}
      <p>{id}</p>
      <button onClick={(e) => {
        e.stopPropagation();
        dispatch(deleteCard(id))
      }}>Delete</button>
      <button onClick={(e) => {
        e.stopPropagation();
        dispatch(editForm({
          term,
          definition,
          id
        }))
      }}>Edit</button>
    </div>
  )
}