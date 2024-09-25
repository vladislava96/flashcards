import { useAppSelector } from '../../app/hooks';
import style from './CardsList.module.css';
import { Card } from '../card/Card';
import { allCards } from './cardsListSlice';

export function CardsList() {
  const cards = useAppSelector(allCards);
	const listItems = cards.map(card => (
    <Card key={card.id} term={card.term} definition={card.definition} id={card.id}/>
  ));
	return (
    <div className={style.cardsList}>
      {listItems}
    </div>
	)
}