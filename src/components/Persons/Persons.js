import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
    state = {}
    static getDerivedStateFromProps(props, state) {
        console.log('[persons.js] getderived');
        return state;
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] shoulComponentUpdate')
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[persons.js] getSnapshot')
        return { message: 'snapshot!' };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] ComponentDidUpdate');
        console.log(snapshot)
    }


    render() {
        console.log('[Persons] rendering...')
        return this.props.persons.map((person, i) => {

            return <Person
                click={() => this.props.click(i)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) =>
                    this.props.changed(event, person.id)} />
        })
    }

};

export default Persons;