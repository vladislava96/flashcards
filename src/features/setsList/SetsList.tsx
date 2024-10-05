import { useAppDispatch, useAppSelector } from '../../app/hooks';
import style from './SetsList.module.css';
import { Set } from '../set/Set';
import { allSets } from './setsListSlice';
import { SetCreationForm } from '../set-creation-form/SetCreationForm';
import { SetEditForm } from '../set-edit-form/SetEditForm';
import { activeEditForm, selectForm } from '../set-edit-form/setEditFormSlice';

export function SetsList() {
  const dispatch = useAppDispatch();
  const sets = useAppSelector(allSets);
  const { activity } = useAppSelector(selectForm);

	return (
    <div>
      <h2>Наборы</h2>
      <div className={style.setsList}>
        {sets.map(set => (
          <Set key={set.id} set={set} />
        ))}
      </div>
      <div>
        <SetCreationForm />
        {activity && <SetEditForm />}
      </div>
      <button onClick={() => { dispatch(activeEditForm(true)) }}>Create set</button>
    </div>
	)
}