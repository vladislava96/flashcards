import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Card } from '../card/Card';
import { cardsInSet } from './cardsListSlice';
import { selectBoard } from '../board/boardSlice';

import style from './CardsList.module.css';
import { CardCreationForm } from '../card-creation-form/cardCreationForm';
import { activeCreationForm, selectCardCreationForm } from '../card-creation-form/cardCreationFormSlice';
import add from '../../img/add.svg';

export function CardsList() {
  const openSetID = useAppSelector(selectBoard);
  const cards = useAppSelector(cardsInSet(openSetID));
  const dispatch = useAppDispatch();
  const activityForm = useAppSelector(selectCardCreationForm)

	return (
    <div>
      <div className={style.cardsList}>
        {cards.map(card => (
          <Card key={card.id} card={card} />
        ))}
        <div className={style.createCardButton} onClick={() => {
            dispatch(activeCreationForm(true))
          }}>
          {
            activityForm.activityCreationForm ?
            <CardCreationForm /> :
            <img src={add} alt="Add"/>
          }
        </div>
      </div>
    </div>
	)
}