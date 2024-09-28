import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { editSet } from '../setsList/setsListSlice';
import styles from './SetEditForm.module.css';
import { editForm, selectForm } from './setEditFormSlice';

export function SetEditForm() {
  const setData = useAppSelector(selectForm);
  const dispatch = useAppDispatch();

  return (
    <div>
      <p>Set edit form</p>
      <form className={styles.setEditForm} onSubmit={(e) => {
        e.preventDefault();
        dispatch(editSet({
          id: setData.id,
          changes: {
            name: setData.name
          }
        }))
      }}>
        <label>Name:
          <input
            type="text"
            value={setData.name}
            onChange={(e) => dispatch(editForm({
              id: setData.id,
              name: e.target.value
            }))}
          />
        </label>
        <input type="submit" value="Update"></input>
      </form>
    </div>
  )
}