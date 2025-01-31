import { useAppDispatch, useAppSelector } from '../../app/hooks';
import styles from './SetsList.module.css';
import { Set } from '../set/Set';
import { allSets } from './setsListSlice';
import { SetCreationForm } from '../set-creation-form/SetCreationForm';
import { activeCreationForm, selectSetCreationForm } from '../set-creation-form/setCreationFormSlice';
import { CreateButton } from '../create-button/CreateButton';

export function SetsList() {
  const dispatch = useAppDispatch();
  const sets = useAppSelector(allSets);
  const activityForm = useAppSelector(selectSetCreationForm)

  function handleClick() {
    dispatch(activeCreationForm(true))
  }

	return (
    <div className={styles.setsList}>
      {sets.map(set => (
        <Set key={set.id} set={set} />
      ))}
      {
        activityForm.activityCreationForm ?
        <SetCreationForm /> :
        <CreateButton onClick={handleClick} />
      }
    </div>
	)
}