import './App.css';
import { CardCreationForm } from './features/card-creation-form/cardCreationForm';
import { CardsList } from './features/cardsList/cardsList';
import { CardEditForm } from './features/card-edit-form/cardEditForm';

function App() {
  return (
    <div className="App">
      <CardCreationForm />
      <CardsList />
      <CardEditForm />
    </div>
  );
}

export default App;
