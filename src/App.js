import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import { person as Person } from './Person/Person'

const StyledButton = styled.button`
    background-color: ${(props) => props.rec ? 'red' : 'green'};
    color: white;
    font: inherit;
    border: 1px solid blue;
    padding: 8px;
    cursor: pointer;

    &:hover {
        background-color: ${props => props.rec ? 'salmon' : 'lightgreen'};
        color: black;
    }
`;

class App extends Component {

    state = {
        persons: [
            { weight: 95, id: '1', name: 'Gastón', age: 43 },
            { weight: 53, id: '2', name: 'Natalia', age: 41 },
            { weight: 22, id: '3', name: 'Malena', age: 6 }
        ],
        otherState: 'some other value',
        showPersons: false
    }

    deletePersonHandler = (i) => {
        let persons = [...this.state.persons];
        persons.splice(i, 1);
        this.setState({ persons: persons })
    }

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        })
        const person = { ...this.state.persons[personIndex] };
        person.name = event.target.value;
        const persons = [...this.state.persons];
        persons[personIndex] = person;
        this.setState({ persons: persons })
    }

    toggleShowPersons = () => {
        const doesShow = this.state.showPersons;
        this.setState({
            showPersons: !doesShow
        })
    }

    render() {
        const style = {}

        let personsToShow = null;
        if (this.state.showPersons) {
            personsToShow = (<div>
                {this.state.persons.map((person, i) => {
                    return <Person
                        click={() => this.deletePersonHandler(i)}
                        name={person.name}
                        age={person.age}
                        key={person.id}
                        changed={(event) =>
                            this.nameChangedHandler(event, person.id)} />
                })}
            </div>)

        };
        let classes = [];
        if (this.state.persons.length < 3
        ) {
            classes.push('red')
        }

        if (this.state.persons.length < 2) {
            classes.push('bold')
        }
        return (
            <div className="App" >
                <h1>Hi, I'am React App Component</h1>
                <p className={classes.join(' ')}>This is really working!</p>
                <StyledButton rec={this.state.showPersons} onClick={this.toggleShowPersons}>

                    Toggle Persons</StyledButton>
                {personsToShow}

            </div >
        )
    }


}

export default App;



