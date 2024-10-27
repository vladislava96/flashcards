import { useAppDispatch, useAppSelector } from '../../app/hooks';
import style from './SetsList.module.css';
import { Set } from '../set/Set';
import { allSets } from './setsListSlice';
import add from './add.svg';
import { SetCreationForm } from '../set-creation-form/SetCreationForm';
import { activeCreationForm, selectSetCreationForm } from '../set-creation-form/SetCreationFormSlice';

export function SetsList() {
  const dispatch = useAppDispatch();
  const sets = useAppSelector(allSets);
  const activityForm = useAppSelector(selectSetCreationForm)

	return (
    <div className={style.setsListWrapper}>
      <div className={style.setsList}>
        {sets.map(set => (
          <Set key={set.id} set={set} />
        ))}
        <div className={style.createSetButton} onClick={() => {
          console.log(activityForm)
            dispatch(activeCreationForm(true))
          }}>
          {
            activityForm.activityCreationForm ?
            <SetCreationForm /> :
            <img src={add} alt="add"/>
          }
        </div>
      </div>
    </div>
	)
}