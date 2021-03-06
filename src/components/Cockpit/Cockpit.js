import React, { useEffect } from 'react';
import classes from './Cockpit.css'


const cockpit = (props) => {

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        setTimeout(() => {
            alert('Saved data from cloud!')
        }, 1000)
    }, [])

    let assignedClasses = [];
    if (props.persons.length < 3
    ) {
        assignedClasses.push(classes.red)
    }

    if (props.persons.length < 2) {
        assignedClasses.push(classes.bold)
    }

    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red
    }

    return (
        <div className={classes.Cockpit}>
            <h1

            >{props.title}</h1>
            <p className={assignedClasses.join(' ')}
            >This is really working</p>
            <button className={btnClass} onClick={props.btnClicked}>
                Toggle Persons</button>

        </div>
    )
}

export default cockpit;