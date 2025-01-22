import { useAppDispatch, useAppSelector } from '../../app/hooks';
import styles from './SetsList.module.css';
import { Set } from '../set/Set';
import { allSets } from './setsListSlice';
import add from '../../img/add.svg';
import { SetCreationForm } from '../set-creation-form/SetCreationForm';
import { activeCreationForm, selectSetCreationForm } from '../set-creation-form/setCreationFormSlice';

export function SetsList() {
  const dispatch = useAppDispatch();
  const sets = useAppSelector(allSets);
  const activityForm = useAppSelector(selectSetCreationForm)

	return (
    <div className={styles.setsList}>
      {sets.map(set => (
        <Set key={set.id} set={set} />
      ))}
      <div className={styles.createSetButton} onClick={() => {
          dispatch(activeCreationForm(true))
        }}>
        {
          activityForm.activityCreationForm ?
          <SetCreationForm /> :
          <img src={add} alt="Add"/>
        }
      </div>
    </div>
	)
}