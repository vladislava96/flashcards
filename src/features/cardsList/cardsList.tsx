import { useAppSelector } from '../../app/hooks';
import { Card } from '../card/Card';
import { cardsInSet } from './cardsListSlice';
import { selectBoard } from '../board/boardSlice';

import style from './CardsList.module.css';
import { CardCreationForm } from '../card-creation-form/cardCreationForm';
import { CardEditForm } from '../card-edit-form/cardEditForm';

export function CardsList() {
  const openSetID = useAppSelector(selectBoard);
  const cards = useAppSelector(cardsInSet(openSetID));

	return (
    <div>
      <div className={style.cardsList}>
        {cards.map(card => (
          <Card key={card.id} card={card} />
        ))}
      </div>
      <div>
        <CardCreationForm />
        <CardEditForm />
        <p>Карточки</p>
      </div>
    </div>
	)
}