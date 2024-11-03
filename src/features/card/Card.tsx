import styles from './Card.module.css';

import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { MouseEvent, useState } from 'react';
import { deleteCard } from '../cardsList/cardsListSlice';
import { CardModel } from '../cardsList/cardsListSlice';
import { activeCreationForm, editForm, selectForm } from '../card-edit-form/cardEditFormSlice';
import { CardEditForm } from '../card-edit-form/cardEditForm';

interface CardProperties {
  card: CardModel
}

export function Card({ card }: CardProperties) {
  const dispatch = useAppDispatch();
  const [inverted, setSide] = useState(false);
  const { activityCreationForm } = useAppSelector(selectForm);
  const cardData = useAppSelector(selectForm);

  function onDeleteButtonClick(e: MouseEvent) {
    e.stopPropagation();
    dispatch(deleteCard(card.id))
  }

  function onEditButtonClick(e: MouseEvent) {
    e.stopPropagation();
    dispatch(editForm(card));
    dispatch(activeCreationForm(true));
  }

  return (
    <div className={styles.card} onClick={() => setSide(!inverted)}>
      { activityCreationForm && (card.id === cardData.id) ?
        <CardEditForm /> :
        <div>
          <p onClick={onEditButtonClick}>{inverted ? card.definition : card.term}</p>
          <p>{card.id}</p>
          <p>{card.setId}</p>
          <button onClick={onDeleteButtonClick}>Delete</button>
        </div>
      }
    </div>
  )
}
