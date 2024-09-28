import { useAppSelector } from '../../app/hooks';
import style from './SetsList.module.css';
import { Set } from '../set/Set';
import { allSets } from './setsListSlice';

export function SetsList() {
  const sets = useAppSelector(allSets);
	const listItems = sets.map(set => (
    <Set key={set.id} id={set.id} name={set.name} cards={set.cards} />
  ));
	return (
    <div className={style.cardsList}>
      {listItems}
    </div>
	)
}