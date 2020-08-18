import React, { useState } from 'react';
import './App.css';
import { randomPerson as Randomperson } from './Person/Person'
import { person as Person } from './Person/Person'

const App = props => {

    const [personsState, setPersonsState] = useState({
        persons: [
            { name: 'Gastón', age: 43 },
            { name: 'Natalia', age: 41 },
            { name: 'Malena', age: 6 }
        ],
        otherState: 'some other value'
    })
    console.log(personsState);

    const switchNameHandler = () => {
        // console.log('was clicked!')
        setPersonsState({
            persons: [
                { name: 'Gonzalo', age: 43 },
                { name: 'Maria', age: 41 },
                { name: 'Malena', age: 55 }
            ]
        })
    }

    return (
        <div className="App">
            <h1>Hi, I'am React App Component</h1>
            <button onClick={switchNameHandler}>Switch Name</button>
            <Randomperson></Randomperson>
            <Person
                name={personsState.persons[0].name}
                age={personsState.persons[0].age}
            >My hobbie is fishing</Person>
            <Person
                name={personsState.persons[1].name}
                age={personsState.persons[1].age}>
            </Person>
            <Person
                name={personsState.persons[2].name}
                age={personsState.persons[2].age}>
            </Person>
            <p>{personsState.otherState}</p>
        </div>
    );

}

export default App;