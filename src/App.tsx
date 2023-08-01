import React from 'react';
import './App.css';
import { Greet, Heading, Oscar, Person, PersonList, Status } from './components/props';

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
        <Status status='loading' />
        <Heading>Placeholder text</Heading>
        <Oscar>
          <Heading>Oscar goes to Dicaprio</Heading>
        </Oscar>
      </header>
    </div>
  );
}

export default App;
