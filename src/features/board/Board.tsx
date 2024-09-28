import { useAppSelector } from '../../app/hooks';
import { CardsList } from '../cardsList/CardsList';
import { SetsList } from '../setsList/SetsList';
import { selectBoard } from './boardSlice';

export function Board() {
  const selectSet = useAppSelector(selectBoard);

  return (
    <div>
      <CardsList />
      <SetsList />
      <div>{selectSet}</div>
    </div>
  )
}