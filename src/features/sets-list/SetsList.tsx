import { useAppSelector } from '../../app/hooks';
import styles from './SetsList.module.css';
import { Set } from '../set/Set';
import { allSets } from './setsListSlice';
import { SetCreationForm } from '../set-creation-form/SetCreationForm';

export function SetsList() {
  const sets = useAppSelector(allSets);

	return (
    <div className={styles.setsList}>
      {sets.map(set => (
        <Set key={set.id} set={set} />
      ))}
        <SetCreationForm />
    </div>
	)
}