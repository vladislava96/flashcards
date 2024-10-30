import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Card } from '../card/Card';
import { cardsInSet } from './cardsListSlice';
import { selectBoard } from '../board/boardSlice';

import style from './CardsList.module.css';
import { CardCreationForm } from '../card-creation-form/cardCreationForm';
import { CardEditForm } from '../card-edit-form/cardEditForm';
import { activeCreationForm, selectCardCreationForm } from '../card-creation-form/cardCreationFormSlice';

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
            "+"
          }
        </div>
      </div>
      <div>
        <CardEditForm />
        <p>Карточки</p>
      </div>
    </div>
	)
}