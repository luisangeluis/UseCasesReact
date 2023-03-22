import { useState } from 'react';
import './App.css';
import MyForm from './components/moleculas/MyForm';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <MyForm />
    </div>
  );
}

export default App;
