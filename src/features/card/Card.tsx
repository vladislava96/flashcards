import styles from './Card.module.css';

import { useAppDispatch } from '../../app/hooks'
import { MouseEvent, useState } from 'react';
import { deleteCard } from '../cardsList/cardsListSlice';
import { CardModel } from '../cardsList/cardsListSlice';
import { editForm } from '../card-edit-form/cardEditFormSlice';

interface CardProperties {
  card: CardModel
}

export function Card({ card }: CardProperties) {
  const dispatch = useAppDispatch();
  const [inverted, setSide] = useState(false);

  function onDeleteButtonClick(e: MouseEvent) {
    e.stopPropagation();
    dispatch(deleteCard(card.id))
  }

  function onEditButtonClick(e: MouseEvent) {
    e.stopPropagation();
    dispatch(editForm(card));
  }

  return (
    <div className={styles.card} onClick={() => setSide(!inverted)}>
      {inverted ? card.definition : card.term}
      <p>{card.id}</p>
      <p>{card.setId}</p>
      <button onClick={onDeleteButtonClick}>Delete</button>
      <button onClick={onEditButtonClick}>Edit</button>
    </div>
  )
}
