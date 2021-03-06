import React, { Component } from "react";
import classes from './Person.css';




class Person extends Component {

    render() {
        console.log('[Person.js] rendering...')
        return (

            <div className={classes.Person} onClick={this.props.click} >

                < p > My name is: {this.props.name} and I'm {this.props.age} years old.</ p>
                < p > {this.props.children}</ p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </div >
        )
    }
}

export default Person;