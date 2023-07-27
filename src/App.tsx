import React from 'react';
import './App.css';
import { Greet, Person, PersonList } from './components/props';

function App() {

  const personName = {
    first: 'Abhisek',
    last: 'Dubey'
  }

  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne'
    },
    {
      first: 'Clark',
      last: 'Kent'
    },
    {
      first: 'Princess',
      last: 'Diana'
    }
  ]

  return (
    <div className="App">
      <header className="App-header">
        React with Typescript
        <Greet name='Abhisek' isLoggedIn={true} />
        <Person name={personName} />
        <PersonList names={nameList} />
      </header>
    </div>
  );
}

export default App;
