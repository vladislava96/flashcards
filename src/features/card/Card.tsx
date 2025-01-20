import styles from './Card.module.css';

import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { MouseEvent, useState } from 'react';
import { deleteCard } from '../cards-list/cardsListSlice';
import { CardModel } from '../cards-list/cardsListSlice';
import { activeCreationForm, editForm, selectForm } from '../card-edit-form/cardEditFormSlice';
import { CardEditForm } from '../card-edit-form/CardEditForm';
import trash from '../../img/trash.svg';

interface CardProperties {
  card: CardModel
}

export function Card({ card }: CardProperties) {
  const [inRotate, setRotate] = useState(false);
  const dispatch = useAppDispatch();
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

  let cardSide1 = inRotate ? (styles.cardSide1 + ' ' + styles.cardRotate) : styles.cardSide1;
  let cardSide2 = inRotate ? (styles.cardSide2 + ' ' + styles.cardRotate2) : styles.cardSide2;

  return (
  <div>
    { activityCreationForm && (card.id === cardData.id) ?
      <CardEditForm /> :
      <div className={styles.cardWrapper} onClick={ () => {
        setRotate(!inRotate);
      }}>
        <div className={cardSide1}>
          <div className={styles.cardView}>
            <div className={styles.words} onClick={onEditButtonClick}>
              {card.term}
            </div>
            <button className={styles.deleteButton} onClick={onDeleteButtonClick}>
              <img className={styles.svg} src = {trash} alt="Delete"></img>
            </button>
          </div>
        </div>
        <div className={cardSide2}>
          <div className={styles.cardView}>
            <div className={styles.words} onClick={onEditButtonClick}>
              {card.definition}
            </div>
            <button className={styles.deleteButton} onClick={onDeleteButtonClick}>
              <img className={styles.svg} src = {trash} alt="Delete"></img>
            </button>
          </div>
        </div>
      </div>
    }
  </div>
  )
}
