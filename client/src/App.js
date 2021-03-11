import { useState, useEffect } from 'react';
import './App.css';

function getUrl(path) {
  if (process.env.NODE_ENV === 'development') {
    return 'http://localhost:5000' + path
  }
  return path
}

function App() {
  const [message, setMessage] = useState('Hello');

  useEffect(() => {
    fetch(getUrl('/api/characters'))
      .then(res => res.json())
      .then(res => setMessage(res))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        {message.necromancer}
      </header>
    </div>
  );
}

export default App;
