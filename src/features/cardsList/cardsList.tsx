import { useAppSelector } from '../../app/hooks';
import { Card } from '../card/Card';
import { cardsInSet } from './cardsListSlice';
import { selectBoard } from '../board/boardSlice';

import style from './CardsList.module.css';

export function CardsList() {
  const openSetID = useAppSelector(selectBoard);
  const cards = useAppSelector(cardsInSet(openSetID));

	const listItems = cards.map(card => (
    <Card key={card.id} term={card.term} definition={card.definition} id={card.id} setId={card.setId}/>
  ));
	return (
    <div className={style.cardsList}>
      {listItems}
    </div>
	)
}