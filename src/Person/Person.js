import React from "react";
//import './Person.css';
import styled from 'styled-components';

const StyledDiv = styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    text-align: center;
    padding: 16px;
    cursor: "pointer";
    
    @media (min-width: 500px){
        width: 450px;
    }
`;

export const randomPerson = (props) => {
    return <p onClick={props.click}>I'm a Random - Person! and I'm  {Math.floor(Math.random() * 60)} years old.</p>
}

export const person = (props) => {
    return (
        //<div className='Person' onClick={props.click}>
        <StyledDiv onClick={props.click}>

            < p > My name is: {props.name} and I'm {props.age} years old.</ p>
            < p > {props.children}</ p>
            <input type="text" onChange={props.changed} value={props.name} />

        </StyledDiv>
        // </div>


    )
}