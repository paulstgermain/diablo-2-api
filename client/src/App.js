import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function getUrl(path) {
  if (process.env.NODE_ENV === 'development') {
    return 'http://localhost:5000' + path
  }
  return path
}

function App() {
  const [characters, setCharacters] = useState(null);

  useEffect(() => {
    axios.get(getUrl('/api/characters'))
      .then(res => {
        setCharacters(res.data.characters);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome!</h1>
        <h3>To the humble beginnings of the Diablo 2 API</h3>
        <p>Currently, you can only retrieve a list of characters and their classes (by accessing '*this url*/api/characters' with a GET request), but as time goes by, watch out for more information on these characters:</p>
        {characters && characters.map(char => {
          return <p>{char.class}</p>
        })}
      </header>
    </div>
  );
}

export default App;
