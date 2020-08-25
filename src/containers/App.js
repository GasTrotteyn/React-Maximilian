import React, { Component } from 'react';
import classes from './App.css';
//import styled from 'styled-components';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit';



class App extends Component {

    constructor(props) {
        super(props);
        console.log('[App.js] 1.constructor')

    }


    state = {
        persons: [
            { weight: 95, id: '1', name: 'Gastón', age: 43 },
            { weight: 53, id: '2', name: 'Natalia', age: 41 },
            { weight: 22, id: '3', name: 'Malena', age: 6 }
        ],
        otherState: 'some other value',
        showPersons: false
    }

    static getDerivedStateFromProps(props, state) {
        console.log('[App.js] 2.getDerivedStateFromProps', props);
        return state;
    }

    componentDidMount() {
        console.log('[App.js] 4.ComponentDidMount')
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[App.js] shouldComponentUpdate')
        return true
    }

    componentDidUpdate() {
        console.log('[App.js] ComponentDidUpdate')
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
        console.log('[App.js] 3.render')

        let personsToShow = null;


        if (this.state.showPersons) {
            personsToShow = (<div>
                <Persons
                    persons={this.state.persons}
                    click={this.deletePersonHandler}
                    changed={this.nameChangedHandler} />

            </div>);



        };

        return (
            <div className={classes.App} >
                <Cockpit
                    title={this.props.title}
                    persons={this.state.persons}
                    showPersons={this.state.showPersons}
                    btnClicked={this.toggleShowPersons}
                />
                {personsToShow}

            </div >
        )
    }


}

export default App;



