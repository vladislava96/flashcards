import './App.css';
import { CardCreationForm } from './features/card-creation-form/cardCreationForm';
import { CardEditForm } from './features/card-edit-form/cardEditForm';
import { SetCreationForm } from './features/set-creation-form/SetCreationForm';
import { Board } from './features/board/Board';
import { SetEditForm } from './features/set-edit-form/SetEditForm';

function App() {
  return (
    <div className="App">
      <Board />
      <CardCreationForm />
      <CardEditForm />
      <SetCreationForm />
      <SetEditForm />
    </div>
  );
}

export default App;
