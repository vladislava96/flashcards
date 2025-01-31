import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Card } from '../card/Card';
import { cardsInSet } from './cardsListSlice';
import { selectBoard } from '../board/boardSlice';

import style from './CardsList.module.css';
import { CardCreationForm } from '../card-creation-form/CardCreationForm';
import { activeCreationForm, selectCardCreationForm } from '../card-creation-form/cardCreationFormSlice';
import { CreateButton } from '../create-button/CreateButton';

export function CardsList() {
  const openSetID = useAppSelector(selectBoard);
  const cards = useAppSelector(cardsInSet(openSetID));
  const dispatch = useAppDispatch();
  const activityForm = useAppSelector(selectCardCreationForm)

  function handleClick() {
    dispatch(activeCreationForm(true));
  }

	return (
    <div>
      <div className={style.cardsList}>
        {cards.map(card => (
          <Card key={card.id} card={card} />
        ))}
        {
          activityForm.activityCreationForm ?
          <CardCreationForm /> :
          <CreateButton onClick={handleClick} />
        }
      </div>
    </div>
	)
}