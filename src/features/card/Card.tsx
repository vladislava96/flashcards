import styles from './Card.module.css';

import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { MouseEvent, useState } from 'react';
import { deleteCard } from '../cardsList/cardsListSlice';
import { CardModel } from '../cardsList/cardsListSlice';
import { activeCreationForm, editForm, selectForm } from '../card-edit-form/cardEditFormSlice';
import { CardEditForm } from '../card-edit-form/CardEditForm';
import trash from '../../img/trash.svg';

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
      {
        activityCreationForm && (card.id === cardData.id) ?
        <CardEditForm /> :
        <div className={styles.cardView}>
          <p className={styles.words} onClick={onEditButtonClick}>{inverted ? card.definition : card.term}</p>
          <button className={styles.deleteButton} onClick={onDeleteButtonClick}>
            <img className={styles.svg} src = {trash} alt="Delete"></img>
          </button>
        </div>
      }
    </div>
  )
}
