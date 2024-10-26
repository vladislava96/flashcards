import { useAppDispatch, useAppSelector } from '../../app/hooks';
import style from './SetsList.module.css';
import { Set } from '../set/Set';
import { allSets } from './setsListSlice';
import add from './add.svg';
import { addSet } from './setsListSlice';
import { activeEditForm } from '../set-edit-form/setEditFormSlice';

export function SetsList() {
  const dispatch = useAppDispatch();
  const sets = useAppSelector(allSets);

	return (
    <div className={style.setsListWrapper}>
      <div className={style.setsList}>
        {sets.map(set => (
          <Set key={set.id} set={set} />
        ))}
        <div className={style.createSetButton} onClick={() => { 
            dispatch(addSet({
              id: -1,
              name: 'New set',
              cards: []
            }));
            dispatch(activeEditForm(false))
          }}>
          <img src={add} alt="add"/>
        </div>
      </div>
    </div>
	)
}